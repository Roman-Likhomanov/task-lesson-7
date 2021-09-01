import { pageLayout } from "./task7.1";

describe("pageLayout", () => {
  it("renders initial markup", () => {
    const el = document.createElement("div");
    pageLayout(el);

    const form = el.querySelector("form");
    expect(form).toBeTruthy();
    expect(form.querySelector("input")).toBeTruthy();
    expect(form.querySelector("button")).toBeTruthy();
    expect(el.querySelector("ul.history")).toBeTruthy();
  });

  it("renders history elements", () => {
    const el = document.createElement("div");
    pageLayout(el);

    const values = [["I love JavaScript!"], ["I love IT!"], ["I love world!"]];
    expect(
      [...el.querySelectorAll("ul.history li")].map((elem) => elem.innerHTML)
    ).toEqual(values.map(([value]) => value));
  });

  it("button is hidden", () => {
    const el = document.createElement("div");
    pageLayout(el);

    const form = el.querySelector("form");
    const button = form.querySelector("button");
    expect(button.hidden).toBe(true);
  });

  it("show the button when entering", () => {
    const el = document.createElement("div");
    pageLayout(el);

    const button = el.querySelector("button");
    const input = el.querySelector("input");
    input.dispatchEvent(new Event("keydown"));
    expect(button.hidden).toBe(false);
  });

  it("text from the input to the list", () => {
    const el = document.createElement("div");
    pageLayout(el);

    el.querySelector("input").value = "some text";
    const form = el.querySelector("form");
    form.dispatchEvent(new Event("submit"));
    expect(el.querySelector("ul.history > li:last-child").innerHTML).toBe(
      "some text"
    );
  });
});
