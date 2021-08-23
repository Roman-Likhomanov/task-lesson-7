import { summ, tabl, sumnum } from "./task3";

describe("summ", () => {
  it("the sum of the numbers from 50 to 100", () => {
    console.log = jest.fn();
    summ();
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});
describe("tabl", () => {
  it("multiplication table", () => {
    console.log = jest.fn();
    tabl();
    expect(console.log).toHaveBeenCalledWith("7 x 1 = 7");
    expect(console.log).toHaveBeenCalledWith("7 x 2 = 14");
    expect(console.log).toHaveBeenCalledWith("7 x 3 = 21");
  });
});
describe("sumnum", () => {
  it("arithmetic mean", () => {
    jest.spyOn(window, "prompt").mockReturnValue("20");
    console.log = jest.fn();
    sumnum();
    expect(console.log).toHaveBeenCalledWith(10);
  });

  it("arithmetic mean", () => {
    jest.spyOn(window, "prompt").mockReturnValue("35");
    console.log = jest.fn();
    sumnum();
    expect(console.log).toHaveBeenCalledWith(18);
  });

  it("arithmetic mean", () => {
    jest.spyOn(window, "prompt").mockReturnValue("888");
    console.log = jest.fn();
    sumnum();
    expect(console.log).toHaveBeenCalledWith(444);
  });
});
