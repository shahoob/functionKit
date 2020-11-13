/**
 * If you know python, You know what it is for.
 * <br>
 * Creates a range of numbers
 * 
 * # Example
 * ```javascript
 * const onetoten = range(1, 10);
 * ```
 * 
 * @param from The starting number (a.k.a 'start')
 * @param to The ending number (a.k.a 'stop')
 * @param step How many steps to take (a.k.a 'step')
 */
export function range(from: number, to: number, step = 1) {
    const result: number[] = [];
    for (let i = from; i < (to + 1); i = i + step) {
        result.push(i);
    }
    return result;
}

range(1, 10);