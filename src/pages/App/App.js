import React, { useState, useEffect } from "react";
import { Header, Container } from "semantic-ui-react";
import axios from "axios";

import { CharacterPlaceholder, MovieDropdown } from "components";
import { FETCH_FILMS_API } from "../../constants"
import logo from "./assets/star_wars_logo.png";
import "./assets/App.css";

function App() {
  const [data, setData] = useState({ results: [] });

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
    value: item.title,
    image: { avatar: true, src: "https://via.placeholder.com/150" }
  }));

  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header size="large" color="yellow">
            Star Wars movies details below
          </Header>
          <MovieDropdown movieData={filmOptions} />
          <CharacterPlaceholder />
        </header>
        
      </Container>
    </div>
  );
}

export default App;
