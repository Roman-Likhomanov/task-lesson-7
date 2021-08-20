import { sumarr, arrx2, maxmin } from './task5';

describe('sumarr', () => {
  it('summ arr', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log = jest.fn();
    sumarr(arr);
    expect(console.log).toHaveBeenCalledWith(55);
  });
});
describe('arrx2', () => {
  it('array multiplied by 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(arrx2(arr)).toStrictEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
});
describe('maxmin', () => {
  it('max min array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log = jest.fn();
    maxmin(arr);
    expect(console.log).toHaveBeenCalledWith(10, 1);
  });
});
