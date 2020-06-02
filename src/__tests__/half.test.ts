import { half } from '../half';

describe('half() function', () => {
    it('should get the half of 1', () => {
        expect(half(1)).toStrictEqual(0.5);
    });

    it('should get the half of 100', () => {
        expect(half(100)).toStrictEqual(50);
    });
});