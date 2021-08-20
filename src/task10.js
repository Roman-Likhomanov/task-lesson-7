export function validDate() {
  const input = prompt("enter date");
  const regexp = /[0-3][1-9]\.[0-1][0-9]\.\d{2,4}/;

  if (regexp.test(input)) {
    return "valid date";
  }
  return "invalid date";
}

export function validMail() {
  const input = prompt("enter mail");
  const regexp = /[\da-z\.]+@[\da-z]+\.[a-z]+/;

  if (regexp.test(input)) {
    return "valid mail";
  }
  return "invalid mail";
}

export function validNumber() {
  const input = prompt("enter number");
  const regexp =
    /\+\d[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0,1}\d{2}/;

  if (regexp.test(input)) {
    return "valid number";
  }
  return "invalid number";
}
