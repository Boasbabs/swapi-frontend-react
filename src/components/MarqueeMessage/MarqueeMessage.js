import React from "react";
import { Message } from "semantic-ui-react";

const MarqueeMessage = ({ text }) => (
  <Message style={{ width: "50%" }} color="black">
    <marquee behavior="scroll" direction="left">
      <p>{text}</p>
    </marquee>
  </Message>
);

export default MarqueeMessage;
