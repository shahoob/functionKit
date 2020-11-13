import { max } from '../../array/max';

import { range } from '../../range';
import { randomize } from '../../array/randomize';

test('Get the largest number in a range array', () => {
    expect(max(range(1, 100))).toBe(100);
});

test('Get the largest number in a reversed array', () => {
    expect(max(range(1, 100).reverse())).toBe(100);
});

test('Get the largest number in a randomized array', () => {
    expect(max(
        randomize(range(1, 100))
    )).toBe(100);
});
