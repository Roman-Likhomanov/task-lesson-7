import { pageLayout } from "./task7.1";

describe("pageLayout", () => {
  describe("functional tests", () => {
    let el;
    beforeEach(() => {
      el = document.createElement("div");
      pageLayout(el);
    });

    it("renders initial markup", () => {
      const form = el.querySelector("form");
      expect(form).toBeTruthy();
      expect(form.querySelector("input")).toBeTruthy();
      expect(form.querySelector("button")).toBeTruthy();
      expect(el.querySelector("ul.history")).toBeTruthy();
    });

    it("renders history elements", () => {
      const values = [
        ["I love JavaScript!"],
        ["I love IT!"],
        ["I love world!"],
      ];
      expect(
        [...el.querySelectorAll("ul.history li")].map((elem) => elem.innerHTML)
      ).toEqual(values.map(([value]) => value));
    });

    it("button is hidden", () => {
      const form = el.querySelector("form");
      const button = form.querySelector("button");
      expect(button.hidden).toBe(true);
    });

    it("show the button when entering text and hide it when not", () => {
      const button = el.querySelector("button");
      const input = el.querySelector("input");
      input.dispatchEvent(new Event("input"));
      if (input.value.length === 0) {
        expect(button.hidden).toBe(true);
      } else {
        expect(button.hidden).toBe(false);
      }
    });

    it("text from the input to the list", () => {
      el.querySelector("input").value = "some text";
      const form = el.querySelector("form");
      form.dispatchEvent(new Event("submit"));
      expect(el.querySelector("ul.history > li:last-child").innerHTML).toBe(
        "some text"
      );
    });

    it("if more than 5 li, then delete", () => {
      const arr = el.querySelectorAll("li");
      if (arr.length > 5) {
        expect(el.querySelector("li").toBe(false));
      }
    });
  });
});
