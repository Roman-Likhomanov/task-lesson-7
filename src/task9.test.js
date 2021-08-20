import { rightTriangle, lengthArea, solutionEquation } from "./task9";

describe("rightTriangle", () => {
  it("is the triangle right-angled?", () => {
    expect(rightTriangle(6, 8, 10)).toBe("Right");
  });
});
describe("lengthArea", () => {
  it("determine the length and area", () => {
    jest.spyOn(window, "prompt").mockReturnValue("10");
    console.log = jest.fn();
    lengthArea();
    expect(console.log).toHaveBeenCalledWith(62);
    expect(console.log).toHaveBeenCalledWith(314);
  });
});
describe("solutionEquation", () => {
  it("equation with 2 roots", () => {
    jest
      .spyOn(window, "prompt")
      .mockImplementationOnce(() => "1")
      .mockImplementationOnce(() => "-8")
      .mockImplementationOnce(() => "12");

    expect(solutionEquation()).toBe("6, 2");
  });

  it("equation with 1 roots", () => {
    jest
      .spyOn(window, "prompt")
      .mockImplementationOnce(() => "1")
      .mockImplementationOnce(() => "-6")
      .mockImplementationOnce(() => "9");

    expect(solutionEquation()).toBe(3);
  });

  it("equation with 0 roots", () => {
    jest
      .spyOn(window, "prompt")
      .mockImplementationOnce(() => "5")
      .mockImplementationOnce(() => "-1")
      .mockImplementationOnce(() => "2");

    expect(solutionEquation()).toBe("no roots");
  });
});
