/**
 * Calculates a percent
 * 
 * @since 2.0.0
 * 
 * @param current The currect progress
 * @param max The completed progress (or the goal)
 * @param mustBeString If should return a string
 */
export function calcPercent(current: number, max: number, mustBeString?: boolean): number | string {
    if (mustBeString) return `${current * 100 / max}%`; else return current * 100 / max;
}