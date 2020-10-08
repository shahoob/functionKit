import { clean } from '../../array/clean';

test('Clean the array', () => {
    expect(clean([
        1, false, 2, 3, '', null , 5
    ])).toStrictEqual([
        1, 2, 3, 5
    ]);
});