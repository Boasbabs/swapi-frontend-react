import compareDates from "../compareDates";

describe(" Renders sortDateOldToNew util function", () => {
  it("with null value", () => {
    const value = compareDates("", "");
    expect(value).toEqual(null);
  });
  it("with values", () => {
    const a = { date: "1995-12-17T03:24:00" };
    const b = { date: "December 17, 1995 03:24:00" };
    const value = compareDates(a, b);
    expect(value).toEqual(0);
  });
});
