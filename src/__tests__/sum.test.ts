import { sum } from '../sum';

test('sum 2 numbers', () => {
  expect(sum([1, 1])).toBe(2);
});

test('make an error', () => {
  expect(sum([1])).not.toBe(2);
  expect(sum([1])).toStrictEqual(new Error('Not enough numbers'));
});
