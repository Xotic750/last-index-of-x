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

const nlio = [].lastIndexOf;
const nativeLastIndexOf = typeof nlio === 'function' && methodize(nlio);
const toLowerCase = methodize(''.toLowerCase);
const {min: mathMin, abs: mathAbs} = Math;
const mapExtendFn = objectCreate(null, {
  samevalue: {
    enumerable: true,
    value: sameValue,
  },
  samevaluezero: {
    enumerable: true,
    value: sameValueZero,
  },
});

const test1 = function test1() {
  const res = attempt(nativeLastIndexOf, [0, 1], 0, -3);

  return res.threw === false && res.value === -1;
};

const test2 = function test2() {
  const res = attempt(nativeLastIndexOf, [0, 1, 0], 0);

  return res.threw === false && res.value === 2;
};

const test3 = function test3() {
  const res = attempt(nativeLastIndexOf, [0, -0], 0);

  return res.threw === false && res.value === 1;
};

const test4 = function test4() {
  const testArr = [];
  testArr.length = 2;
  testArr[0] = void 0; /* eslint-disable-line no-void */
  const res = attempt(nativeLastIndexOf, testArr, void 0); /* eslint-disable-line no-void */

  return res.threw === false && res.value === 0;
};

const test5 = function test5() {
  const res = attempt(nativeLastIndexOf, 'abc', 'c');

  return res.threw === false && res.value === 2;
};

const test6 = function test6() {
  const args = (function getArgs() {
    return arguments; /* eslint-disable-line prefer-rest-params */
  })('a', 'b', 'c');

  const res = attempt(nativeLastIndexOf, args, 'c');

  return res.threw === false && res.value === 2;
};

const isWorking = toBoolean(nativeLastIndexOf) && test1() && test2() && test3() && test4() && test5() && test6();

export const implementation = function lastIndexOf(array, searchElement) {
  const object = toObject(array);
  // If no callback function or if callback is not a callable function
  const iterable = splitIfBoxedBug(object);
  const length = toLength(iterable.length);

  if (length === 0) {
    return -1;
  }

  let i = length - 1;

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params */
    i = mathMin(i, toInteger(arguments[2]));
  }

  // handle negative indices
  i = i >= 0 ? i : length - mathAbs(i);
  for (; i >= 0; i -= 1) {
    if (i in iterable && searchElement === iterable[i]) {
      return i;
    }
  }

  return -1;
};

const pLastIndexOf = isWorking ? nativeLastIndexOf : implementation;

// eslint-disable jsdoc/check-param-names
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
const findLastIdxFrom = function findLastIndexFrom(args) {
  const [array, searchElement, fromIndex, extendFn] = args;
  let fIdx = fromIndex;
  while (fIdx >= 0) {
    if (fIdx in array && extendFn(array[fIdx], searchElement)) {
      return fIdx;
    }

    fIdx -= 1;
  }

  return -1;
};

const getExtendFn = function getExtendFn(extend) {
  return typeof extend === 'string' ? mapExtendFn[toLowerCase(extend)] : null;
};

const getExtendValue = function getExtendValue(args) {
  return args.length > 2 && args.length > 3 ? args[3] : args[2];
};

const runFindIndex = function runFindIndex(obj) {
  const {fromIndex, length, iterable, searchElement, extendFn} = obj;

  return fromIndex < length - 1
    ? findLastIdxFrom([iterable, searchElement, fromIndex, extendFn])
    : findLastIndex(iterable, function iteratee(element, index) {
        return index in iterable && extendFn(searchElement, element);
      });
};

const runExtendFn = function runExtendFn(obj) {
  const {length, args, iterable, searchElement, extendFn} = obj;
  let fromIndex = length - 1;

  if (args.length > 3) {
    fromIndex = calcFromIndexRight(iterable, args[2]);

    if (fromIndex < 0) {
      return -1;
    }

    if (fromIndex >= length) {
      fromIndex = length - 1;
    }
  }

  return runFindIndex({fromIndex, length, iterable, searchElement, extendFn});
};

const conditionalFromIndex = function conditionalFromIndex(obj) {
  const {iterable, args, length} = obj;
  const fromIndex = calcFromIndexRight(iterable, args[2]);

  if (fromIndex < 0) {
    return -1;
  }

  return fromIndex >= length ? length - 1 : fromIndex;
};

const getFromIndex = function getFromIndex(obj) {
  const {args, length, extendFn, iterable} = obj;
  const conditional = args.length > 3 || (args.length > 2 && toBoolean(extendFn) === false);

  return conditional ? conditionalFromIndex({iterable, args, length}) : length - 1;
};

// eslint-disable jsdoc/check-param-names
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
const lastIndexOf = function lastIndexOf(array, searchElement) {
  const object = toObject(array);
  const iterable = splitIfBoxedBug(object);
  const length = toLength(iterable.length);

  if (length < 1) {
    return -1;
  }

  const extend = getExtendValue(arguments); /* eslint-disable-line prefer-rest-params */
  const extendFn = getExtendFn(extend);

  if (extendFn && (searchElement === 0 || numberIsNaN(searchElement))) {
    return runExtendFn({length, args: arguments, iterable, searchElement, extendFn}); /* eslint-disable-line prefer-rest-params */
  }

  const fromIndex = getFromIndex({args: arguments, length, extendFn, iterable}); /* eslint-disable-line prefer-rest-params */

  return fromIndex < 0 ? -1 : pLastIndexOf(iterable, searchElement, fromIndex);
};

export default lastIndexOf;
