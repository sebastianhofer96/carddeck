/**
 * Gets a random integer in a range.
 * @param {Number} min Minimum integer (inclusive).
 * @param {Number} max Maximum integer (exclusive).
 * @returns The random integer.
 */
 export function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/**
 * Shuffles an array with in place permutation.
 * @param {Array} array The array to be shuffled.
 */
export function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
        let randomPosition = getRandomInteger(i, array.length);
        [array[i], array[randomPosition]] = [array[randomPosition], array[i]];
    }
}