import { calcPercent } from '../calcPercent';

test('Calculate 2 numbers into percent', () => {
    expect(calcPercent(0.5, 1)).toStrictEqual(50);
});

test('Calculate 2 numbers into percent string', () => {
    expect(calcPercent(0.5, 1, true)).toStrictEqual('50%');
});