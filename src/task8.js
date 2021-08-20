export function dayOfWeek() {
  const input = window.prompt('enter DD.MM.YYYY');

  const [day, month, year] = input.split('.');
  const inputDate = new Date(`${year}-${month}-${day}`);

  const dayWeek = inputDate.getDay();
  return dayWeek;
}

export function numberOfMinutes() {
  const now = new Date();

  const hours = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const minPass = hours * 60 + min + sec / 60;
  return minPass.toFixed(0);
}

export function youngUser(input1, input2) {
  // const input1 = '01.06.1990';
  const [day1, month1, year1] = input1.split('.');
  const date1 = new Date(`${year1}-${month1}-${day1}`);

  // const input2 = '10.05.1999';
  const [day2, month2, year2] = input2.split('.');
  const date2 = new Date(`${year2}-${month2}-${day2}`);

  if (date1 > date2) {
    return input1;
  }
  return input2;
}
