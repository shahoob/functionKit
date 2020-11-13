/**
 * Just like the max function, reversed.
 * <br>
 * Get the smallest number in an array
 * 
 * @param array A number array
 */
export function min(array: number[]) {
    return array.reduce((min, current) => {
        if (current < min) {
            return current;
        } else {
            return min;
        }
    });
}