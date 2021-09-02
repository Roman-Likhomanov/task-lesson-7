export function pageLayout(el) {
  const form = document.createElement("form");
  el.appendChild(form);

  const button = document.createElement("button");
  form.appendChild(button);
  button.hidden = true;

  const input = document.createElement("input");
  form.appendChild(input);

  input.addEventListener("input", () => {
    if (input.value.length === 0) {
      button.hidden = true;
    } else {
      button.hidden = false;
    }
  });

  const ulHistory = document.createElement("ul");
  form.appendChild(ulHistory);
  ulHistory.classList.add("history");

  const li = document.createElement("li");
  ulHistory.appendChild(li);
  li.innerHTML = "I love JavaScript!";

  const li2 = document.createElement("li");
  ulHistory.appendChild(li2);
  li2.innerHTML = "I love IT!";

  const li3 = document.createElement("li");
  ulHistory.appendChild(li3);
  li3.innerHTML = "I love world!";

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const li4 = document.createElement("li");
    ulHistory.appendChild(li4);
    li4.innerHTML = input.value;
    input.value = "";
    button.hidden = true;
    const arr = document.querySelectorAll("li");
    if (arr.length > 5) {
      document.querySelector("li").remove();
    }
  });
}
