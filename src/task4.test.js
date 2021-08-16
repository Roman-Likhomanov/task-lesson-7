import {addage} from './task4';
describe("addage", () => {
  it("age user", () => {
    let user = {
        name: 'John'
        };
    jest.spyOn(window, "prompt").mockReturnValue("20");
    addage(user);
    expect(user.age).toBe(20);
  });
});

import {clone} from './task4';
describe("clone", () => {
  it("clone user", () => {
    let user = {
        name: 'John'
        };
    clone(user);
    expect(clone(user)).toStrictEqual({name: 'John',
    role: 'admin'});
  });
});

import {destructurization} from './task4';
describe("destructurization", () => {
  it("destructurization user", () => {
    let user = {
        name: 'John'
        };
    console.log = jest.fn();
    destructurization(user);
    expect(console.log).toHaveBeenCalledWith("John", "admin");
  });
});