/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2015-2017",
  "date": "2019-07-18T15:28:59.963Z",
  "describe": "",
  "description": "An extended ES6 lastIndexOf.",
  "file": "last-index-of-x.js",
  "hash": "6566f39c4720dab5a706",
  "license": "MIT",
  "version": "3.0.0"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lastIndexOfX"] = factory();
	else
		root["lastIndexOfX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(5)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(7);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
var is_nan_x_esm_isNaN = function isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
};

/* harmony default export */ var is_nan_x_esm = (is_nan_x_esm_isNaN);


// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(0);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// CONCATENATED MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
var attempt = function attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};

/* harmony default export */ var attempt_x_esm = (attempt);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm_this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = attempt_x_esm(function () {
  _newArrowCheck(this, has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_esm = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/to-length-x/node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(2);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(3);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
var toBoolean = function toBoolean(value) {
  return !!value;
};

/* harmony default export */ var to_boolean_x_esm = (toBoolean);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

var toStringTag = function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
};

/* harmony default export */ var to_string_tag_x_esm = (toStringTag);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_esm = (has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
var isNil = function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
};

/* harmony default export */ var is_nil_x_esm = (isNil);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

var require_object_coercible_x_esm_requireObjectCoercible = function requireObjectCoercible(value) {
  if (is_nil_x_esm(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
};

/* harmony default export */ var require_object_coercible_x_esm = (require_object_coercible_x_esm_requireObjectCoercible);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/to-string-x/dist/to-string-x.esm.js

var ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

var to_string_x_esm_ToString = function ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
};

/* harmony default export */ var to_string_x_esm = (to_string_x_esm_ToString);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

var require_coercible_to_string_x_esm_requireCoercibleToString = function requireCoercibleToString(value) {
  return to_string_x_esm(require_object_coercible_x_esm(value));
};

/* harmony default export */ var require_coercible_to_string_x_esm = (require_coercible_to_string_x_esm_requireCoercibleToString);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var white_space_x_esm_length = list.length;

for (var white_space_x_esm_i = 0; white_space_x_esm_i < white_space_x_esm_length; white_space_x_esm_i += 1) {
  if (list[white_space_x_esm_i].es2016) {
    stringES2016 += list[white_space_x_esm_i].string;
  }

  if (list[white_space_x_esm_i].es2018) {
    stringES2018 += list[white_space_x_esm_i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ var white_space_x_esm = (string2018);
var string2016 = stringES2016;


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft2016 = new RegExpCtr("^[".concat(string2016, "]+"));
var reLeft = new RegExpCtr("^[".concat(white_space_x_esm, "]+"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2016(string) {
  return replace.call(require_coercible_to_string_x_esm(string), reLeft2016, EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

var trim_left_x_esm_trimLeft2018 = function trimLeft2018(string) {
  return replace.call(require_coercible_to_string_x_esm(string), reLeft, EMPTY_STRING);
};

/* harmony default export */ var trim_left_x_esm = (trim_left_x_esm_trimLeft2018);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_esm_RegExpCtr = /none/.constructor;
var reRight2016 = new trim_right_x_esm_RegExpCtr("[".concat(string2016, "]+$"));
var reRight2018 = new trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+$"));
var trim_right_x_esm_replace = trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2016(string) {
  return trim_right_x_esm_replace.call(require_coercible_to_string_x_esm(string), reRight2016, trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

var trim_right_x_esm_trimRight2018 = function trimRight2018(string) {
  return trim_right_x_esm_replace.call(require_coercible_to_string_x_esm(string), reRight2018, trim_right_x_esm_EMPTY_STRING);
};

/* harmony default export */ var trim_right_x_esm = (trim_right_x_esm_trimRight2018);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

var trim_x_esm_trim2018 = function trim2018(string) {
  return trim_left_x_esm(trim_right_x_esm(string));
};

/* harmony default export */ var trim_x_esm = (trim_x_esm_trim2018);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var SPACE = ' ';
var normalize_space_x_esm_RegExpCtr = /none/.constructor;
var reNormalize2016 = new normalize_space_x_esm_RegExpCtr("[".concat(string2016, "]+"), 'g');
var reNormalize2018 = new normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+"), 'g');
var normalize_space_x_esm_replace = SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalizeSpace2016(string) {
  return normalize_space_x_esm_replace.call(trim2016(string), reNormalize2016, SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

var normalize_space_x_esm_normalizeSpace2018 = function normalizeSpace2018(string) {
  return normalize_space_x_esm_replace.call(trim_x_esm(string), reNormalize2018, SPACE);
};

/* harmony default export */ var normalize_space_x_esm = (normalize_space_x_esm_normalizeSpace2018);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var replace_comments_x_esm_EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_esm_replace = replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

var replace_comments_x_esm_replaceComments = function replaceComments(string, replacement) {
  return replace_comments_x_esm_replace.call(require_coercible_to_string_x_esm(string), STRIP_COMMENTS, arguments.length > 1 ? to_string_x_esm(replacement) : replace_comments_x_esm_EMPTY_STRING);
};

/* harmony default export */ var replace_comments_x_esm = (replace_comments_x_esm_replaceComments);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_esm_this = undefined;

function is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }








var FunctionCtr = attempt_x_esm.constructor;
var castBoolean = true.constructor;
var is_function_x_esm_SPACE = ' ';
var fToString = attempt_x_esm.toString;
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;
var hasNativeClass = attempt_x_esm(function () {
  is_function_x_esm_newArrowCheck(this, is_function_x_esm_this);

  /* eslint-disable-next-line babel/new-cap */
  return FunctionCtr('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, normalize_space_x_esm(replace_comments_x_esm(fToString.call(value), is_function_x_esm_SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt_x_esm(testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_esm.call(value, fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_function_x_esm_isFunction = function isFunction(value, allowClass) {
  if (is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_esm) {
    return tryFuncToString(value, to_boolean_x_esm(allowClass));
  }

  if (hasNativeClass && castBoolean(allowClass) === false && isES6ClassFn(value)) {
    return false;
  }

  var strTag = to_string_tag_x_esm(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
};

/* harmony default export */ var is_function_x_esm = (is_function_x_esm_isFunction);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
/** @type {StringConstructor} */

var StringCtr = STRING.constructor;
/** @type {NumberConstructor} */

var NumberCtr = ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x_esm && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  require_object_coercible_x_esm(ordinary);

  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = ZERO; i < orderLength; i += ONE) {
    method = ordinary[methodNames[i]];

    if (is_function_x_esm(method)) {
      result = method.call(ordinary);

      if (is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (is_nil_x_esm(func) === false) {
    if (is_function_x_esm(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x_esm) {
    if (symToPrimitive) {
      return getMethod(value, symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


var to_primitive_x_esm_toPrimitive = function toPrimitive(input, preferredType) {
  if (is_primitive_default()(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? STRING : hint;
  return ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
};

/* harmony default export */ var to_primitive_x_esm = (to_primitive_x_esm_toPrimitive);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var nativeParseInt = parseInt;
/**  @type {Function} */

var castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var _ref = '',
    charAt = _ref.charAt;
var hexRegex = /^[-+]?0[xX]/;
var parse_int_x_esm_test = hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parseInt2016(string, radix) {
  var str = trimLeft2016(to_string_x_esm(string));
  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_test.call(hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

var parse_int_x_esm_parseInt2018 = function parseInt2018(string, radix) {
  var str = trim_left_x_esm(to_string_x_esm(string));

  if (charAt.call(str, 0) === "\u180E") {
    return nan_x_esm;
  }

  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_test.call(hexRegex, str) ? 16 : 10));
};

/* harmony default export */ var parse_int_x_esm = (parse_int_x_esm_parseInt2018);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/to-number-x/dist/to-number-x.esm.js





var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var to_number_x_esm_castNumber = testCharsCount.constructor;
var pStrSlice = to_number_x_esm_ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_esm_test = binaryRegex.test;

var isBinary = function _isBinary(value) {
  return to_number_x_esm_test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function _isOctal(value) {
  return to_number_x_esm_test.call(octalRegex, value);
};

var nonWSregex2016 = new RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var hasNonWS2016 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2016, value);
};

var nonWSregex2018 = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS2018 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2018, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return to_number_x_esm_test.call(invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function toNumber2016(argument) {
  var value = to_primitive_x_esm(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2016(value) || isInvalidHexLiteral(value)) {
      return nan_x_esm;
    }

    var trimmed = trim2016(value);

    if (trimmed !== value) {
      return toNumber2016(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

var to_number_x_esm_toNumber2018 = function toNumber2018(argument) {
  var value = to_primitive_x_esm(argument, to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2018(parse_int_x_esm(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2018(parse_int_x_esm(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return nan_x_esm;
    }

    var trimmed = trim_x_esm(value);

    if (trimmed !== value) {
      return toNumber2018(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
};

/* harmony default export */ var to_number_x_esm = (to_number_x_esm_toNumber2018);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

var is_finite_x_esm_isFinite = function isFinite(number) {
  return typeof number === 'number' && is_nan_x_esm(number) === false && number !== infinity_x_esm && number !== -infinity_x_esm;
};

/* harmony default export */ var is_finite_x_esm = (is_finite_x_esm_isFinite);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function sign2016(x) {
  var n = toNumber2016(x);

  if (n === 0 || is_nan_x_esm(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

var math_sign_x_esm_sign2018 = function sign2018(x) {
  var n = to_number_x_esm(x);

  if (n === 0 || is_nan_x_esm(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

/* harmony default export */ var math_sign_x_esm = (math_sign_x_esm_sign2018);


// CONCATENATED MODULE: ./node_modules/to-length-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toInteger2016(value) {
  var number = toNumber2016(value);

  if (is_nan_x_esm(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm(number) === false) {
    return number;
  }

  return sign2016(number) * floor(abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var to_integer_x_esm_toInteger2018 = function toInteger2018(value) {
  var number = to_number_x_esm(value);

  if (is_nan_x_esm(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm(number) === false) {
    return number;
  }

  return math_sign_x_esm(number) * floor(abs(number));
};

/* harmony default export */ var to_integer_x_esm = (to_integer_x_esm_toInteger2018);


// CONCATENATED MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js

var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toLength2016(value) {
  var len = toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var to_length_x_esm_toLength2018 = function toLength2018(value) {
  var len = to_integer_x_esm(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
};

/* harmony default export */ var to_length_x_esm = (to_length_x_esm_toLength2018);


// CONCATENATED MODULE: ./node_modules/to-object-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
var is_nil_x_esm_isNil = function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
};

/* harmony default export */ var dist_is_nil_x_esm = (is_nil_x_esm_isNil);


// CONCATENATED MODULE: ./node_modules/to-object-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

var dist_require_object_coercible_x_esm_requireObjectCoercible = function requireObjectCoercible(value) {
  if (dist_is_nil_x_esm(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
};

/* harmony default export */ var dist_require_object_coercible_x_esm = (dist_require_object_coercible_x_esm_requireObjectCoercible);


// CONCATENATED MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

var to_object_x_esm_toObject = function toObject(value) {
  return castObject(dist_require_object_coercible_x_esm(value));
};

/* harmony default export */ var to_object_x_esm = (to_object_x_esm_toObject);


// CONCATENATED MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
var to_boolean_x_esm_toBoolean = function toBoolean(value) {
  return !!value;
};

/* harmony default export */ var dist_to_boolean_x_esm = (to_boolean_x_esm_toBoolean);


// CONCATENATED MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

var to_string_tag_x_esm_toStringTag = function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return to_string_tag_x_esm_nativeObjectToString.call(value);
};

/* harmony default export */ var dist_to_string_tag_x_esm = (to_string_tag_x_esm_toStringTag);


// CONCATENATED MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var dist_has_symbol_support_x_esm_this = undefined;

function has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var has_symbol_support_x_esm_hasSymbolSupport = attempt_x_esm(function () {
  has_symbol_support_x_esm_newArrowCheck(this, dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var dist_has_symbol_support_x_esm = (has_symbol_support_x_esm_hasSymbolSupport.threw === false && has_symbol_support_x_esm_hasSymbolSupport.value === true);


// CONCATENATED MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var dist_has_to_string_tag_x_esm = (dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var node_modules_is_primitive = __webpack_require__(1);
var node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
var dist_is_nil_x_esm_isNil = function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
};

/* harmony default export */ var is_nil_x_dist_is_nil_x_esm = (dist_is_nil_x_esm_isNil);


// CONCATENATED MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

var require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible = function requireObjectCoercible(value) {
  if (is_nil_x_dist_is_nil_x_esm(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
};

/* harmony default export */ var require_object_coercible_x_dist_require_object_coercible_x_esm = (require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible);


// CONCATENATED MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js

var to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var to_string_x_esm_castString = to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

var dist_to_string_x_esm_ToString = function ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(to_string_x_esm_ERROR_MESSAGE);
  }

  return to_string_x_esm_castString(value);
};

/* harmony default export */ var dist_to_string_x_esm = (dist_to_string_x_esm_ToString);


// CONCATENATED MODULE: ./node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

var dist_require_coercible_to_string_x_esm_requireCoercibleToString = function requireCoercibleToString(value) {
  return dist_to_string_x_esm(require_object_coercible_x_dist_require_object_coercible_x_esm(value));
};

/* harmony default export */ var dist_require_coercible_to_string_x_esm = (dist_require_coercible_to_string_x_esm_requireCoercibleToString);


// CONCATENATED MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var white_space_x_esm_stringES2018 = '';
var dist_white_space_x_esm_length = white_space_x_esm_list.length;

for (var dist_white_space_x_esm_i = 0; dist_white_space_x_esm_i < dist_white_space_x_esm_length; dist_white_space_x_esm_i += 1) {
  if (white_space_x_esm_list[dist_white_space_x_esm_i].es2016) {
    white_space_x_esm_stringES2016 += white_space_x_esm_list[dist_white_space_x_esm_i].string;
  }

  if (white_space_x_esm_list[dist_white_space_x_esm_i].es2018) {
    white_space_x_esm_stringES2018 += white_space_x_esm_list[dist_white_space_x_esm_i].string;
  }
}

var white_space_x_esm_string2018 = white_space_x_esm_stringES2018;
/* harmony default export */ var dist_white_space_x_esm = (white_space_x_esm_string2018);
var white_space_x_esm_string2016 = white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/trim-left-x/dist/trim-left-x.esm.js


var trim_left_x_esm_EMPTY_STRING = '';
var trim_left_x_esm_RegExpCtr = /none/.constructor;
var trim_left_x_esm_reLeft2016 = new trim_left_x_esm_RegExpCtr("^[".concat(white_space_x_esm_string2016, "]+"));
var trim_left_x_esm_reLeft = new trim_left_x_esm_RegExpCtr("^[".concat(dist_white_space_x_esm, "]+"));
var trim_left_x_esm_replace = trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_esm_trimLeft2016(string) {
  return trim_left_x_esm_replace.call(dist_require_coercible_to_string_x_esm(string), trim_left_x_esm_reLeft2016, trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

var dist_trim_left_x_esm_trimLeft2018 = function trimLeft2018(string) {
  return trim_left_x_esm_replace.call(dist_require_coercible_to_string_x_esm(string), trim_left_x_esm_reLeft, trim_left_x_esm_EMPTY_STRING);
};

/* harmony default export */ var dist_trim_left_x_esm = (dist_trim_left_x_esm_trimLeft2018);


// CONCATENATED MODULE: ./node_modules/trim-right-x/dist/trim-right-x.esm.js


var dist_trim_right_x_esm_EMPTY_STRING = '';
var dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var trim_right_x_esm_reRight2016 = new dist_trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm_string2016, "]+$"));
var trim_right_x_esm_reRight2018 = new dist_trim_right_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm, "]+$"));
var dist_trim_right_x_esm_replace = dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_esm_trimRight2016(string) {
  return dist_trim_right_x_esm_replace.call(dist_require_coercible_to_string_x_esm(string), trim_right_x_esm_reRight2016, dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

var dist_trim_right_x_esm_trimRight2018 = function trimRight2018(string) {
  return dist_trim_right_x_esm_replace.call(dist_require_coercible_to_string_x_esm(string), trim_right_x_esm_reRight2018, dist_trim_right_x_esm_EMPTY_STRING);
};

/* harmony default export */ var dist_trim_right_x_esm = (dist_trim_right_x_esm_trimRight2018);


// CONCATENATED MODULE: ./node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_esm_trim2016(string) {
  return trim_left_x_esm_trimLeft2016(trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

var dist_trim_x_esm_trim2018 = function trim2018(string) {
  return dist_trim_left_x_esm(dist_trim_right_x_esm(string));
};

/* harmony default export */ var dist_trim_x_esm = (dist_trim_x_esm_trim2018);


// CONCATENATED MODULE: ./node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var normalize_space_x_esm_SPACE = ' ';
var dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var normalize_space_x_esm_reNormalize2016 = new dist_normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm_string2016, "]+"), 'g');
var normalize_space_x_esm_reNormalize2018 = new dist_normalize_space_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm, "]+"), 'g');
var dist_normalize_space_x_esm_replace = normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalize_space_x_esm_normalizeSpace2016(string) {
  return dist_normalize_space_x_esm_replace.call(trim_x_esm_trim2016(string), normalize_space_x_esm_reNormalize2016, normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

var dist_normalize_space_x_esm_normalizeSpace2018 = function normalizeSpace2018(string) {
  return dist_normalize_space_x_esm_replace.call(dist_trim_x_esm(string), normalize_space_x_esm_reNormalize2018, normalize_space_x_esm_SPACE);
};

/* harmony default export */ var dist_normalize_space_x_esm = (dist_normalize_space_x_esm_normalizeSpace2018);


// CONCATENATED MODULE: ./node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var dist_replace_comments_x_esm_EMPTY_STRING = '';
var replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var dist_replace_comments_x_esm_replace = dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

var dist_replace_comments_x_esm_replaceComments = function replaceComments(string, replacement) {
  return dist_replace_comments_x_esm_replace.call(dist_require_coercible_to_string_x_esm(string), replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? dist_to_string_x_esm(replacement) : dist_replace_comments_x_esm_EMPTY_STRING);
};

/* harmony default export */ var dist_replace_comments_x_esm = (dist_replace_comments_x_esm_replaceComments);


// CONCATENATED MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js
var dist_is_function_x_esm_this = undefined;

function dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }








var is_function_x_esm_FunctionCtr = attempt_x_esm.constructor;
var is_function_x_esm_castBoolean = true.constructor;
var dist_is_function_x_esm_SPACE = ' ';
var is_function_x_esm_fToString = attempt_x_esm.toString;
var is_function_x_esm_funcTag = '[object Function]';
var is_function_x_esm_genTag = '[object GeneratorFunction]';
var is_function_x_esm_asyncTag = '[object AsyncFunction]';
var is_function_x_esm_ctrRx = /^class /;
var is_function_x_esm_test = is_function_x_esm_ctrRx.test;
var is_function_x_esm_hasNativeClass = attempt_x_esm(function () {
  dist_is_function_x_esm_newArrowCheck(this, dist_is_function_x_esm_this);

  /* eslint-disable-next-line babel/new-cap */
  return is_function_x_esm_FunctionCtr('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var is_function_x_esm_testClassstring = function _testClassstring(value) {
  return is_function_x_esm_test.call(is_function_x_esm_ctrRx, dist_normalize_space_x_esm(dist_replace_comments_x_esm(is_function_x_esm_fToString.call(value), dist_is_function_x_esm_SPACE)));
};

var is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt_x_esm(is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (is_function_x_esm_hasNativeClass && allowClass === false && is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_esm.call(value, is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var dist_is_function_x_esm_isFunction = function isFunction(value, allowClass) {
  if (node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (dist_has_to_string_tag_x_esm) {
    return is_function_x_esm_tryFuncToString(value, dist_to_boolean_x_esm(allowClass));
  }

  if (is_function_x_esm_hasNativeClass && is_function_x_esm_castBoolean(allowClass) === false && is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = dist_to_string_tag_x_esm(value);
  return strTag === is_function_x_esm_funcTag || strTag === is_function_x_esm_genTag || strTag === is_function_x_esm_asyncTag;
};

/* harmony default export */ var dist_is_function_x_esm = (dist_is_function_x_esm_isFunction);


// CONCATENATED MODULE: ./node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js


/* eslint-disable-next-line compat/compat */

var pToString = dist_has_symbol_support_x_esm && Symbol.prototype.toString;
var isSymbolFn = typeof pToString === 'function' && is_symbol_default.a;
/** @type {Function} */

var to_string_symbols_supported_x_esm_castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

var toStringSymbolsSupported = function toStringSymbolsSupported(value) {
  return isSymbolFn && isSymbolFn(value) ? pToString.call(value) : to_string_symbols_supported_x_esm_castString(value);
};

/* harmony default export */ var to_string_symbols_supported_x_esm = (toStringSymbolsSupported);


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

var assert_is_function_x_esm_assertIsFunction = function assertIsFunction(callback) {
  if (dist_is_function_x_esm(callback) === false) {
    var msg = node_modules_is_primitive_default()(callback) ? to_string_symbols_supported_x_esm(callback) : '#<Object>';
    throw new TypeError("".concat(msg, " is not a function"));
  }

  return callback;
};

/* harmony default export */ var assert_is_function_x_esm = (assert_is_function_x_esm_assertIsFunction);


// CONCATENATED MODULE: ./node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var has_boxed_string_x_esm_string = 'a';
var boxedString = {}.constructor(has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var hasBoxed = boxedString[0] === has_boxed_string_x_esm_string && 0 in boxedString;
/* harmony default export */ var has_boxed_string_x_esm = (hasBoxed);


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(4);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var split_if_boxed_bug_x_esm_EMPTY_STRING = '';
var strSplit = split_if_boxed_bug_x_esm_EMPTY_STRING.split;
var isStringFn = has_boxed_string_x_esm === false && typeof strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

var splitIfBoxedBug = function splitIfBoxedBug(value) {
  return isStringFn && isStringFn(value) ? strSplit.call(value, split_if_boxed_bug_x_esm_EMPTY_STRING) : value;
};

/* harmony default export */ var split_if_boxed_bug_x_esm = (splitIfBoxedBug);


// CONCATENATED MODULE: ./node_modules/find-last-index-x/dist/find-last-index-x.esm.js




/**
 * Like `findIndex`, this method returns an index in the array, if an element
 * in the array satisfies the provided testing function, except it is peformed
 * in reverse. Otherwise -1 is returned.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If array is `null` or `undefined`-.
 * @param {Function} callback - Function to execute on each value in the array,
 *  taking three arguments: `element`, `index` and `array`.
 * @throws {TypeError} If `callback` is not a function.
 * @param {*} [thisArg] - Object to use as `this` when executing `callback`.
 * @returns {number} Returns index of positively tested element, otherwise -1.
 */

var find_last_index_x_esm_findLastIndex = function findLastIndex(array, callback, thisArg) {
  var object = to_object_x_esm(array);
  assert_is_function_x_esm(callback);
  var iterable = split_if_boxed_bug_x_esm(object);
  var index = to_length_x_esm(iterable.length) - 1;

  if (index < 0) {
    return -1;
  }

  while (index > -1) {
    if (callback.call(thisArg, iterable[index], index, object)) {
      return index;
    }

    index -= 1;
  }

  return -1;
};

/* harmony default export */ var find_last_index_x_esm = (find_last_index_x_esm_findLastIndex);


// CONCATENATED MODULE: ./node_modules/same-value-x/dist/same-value-x.esm.js

/**
 * This method is the comparison abstract operation SameValue(x, y), where x
 * and y are ECMAScript language values, produces true or false.
 *
 * @param {*} [value1] - The first value to compare.
 * @param {*} [value2] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments are
 *  the same value.
 */

var same_value_x_esm_sameValue = function sameValue(value1, value2) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }

  if (value1 === value2) {
    return true;
  }

  return is_nan_x_esm(value1) && is_nan_x_esm(value2);
};

/* harmony default export */ var same_value_x_esm = (same_value_x_esm_sameValue);


// CONCATENATED MODULE: ./node_modules/same-value-zero-x/dist/same-value-zero-x.esm.js

/**
 * This method determines whether two values are the same value.
 * SameValueZero differs from SameValue (`Object.is`) only in its treatment
 * of +0 and -0.
 *
 * @param {*} [x] - The first value to compare.
 * @param {*} [y] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments
 * are the same value.
 */

var same_value_zero_x_esm_sameValueZero = function sameValueZero(x, y) {
  return x === y || same_value_x_esm(x, y);
};

/* harmony default export */ var same_value_zero_x_esm = (same_value_zero_x_esm_sameValueZero);


// CONCATENATED MODULE: ./node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var to_primitive_x_esm_ZERO = 0;
var to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var to_primitive_x_esm_UNDEFINED = void to_primitive_x_esm_ZERO;
var to_primitive_x_esm_NUMBER = 'number';
var to_primitive_x_esm_STRING = 'string';
var to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var to_primitive_x_esm_StringCtr = to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var to_primitive_x_esm_NumberCtr = to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var to_primitive_x_esm_symToPrimitive = dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var to_primitive_x_esm_symValueOf = dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  require_object_coercible_x_dist_require_object_coercible_x_esm(ordinary);

  if (typeof hint !== 'string' || hint !== to_primitive_x_esm_NUMBER && hint !== to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === to_primitive_x_esm_STRING ? to_primitive_x_esm_toStringOrder : to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = to_primitive_x_esm_ZERO; i < to_primitive_x_esm_orderLength; i += to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (dist_is_function_x_esm(method)) {
      result = method.call(ordinary);

      if (node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (is_nil_x_dist_is_nil_x_esm(func) === false) {
    if (dist_is_function_x_esm(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === to_primitive_x_esm_StringCtr) {
      return to_primitive_x_esm_STRING;
    }

    if (value === to_primitive_x_esm_NumberCtr) {
      return to_primitive_x_esm_NUMBER;
    }
  }

  return to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (dist_has_symbol_support_x_esm) {
    if (to_primitive_x_esm_symToPrimitive) {
      return to_primitive_x_esm_getMethod(value, to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return to_primitive_x_esm_symValueOf;
    }
  }

  return to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


var dist_to_primitive_x_esm_toPrimitive = function toPrimitive(input, preferredType) {
  if (node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = to_primitive_x_esm_getHint(preferredType, arguments.length > to_primitive_x_esm_ONE);
  var exoticToPrim = dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? to_primitive_x_esm_STRING : hint;
  return to_primitive_x_esm_ordinaryToPrimitive(input, newHint === to_primitive_x_esm_DEFAULT ? to_primitive_x_esm_NUMBER : newHint);
};

/* harmony default export */ var dist_to_primitive_x_esm = (dist_to_primitive_x_esm_toPrimitive);


// CONCATENATED MODULE: ./node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var dist_nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/parse-int-x/dist/parse-int-x.esm.js



var parse_int_x_esm_nativeParseInt = parseInt;
/**  @type {Function} */

var parse_int_x_esm_castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var parse_int_x_esm_ref = '',
    parse_int_x_esm_charAt = parse_int_x_esm_ref.charAt;
var parse_int_x_esm_hexRegex = /^[-+]?0[xX]/;
var dist_parse_int_x_esm_test = parse_int_x_esm_hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parse_int_x_esm_parseInt2016(string, radix) {
  var str = trim_left_x_esm_trimLeft2016(dist_to_string_x_esm(string));
  return parse_int_x_esm_nativeParseInt(str, parse_int_x_esm_castNumber(radix) || (dist_parse_int_x_esm_test.call(parse_int_x_esm_hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

var dist_parse_int_x_esm_parseInt2018 = function parseInt2018(string, radix) {
  var str = dist_trim_left_x_esm(dist_to_string_x_esm(string));

  if (parse_int_x_esm_charAt.call(str, 0) === "\u180E") {
    return dist_nan_x_esm;
  }

  return parse_int_x_esm_nativeParseInt(str, parse_int_x_esm_castNumber(radix) || (dist_parse_int_x_esm_test.call(parse_int_x_esm_hexRegex, str) ? 16 : 10));
};

/* harmony default export */ var dist_parse_int_x_esm = (dist_parse_int_x_esm_parseInt2018);


// CONCATENATED MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js





var to_number_x_esm_binaryRadix = 2;
var to_number_x_esm_octalRadix = 8;
var to_number_x_esm_testCharsCount = 2;
var dist_to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var dist_to_number_x_esm_castNumber = to_number_x_esm_testCharsCount.constructor;
var to_number_x_esm_pStrSlice = dist_to_number_x_esm_ERROR_MESSAGE.slice;
var to_number_x_esm_binaryRegex = /^0b[01]+$/i;
var to_number_x_esm_RegExpConstructor = to_number_x_esm_binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var dist_to_number_x_esm_test = to_number_x_esm_binaryRegex.test;

var to_number_x_esm_isBinary = function _isBinary(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_binaryRegex, value);
};

var to_number_x_esm_octalRegex = /^0o[0-7]+$/i;

var to_number_x_esm_isOctal = function _isOctal(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_octalRegex, value);
};

var to_number_x_esm_nonWSregex2016 = new to_number_x_esm_RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var to_number_x_esm_hasNonWS2016 = function _hasNonWS(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_nonWSregex2016, value);
};

var to_number_x_esm_nonWSregex2018 = new to_number_x_esm_RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var to_number_x_esm_hasNonWS2018 = function _hasNonWS(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_nonWSregex2018, value);
};

var to_number_x_esm_invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var to_number_x_esm_isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function to_number_x_esm_toNumber2016(argument) {
  var value = dist_to_primitive_x_esm(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (to_number_x_esm_isBinary(value)) {
      return to_number_x_esm_toNumber2016(parse_int_x_esm_parseInt2016(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_binaryRadix));
    }

    if (to_number_x_esm_isOctal(value)) {
      return to_number_x_esm_toNumber2016(parse_int_x_esm_parseInt2016(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_octalRadix));
    }

    if (to_number_x_esm_hasNonWS2016(value) || to_number_x_esm_isInvalidHexLiteral(value)) {
      return dist_nan_x_esm;
    }

    var trimmed = trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return to_number_x_esm_toNumber2016(trimmed);
    }
  }

  return dist_to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

var dist_to_number_x_esm_toNumber2018 = function toNumber2018(argument) {
  var value = dist_to_primitive_x_esm(argument, dist_to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (to_number_x_esm_isBinary(value)) {
      return toNumber2018(dist_parse_int_x_esm(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_binaryRadix));
    }

    if (to_number_x_esm_isOctal(value)) {
      return toNumber2018(dist_parse_int_x_esm(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_octalRadix));
    }

    if (to_number_x_esm_hasNonWS2018(value) || to_number_x_esm_isInvalidHexLiteral(value)) {
      return dist_nan_x_esm;
    }

    var trimmed = dist_trim_x_esm(value);

    if (trimmed !== value) {
      return toNumber2018(trimmed);
    }
  }

  return dist_to_number_x_esm_castNumber(value);
};

/* harmony default export */ var dist_to_number_x_esm = (dist_to_number_x_esm_toNumber2018);


// CONCATENATED MODULE: ./node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var dist_infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

var dist_is_finite_x_esm_isFinite = function isFinite(number) {
  return typeof number === 'number' && is_nan_x_esm(number) === false && number !== dist_infinity_x_esm && number !== -dist_infinity_x_esm;
};

/* harmony default export */ var dist_is_finite_x_esm = (dist_is_finite_x_esm_isFinite);


// CONCATENATED MODULE: ./node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function math_sign_x_esm_sign2016(x) {
  var n = to_number_x_esm_toNumber2016(x);

  if (n === 0 || is_nan_x_esm(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

var dist_math_sign_x_esm_sign2018 = function sign2018(x) {
  var n = dist_to_number_x_esm(x);

  if (n === 0 || is_nan_x_esm(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

/* harmony default export */ var dist_math_sign_x_esm = (dist_math_sign_x_esm_sign2018);


// CONCATENATED MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js




var to_integer_x_esm_abs = Math.abs,
    to_integer_x_esm_floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_integer_x_esm_toInteger2016(value) {
  var number = to_number_x_esm_toNumber2016(value);

  if (is_nan_x_esm(number)) {
    return 0;
  }

  if (number === 0 || dist_is_finite_x_esm(number) === false) {
    return number;
  }

  return math_sign_x_esm_sign2016(number) * to_integer_x_esm_floor(to_integer_x_esm_abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var dist_to_integer_x_esm_toInteger2018 = function toInteger2018(value) {
  var number = dist_to_number_x_esm(value);

  if (is_nan_x_esm(number)) {
    return 0;
  }

  if (number === 0 || dist_is_finite_x_esm(number) === false) {
    return number;
  }

  return dist_math_sign_x_esm(number) * to_integer_x_esm_floor(to_integer_x_esm_abs(number));
};

/* harmony default export */ var dist_to_integer_x_esm = (dist_to_integer_x_esm_toInteger2018);


// CONCATENATED MODULE: ./node_modules/is-integer-x/dist/is-integer-x.esm.js


/**
 * This method determines whether the passed value is an integer.
 *
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is an integer.
 */

var is_integer_x_esm_isInteger = function isInteger(value) {
  return dist_is_finite_x_esm(value) && dist_to_integer_x_esm(value) === value;
};

/* harmony default export */ var is_integer_x_esm = (is_integer_x_esm_isInteger);


// CONCATENATED MODULE: ./node_modules/is-safe-integer-x/dist/is-safe-integer-x.esm.js

var is_safe_integer_x_esm_MAX_SAFE_INTEGER = 9007199254740991;
var MIN_SAFE_INTEGER = -is_safe_integer_x_esm_MAX_SAFE_INTEGER;
/**
 * This method determines whether the passed value is a safe integer.
 *
 * Can be exactly represented as an IEEE-754 double precision number, and
 * whose IEEE-754 representation cannot be the result of rounding any other
 * integer to fit the IEEE-754 representation.
 *
 * @param {*} value - The value to be tested for being a safe integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 *  safe integer.
 */

var is_safe_integer_x_esm_isSafeInteger = function isSafeInteger(value) {
  return is_integer_x_esm(value) && value >= MIN_SAFE_INTEGER && value <= is_safe_integer_x_esm_MAX_SAFE_INTEGER;
};

/* harmony default export */ var is_safe_integer_x_esm = (is_safe_integer_x_esm_isSafeInteger);


// CONCATENATED MODULE: ./node_modules/is-length-x/dist/is-length-x.esm.js

/**
 * This method checks if `value` is a valid array-like length.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */

var is_length_x_esm_isLength = function isLength(value) {
  return is_safe_integer_x_esm(value) && value >= 0;
};

/* harmony default export */ var is_length_x_esm = (is_length_x_esm_isLength);


// CONCATENATED MODULE: ./node_modules/is-array-like-x/dist/is-array-like-x.esm.js



/**
 * Checks if value is array-like. A value is considered array-like if it's
 * not a function and has a `length` that's an integer greater than or
 * equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @param {*} value - The object to be tested.
 */

var is_array_like_x_esm_isArrayLike = function isArrayLike(value) {
  return is_nil_x_dist_is_nil_x_esm(value) === false && dist_is_function_x_esm(value, true) === false && is_length_x_esm(value.length);
};

/* harmony default export */ var is_array_like_x_esm = (is_array_like_x_esm_isArrayLike);


// CONCATENATED MODULE: ./node_modules/calculate-from-index-right-x/dist/calculate-from-index-right-x.esm.js





var getMin = function _getMin(a, b) {
  return a <= b ? a : b;
};
/**
 * This method calculates a fromIndexRight of a given value for an array.
 *
 * @param {Array} array - The array on which to calculate the starting index.
 * @throws {TypeError} If array is null or undefined.
 * @param {number} fromIndex - The position in this array at which to begin. A
 *  negative value gives the index of array.length + fromIndex by asc.
 * @returns {number} The calculated fromIndex. Default is 0.
 */


var calculate_from_index_right_x_esm_calcFromIndexRight = function calcFromIndexRight(array, fromIndex) {
  var object = to_object_x_esm(array);

  if (is_array_like_x_esm(object) === false) {
    return 0;
  }

  var length = to_length_x_esm(object.length);
  var index = getMin(dist_to_integer_x_esm(fromIndex), length - 1);
  return index >= 0 ? index : length + index;
};

/* harmony default export */ var calculate_from_index_right_x_esm = (calculate_from_index_right_x_esm_calcFromIndexRight);


// CONCATENATED MODULE: ./dist/last-index-of-x.esm.js
function last_index_of_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }











var pLastIndexOf = typeof Array.prototype.lastIndexOf === 'function' && Array.prototype.lastIndexOf;
var isWorking;

if (pLastIndexOf) {
  var res = attempt_x_esm.call([0, 1], pLastIndexOf, 0, -3);
  isWorking = res.threw === false && res.value === -1;

  if (isWorking) {
    res = attempt_x_esm.call([0, 1, 0], pLastIndexOf, 0);
    isWorking = res.threw === false && res.value === 2;
  }

  if (isWorking) {
    res = attempt_x_esm.call([0, -0], pLastIndexOf, 0);
    isWorking = res.threw === false && res.value === 1;
  }

  if (isWorking) {
    var testArr = [];
    testArr.length = 2;
    /* eslint-disable-next-line no-void */

    testArr[0] = void 0;
    /* eslint-disable-next-line no-void */

    res = attempt_x_esm.call(testArr, pLastIndexOf, void 0);
    isWorking = res.threw === false && res.value === 0;
  }

  if (isWorking) {
    res = attempt_x_esm.call('abc', pLastIndexOf, 'c');
    isWorking = res.threw === false && res.value === 2;
  }

  if (isWorking) {
    res = attempt_x_esm.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }('a', 'b', 'c'), pLastIndexOf, 'c');
    isWorking = res.threw === false && res.value === 2;
  }
}

if (isWorking !== true) {
  pLastIndexOf = function lastIndexOf(searchElement) {
    /* eslint-disable-next-line babel/no-invalid-this */
    var length = to_length_x_esm(this.length);

    if (length < 1) {
      return -1;
    }
    /* eslint-disable-next-line prefer-rest-params */


    var i = arguments[1];

    while (i >= 0) {
      /* eslint-disable-next-line babel/no-invalid-this */
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


var findLastIdxFrom = function findLastIndexFrom(array, searchElement, fromIndex, extendFn) {
  var fIdx = fromIndex;

  while (fIdx >= 0) {
    if (fIdx in array && extendFn(array[fIdx], searchElement)) {
      return fIdx;
    }

    fIdx -= 1;
  }

  return -1;
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


var last_index_of_x_esm_lastIndexOf = function lastIndexOf(array, searchElement) {
  var _this = this;

  var object = to_object_x_esm(array);
  var iterable = split_if_boxed_bug_x_esm(object);
  var length = to_length_x_esm(iterable.length);

  if (length < 1) {
    return -1;
  }

  var argLength = arguments.length;
  /* eslint-disable-next-line prefer-rest-params */

  var extend = argLength > 2 && argLength > 3 ? arguments[3] : arguments[2];
  var extendFn;

  if (is_string_default()(extend)) {
    extend = extend.toLowerCase();

    if (extend === 'samevalue') {
      extendFn = same_value_x_esm;
    } else if (extend === 'samevaluezero') {
      extendFn = same_value_zero_x_esm;
    }
  }

  var fromIndex = length - 1;

  if (extendFn && (searchElement === 0 || is_nan_x_esm(searchElement))) {
    if (argLength > 3) {
      /* eslint-disable-next-line prefer-rest-params */
      fromIndex = calculate_from_index_right_x_esm(iterable, arguments[2]);

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

    return find_last_index_x_esm(iterable, function (element, index) {
      last_index_of_x_esm_newArrowCheck(this, _this);

      return index in iterable && extendFn(searchElement, element);
    }.bind(this));
  }

  if (argLength > 3 || argLength > 2 && Boolean(extendFn) === false) {
    /* eslint-disable-next-line prefer-rest-params */
    fromIndex = calculate_from_index_right_x_esm(iterable, arguments[2]);

    if (fromIndex < 0) {
      return -1;
    }

    if (fromIndex >= length) {
      fromIndex = length - 1;
    }
  }

  return pLastIndexOf.call(iterable, searchElement, fromIndex);
};

/* harmony default export */ var last_index_of_x_esm = __webpack_exports__["default"] = (last_index_of_x_esm_lastIndexOf);



/***/ })
/******/ ]);
});
//# sourceMappingURL=last-index-of-x.js.map