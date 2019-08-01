import React, { useState, useEffect } from "react";
import {
  Container,
  Segment,
  Image,
  Header,
  Loader,
  Dimmer
} from "semantic-ui-react";
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
  const [filmCharacters, setFilmCharacters] = useState([]);
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
    const currentFilmCharacters = currentFilm.characters;

    const charactersList = buildCharacterList(currentFilmCharacters);

    return [
      setValue(value),
      setOpeningCrawl(currentFilm.opening_crawl),
      setFilmCharacters(charactersList)
    ];
  }
  console.log("filmChars", filmCharacters);
  console.log("data", data);

  return (
    <Container className="App" fluid>
      <Segment className="App-header" padded basic>
        <PageHeader
          title={"Fetching Star Wars API"}
          subtitle={"Displaying data from https://swapi.co."}
          icon={"react"}
        />

        {filmOptions.length === 0 ? (
        
          <Loader
            active
            size="big"
            inline="centered"
            content="Loading data..."
          />
        ) : (
          <MovieDropdown
            movieData={filmOptions}
            handleChange={handleChange}
            value={value}
          />
        )}

        {/* <CharacterPlaceholder /> */}
        <pre>Current value: {value}</pre>

        {openingCrawl && <MarqueeMessage text={openingCrawl} />}
      </Segment>
      {/* 
      
      {categoryData.length === 0 ? (
                  // Display spinner while data is fetch
                  <Menu.Item className="loading-container">
                    <Spin size="large" tip="Loading..." />
                  </Menu.Item>
                ) : (
                  categoryData.map(({ name, id }) => (
                    <SubMenu key={id} title={<span>{name}</span>}>
                      <Menu.Item key={`${id}1`}>Option 1</Menu.Item>
                      <Menu.Item key={`${id}2`}>Option 2</Menu.Item>
                    </SubMenu>
                  ))
                )}
      */}
      {value === null ? (
        <Image src={logo} size="small" centered />
      ) : filmCharacters.length == 0 ? (
        "loading"
      ) : (
        <p>this is tested</p>
      )}

      {/* { !value ? (
        <Image src={logo} size="small" centered />
        ) : (
          filmCharacters.map(item => (
            <Header  color="green" key={item.episode_id}>{console.log(item.mass)}</Header>
           
          ))

      )} */}
    </Container>
  );
}

export default App;
