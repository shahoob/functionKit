export function sum(numbers: number[]): number {
  if (numbers.length <= 1) {
    throw new Error('Not enough numbers');
  }
  let result = numbers.reduce((current, num) => {
    return current += num;
  });
  return result;
}
