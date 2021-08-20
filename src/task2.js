export function max(a, b) {
  b > a ? console.log(b) : console.log(a);
}

export function month() {
  const month = window.prompt("Enter number");
  switch (+month) {
    case 1:
      console.log("jan");
      break;
    case 2:
      console.log("feb");
      break;
    case 3:
      console.log("march");
      break;
    case 4:
      console.log("april");
      break;
    case 5:
      console.log("may");
      break;
    case 6:
      console.log("jun");
      break;
    case 7:
      console.log("jul");
      break;
    case 8:
      console.log("aug");
      break;
    case 9:
      console.log("sept");
      break;
    case 10:
      console.log("okt");
      break;
    case 11:
      console.log("nov");
      break;
    case 12:
      console.log("dec");
      break;
  }
}

export function square(circle, square) {
  const r2 = circle / 3.14;
  const a = Math.sqrt(square);
  const r = Math.sqrt(r2);
  a >= 2 * r ? console.log("yes") : console.log("no");
}
