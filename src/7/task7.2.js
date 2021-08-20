export function hideButton(el) {
  const form = document.createElement('form');
  el.appendChild(form);

  const button = document.createElement('button');
  form.appendChild(button);
  button.hidden = true;
}
// hideButton();

export function showButton(el) {
  const form = document.createElement('form');
  el.appendChild(form);

  const button = document.createElement('button');
  form.appendChild(button);

  const input = document.createElement('input');
  form.appendChild(input);

  input.addEventListener('keydown', () => {
    button.hidden = false;
  });
}
