import { dayOfWeek, numberOfMinutes, youngUser } from "./task8";

describe("dayOfWeek", () => {
  it("day of the week", () => {
    jest.spyOn(window, "prompt").mockReturnValue("01.01.2021");
    expect(dayOfWeek()).toBe(5);
  });
});
describe("numberOfMinutes", () => {
  it("numberOfMinutes", () => {
    const mockDate = new Date(1629833511819);
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    expect(numberOfMinutes()).toBe("1352");
  });
});
describe("youngUser", () => {
  it("young user", () => {
    expect(youngUser("01.06.1990", "10.05.1999")).toBe("10.05.1999");
  });
});
