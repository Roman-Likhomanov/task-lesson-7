import { dayOfWeek, numberOfMinutes, youngUser } from "./task8";

describe("dayOfWeek", () => {
  it("day of the week", () => {
    jest.spyOn(window, "prompt").mockReturnValue("01.01.2021");
    expect(dayOfWeek()).toBe(5);
  });
});
describe("numberOfMinutes", () => {
  it("numberOfMinutes", () => {
    const mockDate = new Date(
      "Mon Aug 16 2021 20:40:15 GMT+0300 (Москва, стандартное время)"
    );
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    expect(numberOfMinutes()).toBe("1240");
  });
});
describe("youngUser", () => {
  it("young user", () => {
    expect(youngUser("01.06.1990", "10.05.1999")).toBe("10.05.1999");
  });
});
