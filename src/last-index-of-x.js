import numberIsNaN from 'is-nan-x';

import findLastIndex from 'find-last-index-x';
import isString from 'is-string';
import toObject from 'to-object-x';
import toLength from 'to-length-x';
import sameValueZero from 'same-value-zero-x';
import sameValue from 'same-value-x';
import calcFromIndexRight from 'calculate-from-index-right-x';
import splitIfBoxedBug from 'split-if-boxed-bug-x';

let pLastIndexOf = typeof Array.prototype.lastIndexOf === 'function' && Array.prototype.lastIndexOf;

let isWorking;

if (pLastIndexOf) {
  const attempt = require('attempt-x');
  let res = attempt.call([0, 1], pLastIndexOf, 0, -3);
  isWorking = res.threw === false && res.value === -1;

  if (isWorking) {
    res = attempt.call([0, 1, 0], pLastIndexOf, 0);
    isWorking = res.threw === false && res.value === 2;
  }

  if (isWorking) {
    res = attempt.call([0, -0], pLastIndexOf, 0);
    isWorking = res.threw === false && res.value === 1;
  }

  if (isWorking) {
    const testArr = [];
    testArr.length = 2;
    testArr[0] = void 0;
    res = attempt.call(testArr, pLastIndexOf, void 0);
    isWorking = res.threw === false && res.value === 0;
  }

  if (isWorking) {
    res = attempt.call('abc', pLastIndexOf, 'c');
    isWorking = res.threw === false && res.value === 2;
  }

  if (isWorking) {
    res = attempt.call(
      (function() {
        return arguments;
      })('a', 'b', 'c'),
      pLastIndexOf,
      'c',
    );
    isWorking = res.threw === false && res.value === 2;
  }
}

if (isWorking !== true) {
  pLastIndexOf = function lastIndexOf(searchElement) {
    // eslint-disable-next-line babel/no-invalid-this
    const length = toLength(this.length);

    if (length < 1) {
      return -1;
    }

    let i = arguments[1];
    while (i >= 0) {
      // eslint-disable-next-line babel/no-invalid-this
      if (i in this && searchElement === this[i]) {
        return i;
      }

      i -= 1;
    }

    return -1;
  };
}

/**
 * This method returns the last index at which a given element
 * can be found in the array, or -1 if it is not present.
 * The array is searched backwards, starting at fromIndex.
 *
 * @private
 * @param {Array} array - The array to search.
 * @param {*} searchElement - Element to locate in the array.
 * @param {number} fromIndex - The index at which to start searching backwards.
 * @param {Function} extendFn - The comparison function to use.
 * @returns {number} Returns index of found element, otherwise -1.
 */
// eslint-disable-next-line max-params
const findLastIdxFrom = function findLastIndexFrom(array, searchElement, fromIndex, extendFn) {
  let fIdx = fromIndex;
  while (fIdx >= 0) {
    if (fIdx in array && extendFn(array[fIdx], searchElement)) {
      return fIdx;
    }

    fIdx -= 1;
  }

  return -1;
};

/**
 * This method returns the last index at which a given element
 * can be found in the array, or -1 if it is not present.
 * The array is searched backwards, starting at fromIndex.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If `array` is `null` or `undefined`.
 * @param {*} searchElement - Element to locate in the `array`.
 * @param {number} [fromIndex] - The index at which to start searching
 *  backwards. Defaults to the array's length minus one, i.e. the whole array
 *  will be searched. If the index is greater than or equal to the length of
 *  the array, the whole array will be searched. If negative, it is taken as
 *  the offset from the end of the array. Note that even when the index is
 *  negative, the array is still searched from back to front. If the
 *  calculated index is less than 0, -1 is returned, i.e. the array will not
 *  be searched.
 * @param {string} [extend] - Extension type: `SameValue` or `SameValueZero`.
 * @returns {number} Returns index of found element, otherwise -1.
 */
export default function lastIndexOf(array, searchElement) {
  const object = toObject(array);
  const iterable = splitIfBoxedBug(object);
  const length = toLength(iterable.length);

  if (length < 1) {
    return -1;
  }

  const argLength = arguments.length;
  let extend = argLength > 2 && argLength > 3 ? arguments[3] : arguments[2];
  let extendFn;

  if (isString(extend)) {
    extend = extend.toLowerCase();

    if (extend === 'samevalue') {
      extendFn = sameValue;
    } else if (extend === 'samevaluezero') {
      extendFn = sameValueZero;
    }
  }

  let fromIndex = length - 1;

  if (extendFn && (searchElement === 0 || numberIsNaN(searchElement))) {
    if (argLength > 3) {
      fromIndex = calcFromIndexRight(iterable, arguments[2]);

      if (fromIndex < 0) {
        return -1;
      }

      if (fromIndex >= length) {
        fromIndex = length - 1;
      }
    }

    if (fromIndex < length - 1) {
      return findLastIdxFrom(iterable, searchElement, fromIndex, extendFn);
    }

    return findLastIndex(iterable, function(element, index) {
      return index in iterable && extendFn(searchElement, element);
    });
  }

  if (argLength > 3 || (argLength > 2 && Boolean(extendFn) === false)) {
    fromIndex = calcFromIndexRight(iterable, arguments[2]);

    if (fromIndex < 0) {
      return -1;
    }

    if (fromIndex >= length) {
      fromIndex = length - 1;
    }
  }

  return pLastIndexOf.call(iterable, searchElement, fromIndex);
}