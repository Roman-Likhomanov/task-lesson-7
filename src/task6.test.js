import {diff} from './task6';
describe("diff", () => {
  it("diff max min", () => {
    expect(diff(23, 5)).toBe(18);
  });
});

import {isWord} from './task6';
describe("isWord", () => {
  it("number of words", () => {
    jest.spyOn(window, "prompt").mockReturnValue("hello John");
    expect(isWord()).toBe(false);
  });
});

import {pow} from './task6';
describe("pow", () => {
  it("a to the power of x", () => {
    expect(pow(2, 10)).toBe(1024);
  });
});