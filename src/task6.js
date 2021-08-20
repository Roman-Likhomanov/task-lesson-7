export function diff(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}

export function isWord() {
  const word = prompt("enter text");
  const arr = word.split(" ");
  if (arr.length > 1) {
    return false;
  }
  return true;
}

export function pow(a, x) {
  let res = 1;
  for (let i = 1; i <= x; i++) {
    res *= a;
  }
  return res;
}
