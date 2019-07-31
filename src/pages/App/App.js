import React, { useState, useEffect } from "react";
import { Container, Segment, Image } from "semantic-ui-react";
import axios from "axios";

import { CharacterPlaceholder, MovieDropdown, PageHeader } from "components";
import { sortDateOldToNew } from "utils";
import { FETCH_FILMS_API } from "../../constants";
import logo from "./assets/star_wars_logo.png";
import "./assets/App.css";

function App() {
  const [data, setData] = useState({ results: [] });
  const [value, setValue] = useState(null);

  // API Request
  useEffect(() => {
    async function fetchData() {
      const result = await axios(FETCH_FILMS_API);
      setData(result.data);
    }
    fetchData();
  }, []);

  // The fields of the dropdown needs to be built from the API
  const filmOptions = data.results.map(item => ({
    key: item.episode_id,
    text: item.title,
    value: item.episode_id,
    date: item.release_date
  }));

  // Movie names in the dropdown sorted by release date from earliest to newest
  filmOptions.sort(sortDateOldToNew);

  function handleChange(e, { value }) {
    return setValue(value);
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
      </Segment>
      <Image src={logo} size="small" centered />
    </Container>
  );
}

export default App;
