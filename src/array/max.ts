/**
 * Get the largest number in an array
 * 
 * @param array A number array
 */
export function max(array: number[]) {
    return array.reduce((max, current) => {
        if (max < current) {
            return current;
        } else {
            return max;
        }
    });
}
