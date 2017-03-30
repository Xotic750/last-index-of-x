(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.returnExports = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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
 *
 * Requires ES3 or above.
 *
 * @version 1.3.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module last-index-of-x
 */

/* eslint strict: 1, max-statements: 1, complexity: 1, no-invalid-this: 1 */

/* global require, module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $isNaN = _dereq_('is-nan');
  var findLastIndex = _dereq_('find-last-index-x');
  var isString = _dereq_('is-string');
  var toInteger = _dereq_('to-integer-x');
  var toObject = _dereq_('to-object-x');
  var toLength = _dereq_('to-length-x');
  var sameValueZero = _dereq_('same-value-zero-x');
  var safeToString = _dereq_('safe-to-string-x');
  var sameValue = _dereq_('object-is');
  var pLastIndexOf = Array.prototype.lastIndexOf;

  if (typeof pLastIndexOf !== 'function' || [0, 1].lastIndexOf(0, -3) !== -1) {
    var boxedString = Object('a');
    var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

    pLastIndexOf = function lastIndexOf(searchElement) {
      var self = splitString && isString(this) ? this.split('') : toObject(this);
      var length = self.length >>> 0;

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
        if (i in self && searchElement === self[i]) {
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
   * @param {Array} object The array to search.
   * @param {*} searchElement Element to locate in the array.
   * @param {number} fromIndex The index at which to start searching backwards.
   * @param {Function} extendFn The comparison function to use.
   * @return {number} Returns index of found element, otherwise -1.
   */
  var findLastIdxFrom = function findLastIndexFrom(object, searchElement, fromIndex, extendFn) {
    var fIdx = fromIndex;
    var isStr = isString(object);
    while (fIdx >= 0) {
      if (fIdx in object) {
        var element = isStr ? object.charAt(fIdx) : object[fIdx];
        if (extendFn(element, searchElement)) {
          return fIdx;
        }
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
    var object = toObject(array);
    var length = toLength(object.length);
    if (!length) {
      return -1;
    }
    var args = [searchElement];
    var extend;
    if (arguments.length > 2) {
      if (arguments.length > 3) {
        args.push(arguments[2]);
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
        return findLastIdxFrom(object, searchElement, fromIndex, extendFn);
      }
      return findLastIndex(object, function (element, index) {
        return index in object && extendFn(searchElement, element);
      });
    }
    if (!extendFn && args.length === 1 && arguments.length === 3) {
      args.push(arguments[2]);
    }
    return pLastIndexOf.apply(object, args);
  };
}());

},{"find-last-index-x":4,"is-nan":10,"is-string":15,"object-is":19,"safe-to-string-x":23,"same-value-zero-x":24,"to-integer-x":25,"to-length-x":26,"to-object-x":27}],2:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/assert-is-callable-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/assert-is-callable-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/assert-is-callable-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/assert-is-callable-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/assert-is-callable-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/assert-is-callable-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/assert-is-callable-x" title="npm version">
 * <img src="https://badge.fury.io/js/assert-is-callable-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * If IsCallable(callbackfn) is false, throw a TypeError exception.
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module assert-is-callable-x
 */

/* eslint strict: 1 */

/* global require, module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var isCallable = _dereq_('is-callable');
  var safeToString = _dereq_('safe-to-string-x');
  var isPrimitive = _dereq_('is-primitive');

  /**
   * Tests `callback` to see if it is callable, throws a `TypeError` if it is
   * not. Otherwise returns the `callback`.
   *
   * @param {*} value The argument to be tested.
   * @throws {TypeError} Throws if `callback` is not a callable.
   * @return {*} Returns `callback` if it is callable.
   * @example
   * var assertIsCallable = require('assert-is-callable-x');
   * var primitive = true;
   * var mySymbol = Symbol('mySymbol');
   * var symObj = Object(mySymbol);
   * var object = {};
   * function fn () {}
   *
   * assertIsCallable(primitive);
   *    // TypeError 'true is not callable'.
   * assertIsCallable(object);
   *    // TypeError '#<Object> is not callable'.
   * assertIsCallable(mySymbol);
   *    // TypeError 'Symbol(mySymbol) is not callable'.
   * assertIsCallable(symObj);
   *    // TypeError '#<Object> is not callable'.
   * assertIsCallable(fn);
   *    // Returns fn.
   */
  module.exports = function assertIsCallable(value) {
    if (!isCallable(value)) {
      var msg = isPrimitive(value) ? safeToString(value) : '#<Object>';
      throw new TypeError(msg + ' is not callable');
    }
    return value;
  };
}());

},{"is-callable":7,"is-primitive":14,"safe-to-string-x":23}],3:[function(_dereq_,module,exports){
'use strict';

var keys = _dereq_('object-keys');
var foreach = _dereq_('foreach');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;

},{"foreach":5,"object-keys":20}],4:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/find-last-index-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/find-last-index-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/find-last-index-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/find-last-index-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/find-last-index-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/find-last-index-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/find-last-index-x" title="npm version">
 * <img src="https://badge.fury.io/js/find-last-index-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * This method returns the index of the first element in the array that satisfies the
 * provided testing function. Otherwise -1 is returned.  The array is searched backwards.
 *
 * Requires ES3 or above.
 *
 * @version 1.3.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module find-last-index-x
 */

/* eslint strict: 1, max-statements: 1 */

/* global require, module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var toLength = _dereq_('to-length-x');
  var toObject = _dereq_('to-object-x');
  var isString = _dereq_('is-string');
  var assertIsCallable = _dereq_('assert-is-callable-x');

  /**
   * Like `findIndex`, this method returns an index in the array, if an element
   * in the array satisfies the provided testing function, except it is peformed
   * in reverse. Otherwise -1 is returned.
   *
   * @param {Array} array The array to search.
   * @throws {TypeError} If array is `null` or `undefined`-
   * @param {Function} callback Function to execute on each value in the array,
   *  taking three arguments: `element`, `index` and `array`.
   * @throws {TypeError} If `callback` is not a function.
   * @param {*} [thisArg] Object to use as `this` when executing `callback`.
   * @return {number} Returns index of positively tested element, otherwise -1.
   * @example
   * var findLastIndex = require('find-index-x');
   *
   * function isPrime(element, index, array) {
   *   var start = 2;
   *   while (start <= Math.sqrt(element)) {
   *     if (element % start++ < 1) {
   *       return false;
   *     }
   *   }
   *   return element > 1;
   * }
   *
   * console.log(findLastIndex([4, 6, 8, 12, 14], isPrime)); // -1, not found
   * console.log(findLastIndex([4, 6, 7, 12, 13], isPrime)); // 4
   */
  module.exports = function findLastIndex(array, callback) {
    var object = toObject(array);
    assertIsCallable(callback);
    var index = toLength(object.length) - 1;
    if (index < 0) {
      return -1;
    }
    var thisArg;
    if (arguments.length > 2) {
      thisArg = arguments[2];
    }
    var isStr = isString(object);
    while (index > -1) {
      var item = isStr ? object.charAt(index) : object[index];
      if (callback.call(thisArg, item, index, object)) {
        return index;
      }
      index -= 1;
    }
    return -1;
  };
}());

},{"assert-is-callable-x":2,"is-string":15,"to-length-x":26,"to-object-x":27}],5:[function(_dereq_,module,exports){

var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};


},{}],6:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/has-symbol-support-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/has-symbol-support-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/has-symbol-support-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/has-symbol-support-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/has-symbol-support-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/has-symbol-support-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/has-symbol-support-x" title="npm version">
 * <img src="https://badge.fury.io/js/has-symbol-support-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Tests if `Symbol` exists and creates the correct type.
 *
 * Requires ES3 or above.
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-symbol-support-x
 */

/* eslint strict: 1, symbol-description: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  /**
   * Indicates if `Symbol`exists and creates the correct type.
   * `true`, if it exists and creates the correct type, otherwise `false`.
   *
   * @type boolean
   */
  module.exports = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
}());

},{}],7:[function(_dereq_,module,exports){
'use strict';

var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};

},{}],8:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/is-finite-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/is-finite-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-finite-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/is-finite-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/is-finite-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/is-finite-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/is-finite-x" title="npm version">
 * <img src="https://badge.fury.io/js/is-finite-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6-compliant shim for Number.isFinite.
 *
 * Requires ES3 or above.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite|20.1.2.2 Number.isFinite ( number )}
 *
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-finite-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $isNaN = _dereq_('is-nan');

  var $isFinite;
  if (typeof Number.isFinite === 'function') {
    try {
      if (Number.isFinite(9007199254740991) && !Number.isFinite(Infinity)) {
        $isFinite = Number.isFinite;
      }
    } catch (ignore) {}
  }

  /**
   * This method determines whether the passed value is a finite number.
   *
   * @param {*} number The value to be tested for finiteness.
   * @return {boolean} A Boolean indicating whether or not the given value is a finite number.
   * @example
   * var numIsFinite = require('is-finite-x');
   *
   * numIsFinite(Infinity);  // false
   * numIsFinite(NaN);       // false
   * numIsFinite(-Infinity); // false
   *
   * numIsFinite(0);         // true
   * numIsFinite(2e64);      // true
   *
   * numIsFinite('0');       // false, would've been true with
   *                         // global isFinite('0')
   * numIsFinite(null);      // false, would've been true with
   */
  module.exports = $isFinite || function isFinite(number) {
    return !(typeof number !== 'number' || $isNaN(number) || number === Infinity || number === -Infinity);
  };
}());

},{"is-nan":10}],9:[function(_dereq_,module,exports){
'use strict';

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

module.exports = function isNaN(value) {
	return value !== value;
};

},{}],10:[function(_dereq_,module,exports){
'use strict';

var define = _dereq_('define-properties');

var implementation = _dereq_('./implementation');
var getPolyfill = _dereq_('./polyfill');
var shim = _dereq_('./shim');

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

define(implementation, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = implementation;

},{"./implementation":9,"./polyfill":11,"./shim":12,"define-properties":3}],11:[function(_dereq_,module,exports){
'use strict';

var implementation = _dereq_('./implementation');

module.exports = function getPolyfill() {
	if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) {
		return Number.isNaN;
	}
	return implementation;
};

},{"./implementation":9}],12:[function(_dereq_,module,exports){
'use strict';

var define = _dereq_('define-properties');
var getPolyfill = _dereq_('./polyfill');

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

module.exports = function shimNumberIsNaN() {
	var polyfill = getPolyfill();
	define(Number, { isNaN: polyfill }, { isNaN: function () { return Number.isNaN !== polyfill; } });
	return polyfill;
};

},{"./polyfill":11,"define-properties":3}],13:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/is-nil-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/is-nil-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-nil-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/is-nil-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-nil-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/is-nil-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/is-nil-x" title="npm version">
 * <img src="https://badge.fury.io/js/is-nil-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Checks if `value` is `null` or `undefined`.
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-nil-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var isUndefined = _dereq_('validate.io-undefined');
  var isNull = _dereq_('lodash.isnull');

  /**
   * Checks if `value` is `null` or `undefined`.
   *
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
   * @example
   *
   * _.isNil(null);
   * // => true
   *
   * _.isNil(void 0);
   * // => true
   *
   * _.isNil(NaN);
   * // => false
   */
  module.exports = function isNil(value) {
    return isNull(value) || isUndefined(value);
  };
}());

},{"lodash.isnull":17,"validate.io-undefined":28}],14:[function(_dereq_,module,exports){
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

// see http://jsperf.com/testing-value-is-primitive/7
module.exports = function isPrimitive(value) {
  return value == null || (typeof value !== 'function' && typeof value !== 'object');
};

},{}],15:[function(_dereq_,module,exports){
'use strict';

var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};

},{}],16:[function(_dereq_,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') { return false; }
		return symStringRegex.test(symToStr.call(value));
	};
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') { return true; }
		if (toStr.call(value) !== '[object Symbol]') { return false; }
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false;
	};
}

},{}],17:[function(_dereq_,module,exports){
/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;

},{}],18:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/math-sign-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/math-sign-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/math-sign-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/math-sign-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/math-sign-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/math-sign-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/math-sign-x" title="npm version">
 * <img src="https://badge.fury.io/js/math-sign-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6-compliant shim for Math.sign.
 *
 * Requires ES3 or above.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-math.sign|20.2.2.29 Math.sign(x)}
 *
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module math-sign-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $isNaN = _dereq_('is-nan');

  var $sign;
  if (typeof Math.sign === 'function') {
    try {
      if (Math.sign(10) === 1 && Math.sign(-10) === -1 && Math.sign(0) === 0) {
        $sign = Math.sign;
      }
    } catch (ignore) {}
  }

  /**
   * This method returns the sign of a number, indicating whether the number is positive,
   * negative or zero.
   *
   * @param {*} x A number.
   * @return {number} A number representing the sign of the given argument. If the argument
   * is a positive number, negative number, positive zero or negative zero, the function will
   * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
   * @example
   * var mathSign = require('math-sign-x');
   *
   * mathSign(3);     //  1
   * mathSign(-3);    // -1
   * mathSign('-3');  // -1
   * mathSign(0);     //  0
   * mathSign(-0);    // -0
   * mathSign(NaN);   // NaN
   * mathSign('foo'); // NaN
   * mathSign();      // NaN
   */
  module.exports = $sign || function sign(x) {
    var n = Number(x);
    if (n === 0 || $isNaN(n)) {
      return n;
    }
    return n > 0 ? 1 : -1;
  };
}());

},{"is-nan":10}],19:[function(_dereq_,module,exports){
"use strict";

/* https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is */

var NumberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	} else if (a === b) {
		return true;
	} else if (NumberIsNaN(a) && NumberIsNaN(b)) {
		return true;
	}
	return false;
};


},{}],20:[function(_dereq_,module,exports){
'use strict';

// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = _dereq_('./isArguments');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;

},{"./isArguments":21}],21:[function(_dereq_,module,exports){
'use strict';

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

},{}],22:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/require-object-coercible-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/require-object-coercible-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/require-object-coercible-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/require-object-coercible-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/require-object-coercible-x#info=devDependencies"
 * title="devDependency status">
 * <img
 * src="https://david-dm.org/Xotic750/require-object-coercible-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a
 * href="https://badge.fury.io/js/require-object-coercible-x"
 * title="npm version">
 * <img src="https://badge.fury.io/js/require-object-coercible-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6-compliant shim for RequireObjectCoercible.
 *
 * Requires ES3 or above.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-requireobjectcoercible|7.2.1 RequireObjectCoercible ( argument )}
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module require-object-coercible-x
 */

/* eslint strict: 1, id-length: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var isNil = _dereq_('is-nil-x');

  /**
   * The abstract operation RequireObjectCoercible throws an error if argument
   * is a value that cannot be converted to an Object using ToObject.
   *
   * @param {*} value The `value` to check.
   * @throws {TypeError} If `value` is a `null` or `undefined`.
   * @return {string} The `value`.
   * @example
   * var RequireObjectCoercible = require('require-object-coercible-x');
   *
   * RequireObjectCoercible(); // TypeError
   * RequireObjectCoercible(null); // TypeError
   * RequireObjectCoercible('abc'); // 'abc'
   * RequireObjectCoercible(true); // true
   * RequireObjectCoercible(Symbol('foo')); // Symbol('foo')
   */
  module.exports = function RequireObjectCoercible(value) {
    if (isNil(value)) {
      throw new TypeError('Cannot call method on ' + value);
    }
    return value;
  };
}());

},{"is-nil-x":13}],23:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/safe-to-string-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/safe-to-string-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/safe-to-string-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/safe-to-string-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/safe-to-string-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/safe-to-string-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/safe-to-string-x" title="npm version">
 * <img src="https://badge.fury.io/js/safe-to-string-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6 safeToString module. Converts a `Symbol` literal or object to `Symbol()`
 * instead of throwing a `TypeError`. Its primary use is for logging/debugging.
 *
 * Requires ES3 or above.
 *
 * @see {@link https://github.com/Xotic750/to-string-x|to-string-x}
 *
 * @version 1.3.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module safe-to-string-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var isSymbol = _dereq_('is-symbol');
  var pToString = _dereq_('has-symbol-support-x') && Symbol.prototype.toString;

  /**
   * The abstract operation `safeToString` converts a `Symbol` literal or
   * object to `Symbol()` instead of throwing a `TypeError`.
   *
   * @param {*} value The value to convert to a string.
   * @return {string} The converted value.
   * @example
   * var safeToString = require('safe-to-string-x');
   *
   * safeToString(); // 'undefined'
   * safeToString(null); // 'null'
   * safeToString('abc'); // 'abc'
   * safeToString(true); // 'true'
   * safeToString(Symbol('foo')); // 'Symbol(foo)'
   * safeToString(Symbol.iterator); // 'Symbol(Symbol.iterator)'
   * safeToString(Object(Symbol.iterator)); // 'Symbol(Symbol.iterator)'
   */
  module.exports = function safeToString(value) {
    return pToString && isSymbol(value) ? pToString.call(value) : String(value);
  };
}());

},{"has-symbol-support-x":6,"is-symbol":16}],24:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/same-value-zero-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/same-value-zero-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/same-value-zero-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/same-value-zero-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/same-value-zero-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/same-value-zero-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/same-value-zero-x" title="npm version">
 * <img src="https://badge.fury.io/js/same-value-zero-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6-compliant shim for SameValueZero.
 *
 * Requires ES3 or above.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-samevaluezero|7.2.10 SameValueZero(x, y)}
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module same-value-zero-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var is = _dereq_('object-is');

  /**
   * This method determines whether two values are the same value.
   * SameValueZero differs from SameValue (`Object.is`) only in its treatment
   * of +0 and -0.
   *
   * @param {*} x The first value to compare.
   * @param {*} y The second value to compare.
   * @return {boolean} A Boolean indicating whether or not the two arguments
   * are the same value.
   * @example
   * var sameValueZero = require('same-value-zero-x');
   * sameValueZero(0, 0); // true
   * sameValueZero(-0, -0); // true
   * sameValueZero(0, -0); // false
   * sameValueZero(NaN, NaN); //true
   * sameValueZero(Infinity, Infinity); // true
   * sameValueZero(-Infinity, -Infinity); // true
   */
  module.exports = function sameValueZero(x, y) {
    return x === y || is(x, y);
  };
}());

},{"object-is":19}],25:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/to-integer-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/to-integer-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-integer-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/to-integer-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/to-integer-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/to-integer-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/to-integer-x" title="npm version">
 * <img src="https://badge.fury.io/js/to-integer-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6-compliant shim for toInteger.
 *
 * Requires ES3 or above.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger|7.1.4 ToInteger ( argument )}
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-integer-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $isNaN = _dereq_('is-nan');
  var $isFinite = _dereq_('is-finite-x');
  var $sign = _dereq_('math-sign-x');

  /**
   * Converts `value` to an integer.
   *
   * @param {*} value The value to convert.
   * @return {number} Returns the converted integer.
   *
   * @example
   * var toInteger = require('to-integer-x');
   * toInteger(3); // 3
   * toInteger(Number.MIN_VALUE); // 0
   * toInteger(Infinity); // 1.7976931348623157e+308
   * toInteger('3'); // 3
   */
  module.exports = function ToInteger(value) {
    var number = Number(value);
    if ($isNaN(number)) {
      return 0;
    }
    if (number === 0 || !$isFinite(number)) {
      return number;
    }
    return $sign(number) * Math.floor(Math.abs(number));
  };
}());

},{"is-finite-x":8,"is-nan":10,"math-sign-x":18}],26:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/to-length-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/to-length-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-length-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/to-length-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/to-length-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/to-length-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/to-length-x" title="npm version">
 * <img src="https://badge.fury.io/js/to-length-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6-compliant shim for ToLength.
 *
 * Requires ES3 or above.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tolength|7.1.15 ToLength ( argument )}
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-length-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var toInteger = _dereq_('to-integer-x');
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Converts `value` to an integer suitable for use as the length of an
   * array-like object.
   *
   * @param {*} value The value to convert.
   * @return {number} Returns the converted integer.
   * @example
   * var toLength = require('to-length-x');
   * toLength(3); // 3
   * toLength(Number.MIN_VALUE); // 0
   * toLength(Infinity); // Number.MAX_SAFE_INTEGER
   * toLength('3'); // 3
   */
  module.exports = function ToLength(value) {
    var len = toInteger(value);
    if (len <= 0) {
      return 0;
    } // includes converting -0 to +0
    if (len > MAX_SAFE_INTEGER) {
      return MAX_SAFE_INTEGER;
    }
    return len;
  };
}());

},{"to-integer-x":25}],27:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/to-object-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/to-object-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-object-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/to-object-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/to-object-x#info=devDependencies"
 * title="devDependency status">
 * <img
 * src="https://david-dm.org/Xotic750/to-object-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a
 * href="https://badge.fury.io/js/to-object-x"
 * title="npm version">
 * <img src="https://badge.fury.io/js/to-object-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6-compliant shim for ToObject.
 *
 * Requires ES3 or above.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-toobject|7.1.13 ToObject ( argument )}
 *
 * @version 1.2.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-object-x
 */

/* eslint strict: 1, id-length: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $requireObjectCoercible = _dereq_('require-object-coercible-x');

  /**
   * The abstract operation ToObject converts argument to a value of
   * type Object.
   *
   * @param {*} value The `value` to convert.
   * @throws {TypeError} If `value` is a `null` or `undefined`.
   * @return {!Object} The `value` converted to an object.
   * @example
   * var ToObject = require('to-object-x');
   *
   * ToObject(); // TypeError
   * ToObject(null); // TypeError
   * ToObject('abc'); // Object('abc')
   * ToObject(true); // Object(true)
   * ToObject(Symbol('foo')); // Object(Symbol('foo'))
   */
  module.exports = function ToObject(value) {
    return Object($requireObjectCoercible(value));
  };
}());

},{"require-object-coercible-x":22}],28:[function(_dereq_,module,exports){
/**
*
*	VALIDATE: undefined
*
*
*	DESCRIPTION:
*		- Validates if a value is undefined.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: isUndefined( value )
*	Validates if a value is undefined.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is undefined
*/
function isUndefined( value ) {
	return value === void 0;
} // end FUNCTION isUndefined()


// EXPORTS //

module.exports = isUndefined;

},{}]},{},[1])(1)
});