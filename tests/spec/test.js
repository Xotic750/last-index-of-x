'use strict';

// IE 6 - 8 have a bug where this returns false.
var canDistinguish = 0 in [undefined];
var ifHasDenseUndefinedsIt = canDistinguish ? it : xit;
var undefinedIfNoSparseBug = canDistinguish ? undefined : {
  valueOf: function () {
    return 0;
  }
};
var lastIndexOf;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  lastIndexOf = require('../../index.js');
} else {
  lastIndexOf = returnExports;
}

describe('lastIndexOf', function () {
  var testSubject;

  beforeEach(function () {
    testSubject = [
      NaN,
      2,
      3,
      undefinedIfNoSparseBug,
      true,
      'hej',
      null,
      2,
      3,
      false,
      0,
      -0
    ];
    delete testSubject[2];
    delete testSubject[8];
  });

  describe('Array', function () {
    it('should find the element', function () {
      var expected = 5;
      var actual = lastIndexOf(testSubject, 'hej');
      expect(actual).toBe(expected);
    });

    it('should not find the element', function () {
      var expected = -1;
      var actual = lastIndexOf(testSubject, 'mus');
      expect(actual).toBe(expected);

      expected = -1;
      actual = lastIndexOf(testSubject, NaN);
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well', function () {
      var expected = -1;
      var actual = lastIndexOf(testSubject, undefined);
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes', function () {
      var expected = 3;
      var actual = lastIndexOf(testSubject, undefined);
      expect(actual).toBe(expected);
    });

    it('should use a strict test', function () {
      var actual = lastIndexOf(testSubject, null);
      expect(actual).toBe(6);

      actual = lastIndexOf(testSubject, '2');
      expect(actual).toBe(-1);

      actual = lastIndexOf(testSubject, 0);
      expect(actual).toBe(11);
    });

    it('should skip the first if fromIndex is set', function () {
      expect(lastIndexOf(testSubject, 2, 2)).toBe(1);
      expect(lastIndexOf(testSubject, 2, 2)).toBe(1);
      expect(lastIndexOf(testSubject, 2, 7)).toBe(7);
    });

    it('should work with negative fromIndex', function () {
      expect(lastIndexOf(testSubject, 2, -3)).toBe(7);
      expect(lastIndexOf(testSubject, 2, -9)).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function () {
      expect(lastIndexOf(testSubject, 2, 20)).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function () {
      expect(lastIndexOf(testSubject, 2, -20)).toBe(-1);
    });
  });

  describe('Array like', function () {
    var testAL;

    beforeEach(function () {
      testAL = {};
      testSubject.forEach(function (o, i) {
        testAL[i] = o;
      });
      testAL.length = testSubject.length;
    });

    it('should find the element (array-like)', function () {
      var expected = 5;
      var actual = lastIndexOf(testAL, 'hej');
      expect(actual).toBe(expected);
    });

    it('should not find the element (array-like)', function () {
      var expected = -1;
      var actual = lastIndexOf(testAL, 'mus');
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well (array-like)', function () {
      var expected = -1;
      var actual = lastIndexOf(testAL, undefined);
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes (array-like)', function () {
      var expected = 3;
      var actual = lastIndexOf(testAL, undefined);
      expect(actual).toBe(expected);
    });

    it('should use a strict test (array-like)', function () {
      var actual = lastIndexOf(testAL, null);
      expect(actual).toBe(6);

      actual = lastIndexOf(testAL, '2');
      expect(actual).toBe(-1);
    });

    it('should skip the first if fromIndex is set', function () {
      expect(lastIndexOf(testAL, 2, 2)).toBe(1);
      expect(lastIndexOf(testAL, 2, 1)).toBe(1);
      expect(lastIndexOf(testAL, 2, 7)).toBe(7);
    });

    it('should work with negative fromIndex', function () {
      expect(lastIndexOf(testAL, 2, -3)).toBe(7);
      expect(lastIndexOf(testAL, 2, -9)).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function () {
      expect(lastIndexOf(testAL, 2, 20)).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function () {
      expect(lastIndexOf(testAL, 2, -20)).toBe(-1);
    });
  });
});

describe('lastIndexOf: SameValueZero', function () {
  var testSubject;

  beforeEach(function () {
    testSubject = [
      NaN,
      2,
      3,
      undefinedIfNoSparseBug,
      true,
      'hej',
      null,
      2,
      3,
      false,
      0,
      -0
    ];
    delete testSubject[2];
    delete testSubject[8];
  });

  describe('Array', function () {
    it('should find the element', function () {
      var expected = 5;
      var actual = lastIndexOf(testSubject, 'hej', 'SameValueZero');
      expect(actual).toBe(expected);
    });

    it('should not find the element', function () {
      var expected = -1;
      var actual = lastIndexOf(testSubject, 'mus', 'SameValueZero');
      expect(actual).toBe(expected);

      expected = 0;
      actual = lastIndexOf(testSubject, NaN, 'SameValueZero');
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well', function () {
      var expected = -1;
      var actual = lastIndexOf(testSubject, undefined, 'SameValueZero');
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes', function () {
      var expected = 3;
      var actual = lastIndexOf(testSubject, undefined, 'SameValueZero');
      expect(actual).toBe(expected);
    });

    it('should use a strict test', function () {
      var actual = lastIndexOf(testSubject, null, 'SameValueZero');
      expect(actual).toBe(6);

      actual = lastIndexOf(testSubject, '2', 'SameValueZero');
      expect(actual).toBe(-1);

      actual = lastIndexOf(testSubject, 0, 'SameValueZero');
      expect(actual).toBe(11);
    });

    it('should skip the first if fromIndex is set', function () {
      expect(lastIndexOf(testSubject, 2, 2, 'SameValueZero')).toBe(1);
      expect(lastIndexOf(testSubject, 2, 2, 'SameValueZero')).toBe(1);
      expect(lastIndexOf(testSubject, 2, 7, 'SameValueZero')).toBe(7);
    });

    it('should work with negative fromIndex', function () {
      expect(lastIndexOf(testSubject, 2, -3, 'SameValueZero')).toBe(7);
      expect(lastIndexOf(testSubject, 2, -9, 'SameValueZero')).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function () {
      expect(lastIndexOf(testSubject, 2, 20, 'SameValueZero')).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function () {
      expect(lastIndexOf(testSubject, 2, -20, 'SameValueZero')).toBe(-1);
    });
  });

  describe('Array like', function () {
    var testAL;

    beforeEach(function () {
      testAL = {};
      testSubject.forEach(function (o, i) {
        testAL[i] = o;
      });
      testAL.length = testSubject.length;
    });

    it('should find the element (array-like)', function () {
      var expected = 5;
      var actual = lastIndexOf(testAL, 'hej', 'SameValueZero');
      expect(actual).toBe(expected);
    });

    it('should not find the element (array-like)', function () {
      var expected = -1;
      var actual = lastIndexOf(testAL, 'mus', 'SameValueZero');
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well (array-like)', function () {
      var expected = -1;
      var actual = lastIndexOf(testAL, undefined, 'SameValueZero');
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes (array-like)', function () {
      var expected = 3;
      var actual = lastIndexOf(testAL, undefined, 'SameValueZero');
      expect(actual).toBe(expected);
    });

    it('should use a strict test (array-like)', function () {
      var actual = lastIndexOf(testAL, null, 'SameValueZero');
      expect(actual).toBe(6);

      actual = lastIndexOf(testAL, '2', 'SameValueZero');
      expect(actual).toBe(-1);
    });

    it('should skip the first if fromIndex is set', function () {
      expect(lastIndexOf(testAL, 2, 2, 'SameValueZero')).toBe(1);
      expect(lastIndexOf(testAL, 2, 1, 'SameValueZero')).toBe(1);
      expect(lastIndexOf(testAL, 2, 7, 'SameValueZero')).toBe(7);
    });

    it('should work with negative fromIndex', function () {
      expect(lastIndexOf(testAL, 2, -3, 'SameValueZero')).toBe(7);
      expect(lastIndexOf(testAL, 2, -9, 'SameValueZero')).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function () {
      expect(lastIndexOf(testAL, 2, 20, 'SameValueZero')).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function () {
      expect(lastIndexOf(testAL, 2, -20, 'SameValueZero')).toBe(-1);
    });
  });
});

describe('lastIndexOf: SameValue', function () {
  var testSubject;

  beforeEach(function () {
    testSubject = [
      NaN,
      2,
      3,
      undefinedIfNoSparseBug,
      true,
      'hej',
      null,
      2,
      3,
      false,
      0,
      -0
    ];
    delete testSubject[2];
    delete testSubject[8];
  });

  describe('Array', function () {
    it('should find the element', function () {
      var expected = 5;
      var actual = lastIndexOf(testSubject, 'hej', 'SameValue');
      expect(actual).toBe(expected);
    });

    it('should not find the element', function () {
      var expected = -1;
      var actual = lastIndexOf(testSubject, 'mus', 'SameValue');
      expect(actual).toBe(expected);

      expected = 0;
      actual = lastIndexOf(testSubject, NaN, 'SameValue');
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well', function () {
      var expected = -1;
      var actual = lastIndexOf(testSubject, undefined, 'SameValue');
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes', function () {
      var expected = 3;
      var actual = lastIndexOf(testSubject, undefined, 'SameValue');
      expect(actual).toBe(expected);
    });

    it('should use a strict test', function () {
      var actual = lastIndexOf(testSubject, null, 'SameValue');
      expect(actual).toBe(6);

      actual = lastIndexOf(testSubject, '2', 'SameValue');
      expect(actual).toBe(-1);

      actual = lastIndexOf(testSubject, 0, 'SameValue');
      expect(actual).toBe(10);
    });

    it('should skip the first if fromIndex is set', function () {
      expect(lastIndexOf(testSubject, 2, 2, 'SameValue')).toBe(1);
      expect(lastIndexOf(testSubject, 2, 2, 'SameValue')).toBe(1);
      expect(lastIndexOf(testSubject, 2, 7, 'SameValue')).toBe(7);
    });

    it('should work with negative fromIndex', function () {
      expect(lastIndexOf(testSubject, 2, -3, 'SameValue')).toBe(7);
      expect(lastIndexOf(testSubject, 2, -9, 'SameValue')).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function () {
      expect(lastIndexOf(testSubject, 2, 20, 'SameValue')).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function () {
      expect(lastIndexOf(testSubject, 2, -20, 'SameValue')).toBe(-1);
    });
  });

  describe('Array like', function () {
    var testAL;

    beforeEach(function () {
      testAL = {};
      testSubject.forEach(function (o, i) {
        testAL[i] = o;
      });
      testAL.length = testSubject.length;
    });

    it('should find the element (array-like)', function () {
      var expected = 5;
      var actual = lastIndexOf(testAL, 'hej', 'SameValue');
      expect(actual).toBe(expected);
    });

    it('should not find the element (array-like)', function () {
      var expected = -1;
      var actual = lastIndexOf(testAL, 'mus', 'SameValue');
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well (array-like)', function () {
      var expected = -1;
      var actual = lastIndexOf(testAL, undefined, 'SameValue');
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes (array-like)', function () {
      var expected = 3;
      var actual = lastIndexOf(testAL, undefined, 'SameValue');
      expect(actual).toBe(expected);
    });

    it('should use a strict test (array-like)', function () {
      var actual = lastIndexOf(testAL, null, 'SameValue');
      expect(actual).toBe(6);

      actual = lastIndexOf(testAL, '2', 'SameValue');
      expect(actual).toBe(-1);
    });

    it('should skip the first if fromIndex is set', function () {
      expect(lastIndexOf(testAL, 2, 2, 'SameValue')).toBe(1);
      expect(lastIndexOf(testAL, 2, 1, 'SameValue')).toBe(1);
      expect(lastIndexOf(testAL, 2, 7, 'SameValue')).toBe(7);
    });

    it('should work with negative fromIndex', function () {
      expect(lastIndexOf(testAL, 2, -3, 'SameValue')).toBe(7);
      expect(lastIndexOf(testAL, 2, -9, 'SameValue')).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function () {
      expect(lastIndexOf(testAL, 2, 20, 'SameValue')).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function () {
      expect(lastIndexOf(testAL, 2, -20, 'SameValue')).toBe(-1);
    });
  });
});
