import {
  convertToNumber,
  convertCmToFeet,
  convertCmToInches
} from "../converters";

describe("Renders convertToNumber function", () => {
  it("with a empty string value", () => {
    const value = convertToNumber("");
    expect(value).toEqual(0);
  });
  it("with a string value", () => {
    const value = convertToNumber("unknown");
    expect(value).toEqual(0);
  });
  it("with number literal", () => {
    const value = convertToNumber(26);
    expect(value).toEqual(26);
  });
});

describe("Renders convertCmToFeet function", () => {
  it("with a empty string value", () => {
    const value = convertCmToFeet("sdfds");
    expect(value).toEqual("Not a Number!");
  });
  it("with a string value", () => {
    const value = convertCmToFeet("sdfds");
    expect(value).toEqual("Not a Number!");
  });
  it("with a number literal", () => {
    const value = convertCmToFeet(170);
    expect(value).toEqual(5);
  });
  
});

describe("Renders convertCmToInches function", () => {
  it("with a empty string value", () => {
    const value = convertCmToInches("");
    expect(value).toEqual("Not a Number!");
  });
  it("with a string value", () => {
    const value = convertCmToInches("sdfds");
    expect(value).toEqual("Not a Number!");
  });
  it("with a number literal", () => {
    const value = convertCmToInches(170);
    expect(value).toEqual(66.93);
  });
  
});
