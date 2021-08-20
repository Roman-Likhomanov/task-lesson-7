export function textInput(el) {
  const form = document.createElement('form');
  el.appendChild(form);

  const input = document.createElement('input');
  form.appendChild(input);

  const ulHistory = document.createElement('ul');
  form.appendChild(ulHistory);
  ulHistory.classList.add('history');

  form.addEventListener('submit', () => {
    const li4 = document.createElement('li');
    ulHistory.appendChild(li4);
    li4.innerHTML = input.value;
    input.value = '';
  });
}
