import React, { useState, useEffect } from "react";
import {
  Container,
  Segment,
  Image,
  Message,
  Loader,
  Grid
} from "semantic-ui-react";
import axios from "axios";

import {
  MovieDropdown,
  PageHeader,
  MarqueeMessage,
  SortableTable
} from "components";

import { sortDateOldToNew } from "utils";
import { FETCH_FILMS_API } from "../../constants";
import logo from "./assets/star_wars_logo.png";
import "./assets/App.css";

function App() {
  const [data, setData] = useState({ results: [] });
  const [filmCharacters, setFilmCharacters] = useState([]);
  const [value, setValue] = useState(null);
  const [openingCrawl, setOpeningCrawl] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // API Request for films
  useEffect(() => {
    async function fetchMovieData() {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(FETCH_FILMS_API);
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    fetchMovieData();
  }, [filmCharacters]);

  // The fields of the dropdown needs to be built from the API
  const filmOptions = data.results.map(item => ({
    key: item.episode_id,
    text: item.title,
    value: item.episode_id,
    date: item.release_date,
    opening_crawl: item.opening_crawl,
    characters: item.characters
  }));

  // Movie names in the dropdown sorted by release date from earliest to newest
  filmOptions.sort(sortDateOldToNew);

  function buildCharacterList(data) {
    let list = [];
    data.forEach(async url => {
      const result = await axios(url);
      list.push(result.data);
    });
    return list;
  }
  function handleChange(e, { value }) {
    // Needs to get current selected using the value of the selected options
    const currentFilm = filmOptions.find(film => film.value === value);

    // Needs to fetch API for each of characters
    const currentFilmCharactersUrl = currentFilm.characters;

    const charactersList = buildCharacterList(currentFilmCharactersUrl);

    return [
      setValue(value),
      setFilmCharacters(charactersList),
      setOpeningCrawl(currentFilm.opening_crawl)
    ];
  }

  return (
    <Container className="App" fluid>
      <Segment className="App-header" padded basic>
        <PageHeader
          title={"Fetching Star Wars API"}
          subtitle={"Displaying data from https://swapi.co."}
          icon={"react"}
        />

        {isError && (
          <Message
            style={{ width: "60%" }}
            compact
            negative
            icon="ban"
            header="We're sorry something"
            content="It is not your fault. Don't be hard on yourself"
          />
        )}

        <MovieDropdown
          loading={isLoading}
          movieData={filmOptions}
          handleChange={handleChange}
          value={value}
        />

        {openingCrawl && <MarqueeMessage text={openingCrawl} />}
      </Segment>

      <Grid centered container>
        <Grid.Row>
          <Grid.Column width={12}>
            { value === null ? (
              <Image src={logo} size="small" centered />
            ) : filmCharacters.length === 0 ? (
              <Loader
                active
                size="massive"
                inline="centered"
                content="Loading movie characters..."
              />
            ) : (
              <SortableTable tableData={filmCharacters} />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
