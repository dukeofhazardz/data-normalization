const Math = require("mathjs");

/**
 * Normalize a multi-dimensional array.
 * @param {Array} data - Multi-dimensional array of numbers to be normalized.
 * @param {number} [min=0] - Minimum value of the normalized range.
 * @param {number} [max=1] - Maximum value of the normalized range.
 * @returns {Array} - The normalized multi-dimensional array.
 */
function dataNormalization(data, min = 0, max = 1) {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("Data should be a non-empty array.");
  }

  // Flatten the array to find global min and max
  const flattenArray = (arr) =>
    arr.reduce(
      (acc, val) =>
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
      []
    );

  const flatData = flattenArray(data);
  const dataMin = Math.min(...flatData);
  const dataMax = Math.max(...flatData);

  if (dataMin === dataMax) {
    // If all values in the data are the same, return an array with the min value
    const fillArray = (arr) =>
      arr.map((val) => (Array.isArray(val) ? fillArray(val) : min));
    return fillArray(data);
  }

  const normalizeValue = (value) =>
    ((value - dataMin) / (dataMax - dataMin)) * (max - min) + min;

  const normalizeArray = (arr) =>
    arr.map((val) =>
      Array.isArray(val) ? normalizeArray(val) : normalizeValue(val)
    );

  return normalizeArray(data);
}

module.exports = { dataNormalization };
