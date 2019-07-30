import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

const CharacterPlaceholder = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name="ban" color="yellow" />
      No characters are listed yet
    </Header>
    <Button primary>Please select a movie</Button>
  </Segment>
);

export default CharacterPlaceholder;
