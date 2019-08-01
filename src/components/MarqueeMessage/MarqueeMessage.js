import React from "react";
import PropTypes from 'prop-types';
import { Message } from "semantic-ui-react";

const MarqueeMessage = ({ text }) => (
  <Message style={{ width: "50%" }} color="black">
    <marquee behavior="scroll" direction="left">
      <p>{text}</p>
    </marquee>
  </Message>
);

MarqueeMessage.propTypes = {
    text: PropTypes.string.isRequired
}

export default MarqueeMessage;
