import React from "react";
import ReactDOM from "react-dom";
import { act, render, fireEvent, cleanup, waitForElement} from "@testing-library/react";
import axiosMock from "axios";
import { PageHeader } from "components";
import App from "../App";

afterEach(cleanup);

describe("The App page", () => {
  it("Text in header shows", () => {
    const { getByText, findByText } = render(
      <PageHeader
        title={"Fetching Star Wars API"}
        subtitle={"Displaying data from https://swapi.co."}
        icon={"react"}
      />
    );
    expect(getByText(/Fetching Star/i).textContent).toBe(
      "Fetching Star Wars APIDisplaying data from https://swapi.co."
    );
  });

  
});
