import { random } from '../random';

export function randomize<T>(array: T[]) {
    if (array.length === 1) {
        return array;
    }

    const usedIndexes: number[] = [];
    const lastIndex = array.length - 1;

    const randomizedArray = [];

    while (randomizedArray.length !== array.length) {
        let randomIndex = random(0, lastIndex);

        if (usedIndexes.includes(randomIndex)) {
            randomIndex = random(0, lastIndex);
        } else {
            randomizedArray.push(array[randomIndex]);
            usedIndexes.push(randomIndex);
        }
    }

    return randomizedArray;
}
