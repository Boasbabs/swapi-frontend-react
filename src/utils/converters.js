/**
 * This is to make sure all the heights are in numbers and not strings
 * @param {number} x
 */

export function convertToNumber(x) {
  if (isNaN(x)) {
    return 0;
  }
  return Number(x);
}

/**
 * Convert cm to inches
 * @param {number} x
 */
export function convertCmToInches(x) {
  if (isNaN(x) || x === "") {
    return "Not a Number!";
  }
  return Number(Number.parseFloat(x / 2.54).toFixed(2));
}

/**
 * Convert cm to feet
 * @param {number} x
 */
export function convertCmToFeet(x) {
  if (isNaN(x) || x === "") {
    return "Not a Number!";
  }
  return Math.floor(x / 30.48);
}
