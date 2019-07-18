/**
 * Generate's a psuedo-random number between min and max arguments
 * @param {Number} min
 * @param {Number} max
 */
export function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
