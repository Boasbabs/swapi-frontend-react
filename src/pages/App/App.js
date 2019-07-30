import React, { useState, useEffect } from "react";
import { Header, Container, Icon } from "semantic-ui-react";
import axios from "axios";

import { CharacterPlaceholder, MovieDropdown } from "components";
import { FETCH_FILMS_API } from "../../constants";
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
    date: item.release_date,
    image: { avatar: true, src: "https://via.placeholder.com/150" }
  }));

  // Movie names in the dropdown sorted by release date from earliest to newest
  filmOptions.sort(function(a, b) {
    let dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });

  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <Header />
          <Header icon size="large" color="yellow" style={{fontWeight: "400", fontSize: "40px"}}>
            <Icon name="react" />
            Star Wars movies details below
            <Header.Subheader style={{color: "#fff"}}>
              Displaying data from <code>https://swapi.co</code>.
            </Header.Subheader>
          </Header>
          <MovieDropdown movieData={filmOptions} />
          {/* <CharacterPlaceholder /> */}
        </header>
        <img src={logo} className="App-logo" alt="logo" />
      </Container>
    </div>
  );
}

export default App;
