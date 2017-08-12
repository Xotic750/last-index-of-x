/**
 * @file An extended ES6 lastIndexOf.
 * @version 1.8.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module last-index-of-x
 */

'use strict';

var $isNaN = require('is-nan');
var findLastIndex = require('find-last-index-x');
var isString = require('is-string');
var toInteger = require('to-integer-x');
var toObject = require('to-object-x');
var toLength = require('to-length-x');
var sameValueZero = require('same-value-zero-x');
var safeToString = require('safe-to-string-x');
var sameValue = require('object-is');
var splitString = require('has-boxed-string-x') === false;
var pLastIndexOf = Array.prototype.lastIndexOf;

if (typeof pLastIndexOf !== 'function' || [0, 1].lastIndexOf(0, -3) !== -1) {
  pLastIndexOf = function lastIndexOf(searchElement) {
    // eslint-disable-next-line no-invalid-this
    var length = toLength(this.length);

    if (length === 0) {
      return -1;
    }

    var i = length - 1;
    if (arguments.length > 1) {
      i = Math.min(i, toInteger(arguments[1]));
    }

    // handle negative indices
    i = i >= 0 ? i : length - Math.abs(i);
    while (i >= 0) {
      // eslint-disable-next-line no-invalid-this
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
 * @param {Array} object - The array to search.
 * @param {*} searchElement - Element to locate in the array.
 * @param {number} fromIndex - The index at which to start searching backwards.
 * @param {Function} extendFn - The comparison function to use.
 * @returns {number} Returns index of found element, otherwise -1.
 */
// eslint-disable-next-line max-params
var findLastIdxFrom = function findLastIndexFrom(object, searchElement, fromIndex, extendFn) {
  var fIdx = fromIndex;
  while (fIdx >= 0) {
    if (fIdx in object && extendFn(object[fIdx], searchElement)) {
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
 * @example
 * var lastIndexOf = require('last-index-of-x');
 * var subject = [NaN, 2, 3, undefined, true, 'hej', null, 2, false, 0, -0];
 *
 * // Standard mode, operates just like `Array.prototype.lastIndexOf`.
 * lastIndexOf(subject, null); // 6
 * lastIndexOf(testSubject, '2'); // -1
 * lastIndexOf(testSubject, NaN); // -1
 * lastIndexOf(testSubject, 0); // 10
 * lastIndexOf(testSubject, 2, -6); // 1
 *
 * // `SameValueZero` mode extends `lastIndexOf` to match `NaN`.
 * lastIndexOf(subject, null, 'SameValueZero'); // 6
 * lastIndexOf(testSubject, '2', 'SameValueZero'); // -1
 * lastIndexOf(testSubject, NaN, 'SameValueZero'); // 0
 * lastIndexOf(testSubject, 0, 'SameValueZero'); // 10
 * lastIndexOf(testSubject, 2, -6, 'SameValueZero'); // 1
 *
 * // `SameValue` mode extends `lastIndexOf` to match `NaN` and signed `0`.
 * lastIndexOf(subject, null, 'SameValue'); // 6
 * lastIndexOf(testSubject, '2', 'SameValue'); // -1
 * lastIndexOf(testSubject, NaN, 'SameValue'); // 0
 * lastIndexOf(testSubject, 0, 'SameValue'); // 9
 * lastIndexOf(testSubject, 2, -6, 'SameValue'); // 1
 */
module.exports = function lastIndexOf(array, searchElement) {
  var object = toObject(array);
  var iterable = splitString && isString(object) ? object.split('') : object;
  var length = toLength(iterable.length);
  if (length < 1) {
    return -1;
  }

  var args = [searchElement];
  var extend;
  if (arguments.length > 2) {
    if (arguments.length > 3) {
      args[1] = arguments[2];
      extend = arguments[3];
    } else if (isString(arguments[2])) {
      extend = safeToString(arguments[2]);
    }
  }

  var extendFn;
  if (isString(extend)) {
    extend = extend.toLowerCase();
    if (extend === 'samevalue') {
      extendFn = sameValue;
    } else if (extend === 'samevaluezero') {
      extendFn = sameValueZero;
    }
  }

  if (extendFn && (searchElement === 0 || $isNaN(searchElement))) {
    var fromIndex;
    if (arguments.length > 3) {
      fromIndex = toInteger(arguments[2]);
    } else {
      fromIndex = length - 1;
    }

    if (fromIndex >= 0) {
      fromIndex = Math.min(fromIndex, length - 1);
    } else {
      fromIndex = length - Math.abs(fromIndex);
    }

    if (fromIndex < length - 1) {
      return findLastIdxFrom(iterable, searchElement, fromIndex, extendFn);
    }

    return findLastIndex(iterable, function (element, index) {
      return index in iterable && extendFn(searchElement, element);
    });
  }

  if (Boolean(extendFn) === false && args.length === 1 && arguments.length > 2) {
    args[1] = arguments[2];
  }

  return pLastIndexOf.apply(iterable, args);
};
