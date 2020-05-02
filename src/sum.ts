export function sum(numbers: number[]) {
  if (numbers.length <= 1) {
    return new Error('Not enough numbers');
  }
  let result: number = 0;
  numbers.forEach(number => {
    result += number;
  });
  return result;
}
