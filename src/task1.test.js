import {sum} from './task1';
describe("sum", () => {
  it("sum number", () => {
    console.log = jest.fn();
    sum(1,2);
    expect(console.log).toHaveBeenCalledWith(3);
    expect(console.log).toHaveBeenCalledWith(2);
  });
});

import {sumstr} from './task1';
describe("sumstr", () => {
  it("sum string", () => {
    console.log = jest.fn();
    sumstr("John", "Smit");
    expect(console.log).toHaveBeenCalledWith(8);
  });
});

import {sumnum} from './task1';
describe("sumnum", () => {
  it("sum prompt", () => {
    jest.spyOn(window, "prompt").mockReturnValue("123");
    console.log = jest.fn();
    sumnum();
    expect(console.log).toHaveBeenCalledWith(6);
  });
});