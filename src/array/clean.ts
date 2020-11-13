/**
 * Cleans your array from falsy values
 * 
 * @since 3.1.0
 * 
 * @param array Any array you want
 */
export function clean(array: any[]) {
    const result: any[] = [];
    array.forEach(v => {
        if (v) {
            result.push(v);
        }
    });

    return result;
}