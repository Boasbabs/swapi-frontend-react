import React from "react";
import { Menu, Icon, Container, Header, Input } from "semantic-ui-react";
import logo from "./assets/star_wars_logo.png";
import { CharacterPlaceholder } from "components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header size="large" color="yellow">
          Star Wars movies details below
        </Header>
        <CharacterPlaceholder />
      </header>
    </div>
  );
}

export default App;
