import { textInput } from "./task7.3";

describe("textInput", () => {
  it("text from the input to the list", () => {
    const el = document.createElement("div");
    textInput(el);

    el.querySelector("input").value = "some text";
    el.querySelector("form").submit();
    expect(el.querySelector("ul.history li").innerHTML).toBe("some text");
  });
});
