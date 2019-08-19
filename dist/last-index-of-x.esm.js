function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import numberIsNaN from 'is-nan-x';
import findLastIndex from 'find-last-index-x';
import toObject from 'to-object-x';
import toLength from 'to-length-x';
import sameValueZero from 'same-value-zero-x';
import sameValue from 'same-value-x';
import calcFromIndexRight from 'calculate-from-index-right-x';
import splitIfBoxedBug from 'split-if-boxed-bug-x';
import attempt from 'attempt-x';
import toBoolean from 'to-boolean-x';
import objectCreate from 'object-create-x';
import methodize from 'simple-methodize-x';
import toInteger from 'to-integer-x';
var nlio = [].lastIndexOf;
var nativeLastIndexOf = typeof nlio === 'function' && methodize(nlio);
var toLowerCase = methodize(''.toLowerCase);
var mathMin = Math.min,
    mathAbs = Math.abs;
var mapExtendFn = objectCreate(null, {
  samevalue: {
    enumerable: true,
    value: sameValue
  },
  samevaluezero: {
    enumerable: true,
    value: sameValueZero
  }
});

var test1 = function test1() {
  var res = attempt(nativeLastIndexOf, [0, 1], 0, -3);
  return res.threw === false && res.value === -1;
};

var test2 = function test2() {
  var res = attempt(nativeLastIndexOf, [0, 1, 0], 0);
  return res.threw === false && res.value === 2;
};

var test3 = function test3() {
  var res = attempt(nativeLastIndexOf, [0, -0], 0);
  return res.threw === false && res.value === 1;
};

var test4 = function test4() {
  var testArr = [];
  testArr.length = 2;
  testArr[0] = void 0;
  /* eslint-disable-line no-void */

  var res = attempt(nativeLastIndexOf, testArr, void 0);
  /* eslint-disable-line no-void */

  return res.threw === false && res.value === 0;
};

var test5 = function test5() {
  var res = attempt(nativeLastIndexOf, 'abc', 'c');
  return res.threw === false && res.value === 2;
};

var test6 = function test6() {
  var args = function getArgs() {
    return arguments;
    /* eslint-disable-line prefer-rest-params */
  }('a', 'b', 'c');

  var res = attempt(nativeLastIndexOf, args, 'c');
  return res.threw === false && res.value === 2;
};

var isWorking = toBoolean(nativeLastIndexOf) && test1() && test2() && test3() && test4() && test5() && test6();
export var implementation = function lastIndexOf(array, searchElement) {
  var object = toObject(array); // If no callback function or if callback is not a callable function

  var iterable = splitIfBoxedBug(object);
  var length = toLength(iterable.length);

  if (length === 0) {
    return -1;
  }

  var i = length - 1;

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params */
    i = mathMin(i, toInteger(arguments[2]));
  } // handle negative indices


  i = i >= 0 ? i : length - mathAbs(i);

  for (; i >= 0; i -= 1) {
    if (i in iterable && searchElement === iterable[i]) {
      return i;
    }
  }

  return -1;
};
var pLastIndexOf = isWorking ? nativeLastIndexOf : implementation; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

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
// eslint-enable jsdoc/check-param-names

var findLastIdxFrom = function findLastIndexFrom(args) {
  var _args = _slicedToArray(args, 4),
      array = _args[0],
      searchElement = _args[1],
      fromIndex = _args[2],
      extendFn = _args[3];

  var fIdx = fromIndex;

  while (fIdx >= 0) {
    if (fIdx in array && extendFn(array[fIdx], searchElement)) {
      return fIdx;
    }

    fIdx -= 1;
  }

  return -1;
};

var getExtendFn = function getExtendFn(extend) {
  return typeof extend === 'string' ? mapExtendFn[toLowerCase(extend)] : null;
};

var getExtendValue = function getExtendValue(args) {
  return args.length > 2 && args.length > 3 ? args[3] : args[2];
};

var runFindIndex = function runFindIndex(obj) {
  var fromIndex = obj.fromIndex,
      length = obj.length,
      iterable = obj.iterable,
      searchElement = obj.searchElement,
      extendFn = obj.extendFn;
  return fromIndex < length - 1 ? findLastIdxFrom([iterable, searchElement, fromIndex, extendFn]) : findLastIndex(iterable, function iteratee(element, index) {
    return index in iterable && extendFn(searchElement, element);
  });
};

var runExtendFn = function runExtendFn(obj) {
  var length = obj.length,
      args = obj.args,
      iterable = obj.iterable,
      searchElement = obj.searchElement,
      extendFn = obj.extendFn;
  var fromIndex = length - 1;

  if (args.length > 3) {
    fromIndex = calcFromIndexRight(iterable, args[2]);

    if (fromIndex < 0) {
      return -1;
    }

    if (fromIndex >= length) {
      fromIndex = length - 1;
    }
  }

  return runFindIndex({
    fromIndex: fromIndex,
    length: length,
    iterable: iterable,
    searchElement: searchElement,
    extendFn: extendFn
  });
};

var conditionalFromIndex = function conditionalFromIndex(obj) {
  var iterable = obj.iterable,
      args = obj.args,
      length = obj.length;
  var fromIndex = calcFromIndexRight(iterable, args[2]);

  if (fromIndex < 0) {
    return -1;
  }

  return fromIndex >= length ? length - 1 : fromIndex;
};

var getFromIndex = function getFromIndex(obj) {
  var args = obj.args,
      length = obj.length,
      extendFn = obj.extendFn,
      iterable = obj.iterable;
  var conditional = args.length > 3 || args.length > 2 && toBoolean(extendFn) === false;
  return conditional ? conditionalFromIndex({
    iterable: iterable,
    args: args,
    length: length
  }) : length - 1;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method returns the last index at which a given element
 * can be found in the array, or -1 if it is not present.
 * The array is searched backwards, starting at fromIndex.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If `array` is `null` or `undefined`.
 * @param {*} searchElement - Element to locate in the `array`.
 * @param {number} [fromIndex] - The index at which to start searching
 *  backwards. Defaults to the array's length minus one, ie the whole array
 *  will be searched. If the index is greater than or equal to the length of
 *  the array, the whole array will be searched. If negative, it is taken as
 *  the offset from the end of the array. Note that even when the index is
 *  negative, the array is still searched from back to front. If the
 *  calculated index is less than 0, -1 is returned, ie the array will not
 *  be searched.
 * @param {string} [extend] - Extension type: `SameValue` or `SameValueZero`.
 * @returns {number} Returns index of found element, otherwise -1.
 */
// eslint-enable jsdoc/check-param-names


var lastIndexOf = function lastIndexOf(array, searchElement) {
  var object = toObject(array);
  var iterable = splitIfBoxedBug(object);
  var length = toLength(iterable.length);

  if (length < 1) {
    return -1;
  }

  var extend = getExtendValue(arguments);
  /* eslint-disable-line prefer-rest-params */

  var extendFn = getExtendFn(extend);

  if (extendFn && (searchElement === 0 || numberIsNaN(searchElement))) {
    return runExtendFn({
      length: length,
      args: arguments,
      iterable: iterable,
      searchElement: searchElement,
      extendFn: extendFn
    });
    /* eslint-disable-line prefer-rest-params */
  }

  var fromIndex = getFromIndex({
    args: arguments,
    length: length,
    extendFn: extendFn,
    iterable: iterable
  });
  /* eslint-disable-line prefer-rest-params */

  return fromIndex < 0 ? -1 : pLastIndexOf(iterable, searchElement, fromIndex);
};

export default lastIndexOf;

//# sourceMappingURL=last-index-of-x.esm.js.map