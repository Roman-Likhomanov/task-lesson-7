import {pageLayout} from './task7.1';
describe("pageLayout", () => {

  

    it("renders initial markup", () => {
      const el = document.createElement('div');
      pageLayout(el);

      const form = el.querySelector("form");
      expect(form).toBeTruthy();
      expect(form.querySelector("input")).toBeTruthy();
      expect(form.querySelector("button")).toBeTruthy();
      expect(el.querySelector("ul.history")).toBeTruthy();
            
    });

    it("renders history elements", () => {
      const el = document.createElement('div');
      pageLayout(el);
      
      const values = [
        ["I love JavaScript!"],
        ["I love IT!"],
        ["I love world!"]
      ];
      expect([...el.querySelectorAll("ul.history li")].map((el) => el.innerHTML)
      ).toEqual(values.map(([value]) => value)
      );
    });

     
});
