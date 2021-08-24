import { hideButton, showButton } from "./task7.2";

describe("hideButton", () => {
  it("hideButton to be true", () => {
    const el = document.createElement("div");
    hideButton(el);

    const form = el.querySelector("form");
    expect(form).toBeTruthy();

    const button = form.querySelector("button");
    expect(button.hidden).toBe(true);
  });
});
describe("showButton", () => {
  it("show the button when entering", () => {
    const el = document.createElement("div");
    showButton(el);

    const button = el.querySelector("button");
    const input = el.querySelector("input");
    input.dispatchEvent(new Event("keydown"));
    expect(button.hidden).toBe(false);
  });
});
