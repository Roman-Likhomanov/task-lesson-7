import { max, month, square } from './task2';

describe('max', () => {
  it('max number', () => {
    console.log = jest.fn();
    max(1, 2);
    expect(console.log).toHaveBeenCalledWith(2);
  });
});
describe('month', () => {
  it('enter the number and get a month', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('12');
    console.log = jest.fn();
    month();
    expect(console.log).toHaveBeenCalledWith('dec');
  });
});
describe('square', () => {
  it('a circle in a square', () => {
    console.log = jest.fn();
    square(100, 130);
    expect(console.log).toHaveBeenCalledWith('yes');
  });
});
