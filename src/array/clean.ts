export function clean(array: any[]) {
    const result: any[] = [];
    array.forEach(v => {
        if (v) {
            result.push(v);
        }
    });

    return result;
}