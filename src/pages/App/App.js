import React from "react";
import { Header, Container } from "semantic-ui-react";
import logo from "./assets/star_wars_logo.png";
import { CharacterPlaceholder, MovieDropdown } from "components";
import "./assets/App.css";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: { avatar: true, src: "https://via.placeholder.com/150" }
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: { avatar: true, src: "https://via.placeholder.com/150" }
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: { avatar: true, src: "https://via.placeholder.com/150" }
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: { avatar: true, src: "https://via.placeholder.com/150" }
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: { avatar: true, src: "https://via.placeholder.com/150" }
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: { avatar: true, src: "https://via.placeholder.com/150" }
  }
];

function App() {
  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header size="large" color="yellow">
            Star Wars movies details below
          </Header>
          <MovieDropdown movieData={friendOptions} />
          <CharacterPlaceholder />
        </header>
      </Container>
    </div>
  );
}

export default App;
