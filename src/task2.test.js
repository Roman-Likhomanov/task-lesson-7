import { max, nameMonth, circleSquare } from "./task2";

describe("max", () => {
  it("max number", () => {
    console.log = jest.fn();
    max(1, 2);
    expect(console.log).toHaveBeenCalledWith(2);
  });
});
describe("nameMonth", () => {
  it("enter the number and get a month", () => {
    jest.spyOn(window, "prompt").mockReturnValue("12");
    console.log = jest.fn();
    nameMonth();
    expect(console.log).toHaveBeenCalledWith("dec");
  });
});
describe("circleSquare", () => {
  it("a circle in a square", () => {
    console.log = jest.fn();
    circleSquare(100, 130);
    expect(console.log).toHaveBeenCalledWith("yes");
  });
});
