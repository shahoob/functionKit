import { min } from '../../array/min';

import { range } from '../../range';
import { randomize } from '../../array/randomize';

test('Get the smallest number in a range array', () => {
    expect(min(range(1, 100))).toBe(100);
});

test('Get the smallest number in a reversed array', () => {
    expect(min(range(1, 100).reverse())).toBe(100);
});

test('Get the smallest number in a randomized array', () => {
    expect(min(
        randomize(range(1, 100))
    )).toBe(100);
});
