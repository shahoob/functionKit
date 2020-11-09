import { range } from '../range';

test('make a range starting from 1 to 10', () => {
    expect(range(1, 10)).toStrictEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]);
});

test('make a range starting from 5 to 50, step every 5', () => {
    expect(range(5, 50, 5)).toStrictEqual([
        5,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50
    ]);
});
