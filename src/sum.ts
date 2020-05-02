export function sum(numbers: number[]) {
  if (numbers.length <= 1) {
    return new Error('Not enough numbers');
  }
  let result: number = 0; // tslint:disable-line
  for (const number of numbers) { // tslint:disable-line
    result += number;
  }
  return result;
}
