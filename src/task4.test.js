import { addage, clone, destructurization } from "./task4";

describe("addage", () => {
  it("age user", () => {
    const user = {
      name: "John",
    };
    jest.spyOn(window, "prompt").mockReturnValue("20");
    addage(user);
    expect(user.age).toBe(20);
  });
});
describe("clone", () => {
  it("clone user", () => {
    const user = {
      name: "John",
    };
    expect(clone(user)).toStrictEqual({
      name: "John",
      role: "admin",
    });
  });
});
describe("destructurization", () => {
  it("destructurization user", () => {
    const user = {
      name: "John",
    };
    console.log = jest.fn();
    destructurization(user);
    expect(console.log).toHaveBeenCalledWith("John", "admin");
  });
});
