export function rightTriangle(a, b, c) {
// const a = 6;
// const b = 8;
// const c = 10;

  const a2 = Math.pow(a, 2);
  const b2 = Math.pow(b, 2);
  const c2 = Math.pow(c, 2);

  if (a2 + b2 == c2) {
    return 'Right';
  }
  return 'Wrong';
}

export function lengthArea() {
  const r = prompt('enter r');

  const l = 2 * Math.PI * r;
  console.log(Math.floor(l));

  const s = Math.PI * Math.pow(r, 2);
  console.log(Math.floor(s));
}

export function solutionEquation() {
  // ax2 + bx + c = 0;
  const a = +prompt('enter a');
  const b = +prompt('enter b');
  const c = +prompt('enter c');

  const d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / 2 * a;
    const x2 = (-b - Math.sqrt(d)) / 2 * a;
    return `${x1}, ${x2}`;
  } if (d == 0) {
    const x3 = -b / 2 * a;
    return x3;
  }
  return 'no roots';
}
