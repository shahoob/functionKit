export function calcPercent(current: number, max: number, mustBeString?: boolean) {
    if (mustBeString) return `${current * 100 / max}%`; else return current * 100 / max;
}