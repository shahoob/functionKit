export function sum(numbers: number[]) {
  if (numbers.length <= 1) {
    return new Error('Not enough numbers');
  }
  let result = numbers.reduce((current, num) => {
    return current += num;
  });
  return result;
}
