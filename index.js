/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/last-index-of-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/last-index-of-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/last-index-of-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/last-index-of-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/last-index-of-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/last-index-of-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/last-index-of-x" title="npm version">
 * <img src="https://badge.fury.io/js/last-index-of-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * An extended ES6 lastIndexOf module.
 * @version 1.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module last-index-of-x
 */

/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:true, plusplus:true, maxparams:4, maxdepth:3,
  maxstatements:25, maxcomplexity:13 */

/*global require, module */

;(function () {
  'use strict';

  var pCharAt = String.prototype.charAt,
    pPush = Array.prototype.push,
    pLastIndexOf = Array.prototype.lastIndexOf,
    $min = Math.min,
    $abs = Math.abs,
    ES = require('es-abstract/es6'),
    isString = require('is-string'),
    findLastIndex = require('find-last-index-x');

  /**
   * This method returns the last index at which a given element
   * can be found in the array, or -1 if it is not present.
   * The array is searched backwards, starting at fromIndex.
   *
   * @private
   * @param {Array} object The array to search.
   * @param {*} searchElement Element to locate in the array.
   * @param {number} fromIndex The index at which to start searching backwards.
   * @param {Function} extendFn The comparison function to use.
   * @return {number} Returns index of found element, otherwise -1.
   */
  function findLastIndexFrom(object, searchElement, fromIndex, extendFn) {
    var isStr = isString(object),
      element;
    while (fromIndex >= 0) {
      element = isStr ?
        ES.Call(pCharAt, object, [fromIndex]) :
        object[fromIndex];
      if (fromIndex in object && extendFn(element, searchElement)) {
        return fromIndex;
      }
      fromIndex -= 1;
    }
    return -1;
  }

  /**
   * This method returns the last index at which a given element
   * can be found in the array, or -1 if it is not present.
   * The array is searched backwards, starting at fromIndex.
   *
   * @param {Array} array The array to search.
   * @throws {TypeError} If `array` is `null` or `undefined`.
   * @param {*} searchElement Element to locate in the `array`.
   * @param {number} [fromIndex] The index at which to start searching
   *  backwards. Defaults to the array's length minus one, i.e. the whole array
   *  will be searched. If the index is greater than or equal to the length of
   *  the array, the whole array will be searched. If negative, it is taken as
   *  the offset from the end of the array. Note that even when the index is
   *  negative, the array is still searched from back to front. If the
   *  calculated index is less than 0, -1 is returned, i.e. the array will not
   *  be searched
   * @param {string} [extend] Extension type: `SameValue` or `SameValueZero`.
   * @return {number} Returns index of found element, otherwise -1.
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
    var object = ES.ToObject(array),
      length = ES.ToLength(object.length),
      args = [searchElement],
      fromIndex, extend, extendFn;
    if (!length) {
      return -1;
    }
    if (arguments.length > 2) {
      if (arguments.length > 3) {
        ES.Call(pPush, args, [arguments[2]]);
        extend = arguments[3];
      } else if (isString(arguments[2])) {
        extend = String(arguments[2]);
      }
    }
    if (extend === 'SameValue') {
      extendFn = ES.SameValue;
    } else if (extend === 'SameValueZero') {
      extendFn = ES.SameValueZero;
    }
    if (extendFn && (searchElement === 0 || searchElement !== searchElement)) {
      if (arguments.length > 3) {
        fromIndex = ES.ToInteger(arguments[2]);
      } else {
        fromIndex = length - 1;
      }
      if (fromIndex >= 0) {
        fromIndex = $min(fromIndex, length - 1);
      } else {
        fromIndex = length - $abs(fromIndex);
      }
      if (fromIndex < length - 1) {
        return findLastIndexFrom(object, searchElement, fromIndex, extendFn);
      }
      return findLastIndex(object, function (element, index) {
        return index in object && extendFn(searchElement, element);
      });
    }
    if (!extendFn && args.length === 1 && arguments.length === 3) {
      ES.Call(pPush, args, [arguments[2]]);
    }
    return ES.Call(pLastIndexOf, object, args);
  };
}());
