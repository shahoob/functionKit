import { add, remove } from '../../lib/arrayFunctions.js';

const array1: any[] = [
  1,
  2,
  3
]

test('Add items to array', () => {
  add(array1, 3, 4);
  expect(array1).toStrictEqual([
    1,
    2,
    3,
    4
  ]);
  add(array1, 2, 4);
  add(array1, 3, 3);
  expect(array1).toStrictEqual([
    1,
    2,
    4,
    3
  ]);
});

test('Remove items from array', () => {
  remove(array1, 2);
  expect(array1).toEqual([
    1,
    2,
    undefined,
    3
  ]);
  remove(array1, 1);
  remove(array1, 0);
  expect(array1).toEqual([
    undefined,
    undefined,
    undefined,
    3
  ]);
});
