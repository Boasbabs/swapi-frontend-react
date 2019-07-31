import React, { useState, useEffect } from "react";
import { Container, Segment, Image } from "semantic-ui-react";
import axios from "axios";

import {
  CharacterPlaceholder,
  MovieDropdown,
  PageHeader,
  MarqueeMessage
} from "components";

import { sortDateOldToNew } from "utils";
import { FETCH_FILMS_API } from "../../constants";
import logo from "./assets/star_wars_logo.png";
import "./assets/App.css";

function App() {

  const [data, setData] = useState({ results: [] });
  const [movieCharacter, setMovieCharacter] = useState({ characters: [] });
  const [value, setValue] = useState(null);
  const [openingCrawl, setOpeningCrawl] = useState(null);

  // API Request for films
  useEffect(() => {
    async function fetchMovieData() {
      const result = await axios(FETCH_FILMS_API);
      setData(result.data);
    }
    fetchMovieData();
  }, []);

  // API Request for films character
  useEffect(() => {
    async function fetchMovieCharacterData() {
      const characters = await axios(FETCH_FILMS_API);
      setMovieCharacter(characters.data);
    }
    fetchMovieCharacterData();
  }, []);

  // The fields of the dropdown needs to be built from the API
  const filmOptions = data.results.map(item => ({
    key: item.episode_id,
    text: item.title,
    value: item.episode_id,
    date: item.release_date,
    opening_crawl: item.opening_crawl
  }));

  // Movie names in the dropdown sorted by release date from earliest to newest
  filmOptions.sort(sortDateOldToNew);

  function handleChange(e, { value }) {
    const currentFilm = filmOptions.find(film => film.value === value);
    return [setValue(value), setOpeningCrawl(currentFilm.opening_crawl)];
  }

  return (
    <Container className="App" fluid>
      <Segment className="App-header" padded basic>
        <PageHeader
          title={"Fetching Star Wars API"}
          subtitle={"Displaying data from https://swapi.co."}
          icon={"react"}
        />
        <MovieDropdown
          movieData={filmOptions}
          handleChange={handleChange}
          value={value}
        />

        {/* <CharacterPlaceholder /> */}
        <pre>Current value: {value}</pre>

        {openingCrawl && <MarqueeMessage text={openingCrawl} />}
      </Segment>

      {value ? (
        <h1>we are blessed</h1>
      ) : (
        <Image src={logo} size="small" centered />
      )}
    </Container>
  );
}

export default App;
