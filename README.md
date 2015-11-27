<a name="module_last-index-of-x"></a>
## last-index-of-x
<a href="https://travis-ci.org/Xotic750/last-index-of-x"
title="Travis status">
<img src="https://travis-ci.org/Xotic750/last-index-of-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/last-index-of-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/last-index-of-x.svg"
alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/last-index-of-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/last-index-of-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/last-index-of-x" title="npm version">
<img src="https://badge.fury.io/js/last-index-of-x.svg"
alt="npm version" height="18">
</a>

An extended ES6 lastIndexOf module.

**Version**: 1.0.0  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_last-index-of-x--module.exports"></a>
### `module.exports(array, searchElement, [fromIndex], [extend])` ⇒ <code>number</code> ⏏
This method returns the last index at which a given element
can be found in the array, or -1 if it is not present.
The array is searched backwards, starting at fromIndex.

**Kind**: Exported function  
**Returns**: <code>number</code> - Returns index of found element, otherwise -1.  
**Throws**:

- <code>TypeError</code> If `array` is `null` or `undefined`.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to search. |
| searchElement | <code>\*</code> | Element to locate in the `array`. |
| [fromIndex] | <code>number</code> | The index at which to start searching  backwards. Defaults to the array's length minus one, i.e. the whole array  will be searched. If the index is greater than or equal to the length of  the array, the whole array will be searched. If negative, it is taken as  the offset from the end of the array. Note that even when the index is  negative, the array is still searched from back to front. If the  calculated index is less than 0, -1 is returned, i.e. the array will not  be searched |
| [extend] | <code>string</code> | Extension type: `SameValue` or `SameValueZero`. |

**Example**  
```js
var lastIndexOf = require('last-index-of-x');
var subject = [2, 3, undefined, true, 'hej', null, 2, false, 0, -0, NaN];

// Standard mode, operates just like `Array.prototype.lastIndexOf`.
lastIndexOf(subject, null); // 5
lastIndexOf(testSubject, '2'); // -1
lastIndexOf(testSubject, NaN); // -1
lastIndexOf(testSubject, -0); // 8
lastIndexOf(testSubject, 2, 2); //6

// `SameValueZero` mode extends `lastIndexOf` to match `NaN`.
lastIndexOf(subject, null, 'SameValueZero'); // 5
lastIndexOf(testSubject, '2', 'SameValueZero'); // -1
lastIndexOf(testSubject, NaN, 'SameValueZero'); // 10
lastIndexOf(testSubject, -0, 'SameValueZero'); // 8
lastIndexOf(testSubject, 2, 2, 'SameValueZero'); //6

// `SameValue` mode extends `lastIndexOf` to match `NaN` and signed `0`.
lastIndexOf(subject, null, 'SameValue'); // 5
lastIndexOf(testSubject, '2', 'SameValue'); // -1
lastIndexOf(testSubject, NaN, 'SameValue'); // 10
lastIndexOf(testSubject, -0, 'SameValue'); // 9
lastIndexOf(testSubject, 2, 2, 'SameValue'); //6
```
