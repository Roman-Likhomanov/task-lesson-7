import {validDate} from './task10';
describe("validDate", () => {
  it("if the date is valid", () => {
    jest.spyOn(window, "prompt").mockReturnValue('01.01.2021');
    expect(validDate()).toBe('valid date');
  });

  it("if the date is invalid", () => {
    jest.spyOn(window, "prompt").mockReturnValue('a1.01.2021');
    expect(validDate()).toBe('invalid date');
  });

});

import {validMail} from './task10';
describe("validMail", () => {
  it("if the mail is valid", () => {
    jest.spyOn(window, "prompt").mockReturnValue('roman@mail.ru');
    expect(validMail()).toBe('valid mail');
  });

  it("if the mail is invalid", () => {
    jest.spyOn(window, "prompt").mockReturnValue('a1.01.2021');
    expect(validMail()).toBe('invalid mail');
  });

});

import {validNumber} from './task10';
describe("validNumber", () => {
  it("if the number is valid", () => {
    jest.spyOn(window, "prompt").mockReturnValue('+7 999 999-99-99');
    expect(validNumber()).toBe('valid number');
  });

  it("if the number is invalid", () => {
    jest.spyOn(window, "prompt").mockReturnValue('a1.01.2021');
    expect(validNumber()).toBe('invalid number');
  });

});