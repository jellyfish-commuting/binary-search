//-------
// Equal search
//-------
function equalSearch(values, needle, params = {}) {
  // Retrieve last index
  const last = values.length - 1;

  // Init params
  let { from: start = 0, to: end = last } = params;

  // Compare callback
  const compare = params.compare || ((a, b) => a - b);

  // Outbounds ?
  if (start < 0 || end > last) {
    throw new RangeError('Range inferior and/or superior than array length');
  }

  // Do search ...
  while (start <= end) {
    // Get the middle
    const middle = Math.floor((start + end) / 2);

    // Compare values
    const result = compare(needle, values[middle]);

    // Find value ?
    if (!result) {
      return middle;
    }

    // Lower ?
    if (result < 0) {
      end = middle - 1;

    // ... greather
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

//-------
// Closest search
//-------
function closestSearch(values, needle, params = {}) {
  // Retrieve last index
  const last = values.length - 1;

  // Init params
  let { from: start = 0, to: end = last } = params;

  // Compare callback
  const compare = params.compare || ((a, b) => a - b);

  // Outbounds ?
  if (start < 0 || end > last) {
    throw new RangeError('Range inferior and/or superior than array length');
  }

  // Do search ...
  while (start <= end) {
    // Get the middle
    const middle = Math.floor((start + end) / 2);

    // Compare values
    const result = compare(needle, values[middle]);

    // Find value ?
    if (!result) {
      return middle;
    }

    // Lower ?
    if (result < 0) {
      // Check the previous value
      if (middle) {
        const previous = compare(needle, values[middle - 1]);

        if (Math.abs(previous) > Math.abs(result)) {
          return middle;
        }
      }

      // Next loop ...
      end = middle - 1;

    // ...  greather
    } else {
      // Check the next value
      if (middle < last) {
        const next = compare(needle, values[middle + 1]);

        if (Math.abs(next) >= Math.abs(result)) {
          return middle;
        }
      }

      // Next loop ...
      start = middle + 1;
    }
  }

  // Over ?
  if (start > 0) {
    return params.to || last;
  }

  return params.from || 0;
}

//-------
// Export module
//-------
module.exports = { equalSearch, closestSearch };
