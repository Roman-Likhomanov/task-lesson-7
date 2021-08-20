export function sum() {
  let sum = 0;
  for (let i = 50; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}

export function tabl() {
  let result;
  for (let i = 1; i <= 9; i++) {
    result = 7 * i;
    console.log(`7 x ${i} = ${result}`);
  }
}

export function sumnum() {
  const N = window.prompt("enter num");
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
      count += 1;
      sum += i;
    }
  }
  console.log(sum / count);
}
