import { dayOfWeek, numberOfMinutes, youngUser } from "./task8";

describe("dayOfWeek", () => {
  it("day of the week", () => {
    jest.spyOn(window, "prompt").mockReturnValue("01.01.2021");
    expect(dayOfWeek()).toBe(5);
  });
});
describe("numberOfMinutes", () => {
  it("numberOfMinutes", () => {
    jest
      .useFakeTimers("modern")
      .setSystemTime(new Date(2021, 8, 24, 22, 32, 0).getTime());
    expect(numberOfMinutes()).toBe("1352");
  });
});
describe("youngUser", () => {
  it("young user", () => {
    expect(youngUser("01.06.1990", "10.05.1999")).toBe("10.05.1999");
  });
});
