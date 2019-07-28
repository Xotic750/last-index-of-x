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
var nlio = [].lastIndexOf;
var nativeLastIndexOf = typeof nlio === 'function' && nlio;
var _ref = '',
    toLowerCase = _ref.toLowerCase;
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
  var res = attempt.call([0, 1], nativeLastIndexOf, 0, -3);
  return res.threw === false && res.value === -1;
};

var test2 = function test2() {
  var res = attempt.call([0, 1, 0], nativeLastIndexOf, 0);
  return res.threw === false && res.value === 2;
};

var test3 = function test3() {
  var res = attempt.call([0, -0], nativeLastIndexOf, 0);
  return res.threw === false && res.value === 1;
};

var test4 = function test4() {
  var testArr = [];
  testArr.length = 2;
  /* eslint-disable-next-line no-void */

  testArr[0] = void 0;
  /* eslint-disable-next-line no-void */

  var res = attempt.call(testArr, nativeLastIndexOf, void 0);
  return res.threw === false && res.value === 0;
};

var test5 = function test5() {
  var res = attempt.call('abc', nativeLastIndexOf, 'c');
  return res.threw === false && res.value === 2;
};

var test6 = function test6() {
  var res = attempt.call(function getArgs() {
    /* eslint-disable-next-line prefer-rest-params */
    return arguments;
  }('a', 'b', 'c'), nativeLastIndexOf, 'c');
  return res.threw === false && res.value === 2;
};

var isWorking = toBoolean(nativeLastIndexOf) && test1() && test2() && test3() && test4() && test5() && test6();

var implementation = function implementation() {
  return function lastIndexOf(searchElement) {
    if (toLength(this.length
    /* eslint-disable-line babel/no-invalid-this */
    ) < 1) {
      return -1;
    }

    var i = arguments[1];
    /* eslint-disable-line prefer-rest-params */

    while (i >= 0) {
      if (i in this && searchElement === this[i]
      /* eslint-disable-line babel/no-invalid-this */
      ) {
          return i;
        }

      i -= 1;
    }

    return -1;
  };
};

var pLastIndexOf = isWorking ? nativeLastIndexOf : implementation();
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

var findLastIdxFrom = function findLastIndexFrom(array, searchElement, fromIndex, extendFn) {
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
  return typeof extend === 'string' ? mapExtendFn[toLowerCase.call(extend)] : null;
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
  return fromIndex < length - 1 ? findLastIdxFrom(iterable, searchElement, fromIndex, extendFn) : findLastIndex(iterable, function iteratee(element, index) {
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

  return fromIndex < 0 ? -1 : pLastIndexOf.call(iterable, searchElement, fromIndex);
};

export default lastIndexOf;

//# sourceMappingURL=last-index-of-x.esm.js.map