export function pageLayout(el) {
  const form = document.createElement("form");
  el.appendChild(form);

  const input = document.createElement("input");
  form.appendChild(input);

  const button = document.createElement("button");
  form.appendChild(button);

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
}
