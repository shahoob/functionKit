export function range(from: number, to: number, step = 1) {
    const result: number[] = [];
    for (let i = from; i < (to + 1); i = i + step) {
        result.push(i);
    }
    return result;
}

range(1, 10);