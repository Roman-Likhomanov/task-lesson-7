import {sumarr} from './task5';
describe("sumarr", () => {
  it("summ arr", () => {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    console.log = jest.fn();
    sumarr(arr);
    expect(console.log).toHaveBeenCalledWith(55);
  });
});

import {arrx2} from './task5';
describe("arrx2", () => {
  it("array multiplied by 2", () => {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    expect(arrx2(arr)).toStrictEqual([2,4,6,8,10,12,14,16,18,20]);
  });
});

import {maxmin} from './task5';
describe("maxmin", () => {
  it("max min array", () => {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    console.log = jest.fn();
    maxmin(arr);
    expect(console.log).toHaveBeenCalledWith(10, 1);
  });
});