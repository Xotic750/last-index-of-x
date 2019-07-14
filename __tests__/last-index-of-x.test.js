let lastIndexOf;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });

  lastIndexOf = require('../../index.js');
} else {
  lastIndexOf = returnExports;
}

const itHasDoc = typeof document !== 'undefined' && document ? it : xit;

// IE 6 - 8 have a bug where this returns false.
const canDistinguish = 0 in [undefined];
const ifHasDenseUndefinedsIt = canDistinguish ? it : xit;
const undefinedIfNoSparseBug = canDistinguish
  ? undefined
  : {
      valueOf() {
        return 0;
      },
    };

describe('lastIndexOf', function() {
  let testSubject;

  beforeEach(function() {
    testSubject = [NaN, 2, 3, undefinedIfNoSparseBug, true, 'hej', null, 2, 3, false, 0, -0];
    delete testSubject[2];
    delete testSubject[8];
  });

  describe('array', function() {
    it('should find the element', function() {
      const expected = 5;
      const actual = lastIndexOf(testSubject, 'hej');
      expect(actual).toBe(expected);
    });

    it('should not find the element', function() {
      let expected = -1;
      let actual = lastIndexOf(testSubject, 'mus');
      expect(actual).toBe(expected);

      expected = -1;
      actual = lastIndexOf(testSubject, NaN);
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well', function() {
      const expected = -1;
      const actual = lastIndexOf(testSubject, undefined);
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes', function() {
      const expected = 3;
      const actual = lastIndexOf(testSubject, undefined);
      expect(actual).toBe(expected);
    });

    it('should use a strict test', function() {
      let actual = lastIndexOf(testSubject, null);
      expect(actual).toBe(6);

      actual = lastIndexOf(testSubject, '2');
      expect(actual).toBe(-1);

      actual = lastIndexOf(testSubject, 0);
      expect(actual).toBe(11);
    });

    it('should skip the first if fromIndex is set', function() {
      expect(lastIndexOf(testSubject, 2, 2)).toBe(1);
      expect(lastIndexOf(testSubject, 2, 2)).toBe(1);
      expect(lastIndexOf(testSubject, 2, 7)).toBe(7);
    });

    it('should work with negative fromIndex', function() {
      expect(lastIndexOf(testSubject, 2, -3)).toBe(7);
      expect(lastIndexOf(testSubject, 2, -9)).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function() {
      expect(lastIndexOf(testSubject, 2, 20)).toBe(7);
      expect(lastIndexOf(testSubject, 2, Infinity)).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function() {
      expect(lastIndexOf(testSubject, 2, -20)).toBe(-1);
      expect(lastIndexOf(testSubject, 2, -Infinity)).toBe(-1);
    });

    it('should work with strings', function() {
      expect(lastIndexOf('abc', 'b')).toBe(1);
    });

    it('should work with arguments', function() {
      const obj = (function() {
        return arguments;
      })('a', 'b', 'c');

      expect(lastIndexOf(obj, 'b')).toBe(1);
    });

    itHasDoc('should work wih DOM elements', function() {
      const fragment = document.createDocumentFragment();
      const div = document.createElement('div');
      fragment.appendChild(div);
      expect(lastIndexOf(fragment.childNodes, div)).toBe(0);
    });
  });

  describe('array like', function() {
    let testAL;

    beforeEach(function() {
      testAL = {};
      testSubject.forEach(function(o, i) {
        testAL[i] = o;
      });
      testAL.length = testSubject.length;
    });

    it('should find the element (array-like)', function() {
      const expected = 5;
      const actual = lastIndexOf(testAL, 'hej');
      expect(actual).toBe(expected);
    });

    it('should not find the element (array-like)', function() {
      const expected = -1;
      const actual = lastIndexOf(testAL, 'mus');
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well (array-like)', function() {
      const expected = -1;
      const actual = lastIndexOf(testAL, undefined);
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes (array-like)', function() {
      const expected = 3;
      const actual = lastIndexOf(testAL, undefined);
      expect(actual).toBe(expected);
    });

    it('should use a strict test (array-like)', function() {
      let actual = lastIndexOf(testAL, null);
      expect(actual).toBe(6);

      actual = lastIndexOf(testAL, '2');
      expect(actual).toBe(-1);
    });

    it('should skip the first if fromIndex is set', function() {
      expect(lastIndexOf(testAL, 2, 2)).toBe(1);
      expect(lastIndexOf(testAL, 2, 1)).toBe(1);
      expect(lastIndexOf(testAL, 2, 7)).toBe(7);
    });

    it('should work with negative fromIndex', function() {
      expect(lastIndexOf(testAL, 2, -3)).toBe(7);
      expect(lastIndexOf(testAL, 2, -9)).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function() {
      expect(lastIndexOf(testAL, 2, 20)).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function() {
      expect(lastIndexOf(testAL, 2, -20)).toBe(-1);
    });
  });
});

describe('lastIndexOf: SameValueZero', function() {
  let testSubject;

  beforeEach(function() {
    testSubject = [NaN, 2, 3, undefinedIfNoSparseBug, true, 'hej', null, 2, 3, false, 0, -0];
    delete testSubject[2];
    delete testSubject[8];
  });

  describe('array', function() {
    it('should find the element', function() {
      const expected = 5;
      const actual = lastIndexOf(testSubject, 'hej', 'SameValueZero');
      expect(actual).toBe(expected);
    });

    it('should not find the element', function() {
      let expected = -1;
      let actual = lastIndexOf(testSubject, 'mus', 'SameValueZero');
      expect(actual).toBe(expected);

      expected = 0;
      actual = lastIndexOf(testSubject, NaN, 'SameValueZero');
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well', function() {
      const expected = -1;
      const actual = lastIndexOf(testSubject, undefined, 'SameValueZero');
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes', function() {
      const expected = 3;
      const actual = lastIndexOf(testSubject, undefined, 'SameValueZero');
      expect(actual).toBe(expected);
    });

    it('should use a strict test', function() {
      let actual = lastIndexOf(testSubject, null, 'SameValueZero');
      expect(actual).toBe(6);

      actual = lastIndexOf(testSubject, '2', 'SameValueZero');
      expect(actual).toBe(-1);

      actual = lastIndexOf(testSubject, 0, 'SameValueZero');
      expect(actual).toBe(11);
    });

    it('should skip the first if fromIndex is set', function() {
      expect(lastIndexOf(testSubject, 2, 2, 'SameValueZero')).toBe(1);
      expect(lastIndexOf(testSubject, 2, 2, 'SameValueZero')).toBe(1);
      expect(lastIndexOf(testSubject, 2, 7, 'SameValueZero')).toBe(7);
    });

    it('should work with negative fromIndex', function() {
      expect(lastIndexOf(testSubject, 2, -3, 'SameValueZero')).toBe(7);
      expect(lastIndexOf(testSubject, 2, -9, 'SameValueZero')).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function() {
      expect(lastIndexOf(testSubject, 2, 20, 'SameValueZero')).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function() {
      expect(lastIndexOf(testSubject, 2, -20, 'SameValueZero')).toBe(-1);
    });
  });

  describe('array like', function() {
    let testAL;

    beforeEach(function() {
      testAL = {};
      testSubject.forEach(function(o, i) {
        testAL[i] = o;
      });
      testAL.length = testSubject.length;
    });

    it('should find the element (array-like)', function() {
      const expected = 5;
      const actual = lastIndexOf(testAL, 'hej', 'SameValueZero');
      expect(actual).toBe(expected);
    });

    it('should not find the element (array-like)', function() {
      const expected = -1;
      const actual = lastIndexOf(testAL, 'mus', 'SameValueZero');
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well (array-like)', function() {
      const expected = -1;
      const actual = lastIndexOf(testAL, undefined, 'SameValueZero');
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes (array-like)', function() {
      const expected = 3;
      const actual = lastIndexOf(testAL, undefined, 'SameValueZero');
      expect(actual).toBe(expected);
    });

    it('should use a strict test (array-like)', function() {
      let actual = lastIndexOf(testAL, null, 'SameValueZero');
      expect(actual).toBe(6);

      actual = lastIndexOf(testAL, '2', 'SameValueZero');
      expect(actual).toBe(-1);
    });

    it('should skip the first if fromIndex is set', function() {
      expect(lastIndexOf(testAL, 2, 2, 'SameValueZero')).toBe(1);
      expect(lastIndexOf(testAL, 2, 1, 'SameValueZero')).toBe(1);
      expect(lastIndexOf(testAL, 2, 7, 'SameValueZero')).toBe(7);
    });

    it('should work with negative fromIndex', function() {
      expect(lastIndexOf(testAL, 2, -3, 'SameValueZero')).toBe(7);
      expect(lastIndexOf(testAL, 2, -9, 'SameValueZero')).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function() {
      expect(lastIndexOf(testAL, 2, 20, 'SameValueZero')).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function() {
      expect(lastIndexOf(testAL, 2, -20, 'SameValueZero')).toBe(-1);
    });
  });
});

describe('lastIndexOf: SameValue', function() {
  let testSubject;

  beforeEach(function() {
    testSubject = [NaN, 2, 3, undefinedIfNoSparseBug, true, 'hej', null, 2, 3, false, 0, -0];
    delete testSubject[2];
    delete testSubject[8];
  });

  describe('array', function() {
    it('should find the element', function() {
      const expected = 5;
      const actual = lastIndexOf(testSubject, 'hej', 'SameValue');
      expect(actual).toBe(expected);
    });

    it('should not find the element', function() {
      let expected = -1;
      let actual = lastIndexOf(testSubject, 'mus', 'SameValue');
      expect(actual).toBe(expected);

      expected = 0;
      actual = lastIndexOf(testSubject, NaN, 'SameValue');
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well', function() {
      const expected = -1;
      const actual = lastIndexOf(testSubject, undefined, 'SameValue');
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes', function() {
      const expected = 3;
      const actual = lastIndexOf(testSubject, undefined, 'SameValue');
      expect(actual).toBe(expected);
    });

    it('should use a strict test', function() {
      let actual = lastIndexOf(testSubject, null, 'SameValue');
      expect(actual).toBe(6);

      actual = lastIndexOf(testSubject, '2', 'SameValue');
      expect(actual).toBe(-1);

      actual = lastIndexOf(testSubject, 0, 'SameValue');
      expect(actual).toBe(10);
    });

    it('should skip the first if fromIndex is set', function() {
      expect(lastIndexOf(testSubject, 2, 2, 'SameValue')).toBe(1);
      expect(lastIndexOf(testSubject, 2, 2, 'SameValue')).toBe(1);
      expect(lastIndexOf(testSubject, 2, 7, 'SameValue')).toBe(7);
    });

    it('should work with negative fromIndex', function() {
      expect(lastIndexOf(testSubject, 2, -3, 'SameValue')).toBe(7);
      expect(lastIndexOf(testSubject, 2, -9, 'SameValue')).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function() {
      expect(lastIndexOf(testSubject, 2, 20, 'SameValue')).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function() {
      expect(lastIndexOf(testSubject, 2, -20, 'SameValue')).toBe(-1);
    });
  });

  describe('array like', function() {
    let testAL;

    beforeEach(function() {
      testAL = {};
      testSubject.forEach(function(o, i) {
        testAL[i] = o;
      });
      testAL.length = testSubject.length;
    });

    it('should find the element (array-like)', function() {
      const expected = 5;
      const actual = lastIndexOf(testAL, 'hej', 'SameValue');
      expect(actual).toBe(expected);
    });

    it('should not find the element (array-like)', function() {
      const expected = -1;
      const actual = lastIndexOf(testAL, 'mus', 'SameValue');
      expect(actual).toBe(expected);
    });

    ifHasDenseUndefinedsIt('should find undefined as well (array-like)', function() {
      const expected = -1;
      const actual = lastIndexOf(testAL, undefined, 'SameValue');
      expect(actual).not.toBe(expected);
    });

    ifHasDenseUndefinedsIt('should skip unset indexes (array-like)', function() {
      const expected = 3;
      const actual = lastIndexOf(testAL, undefined, 'SameValue');
      expect(actual).toBe(expected);
    });

    it('should use a strict test (array-like)', function() {
      let actual = lastIndexOf(testAL, null, 'SameValue');
      expect(actual).toBe(6);

      actual = lastIndexOf(testAL, '2', 'SameValue');
      expect(actual).toBe(-1);
    });

    it('should skip the first if fromIndex is set', function() {
      expect(lastIndexOf(testAL, 2, 2, 'SameValue')).toBe(1);
      expect(lastIndexOf(testAL, 2, 1, 'SameValue')).toBe(1);
      expect(lastIndexOf(testAL, 2, 7, 'SameValue')).toBe(7);
    });

    it('should work with negative fromIndex', function() {
      expect(lastIndexOf(testAL, 2, -3, 'SameValue')).toBe(7);
      expect(lastIndexOf(testAL, 2, -9, 'SameValue')).toBe(1);
    });

    it('should work with fromIndex being greater than the length', function() {
      expect(lastIndexOf(testAL, 2, 20, 'SameValue')).toBe(7);
    });

    it('should work with fromIndex being negative and greater than the length', function() {
      expect(lastIndexOf(testAL, 2, -20, 'SameValue')).toBe(-1);
    });
  });
});
