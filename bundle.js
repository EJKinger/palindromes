/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Palindrome = {
	  //checks if word is a a palindrome, returns boolean
	  isPalindrome: function isPalindrome(word) {
	    if (typeof word === 'number') {
	      word = String(word);
	    }
	    if (word === '' || word.length === 1) return false;
	    if (typeof word === 'string') {
	      return word.replace(/\s/, '').toLowerCase() === word.split('').reverse().join('').replace(/\s/, '').toLowerCase();
	    } else return false;
	  },

	  //returns the factorial of a number, returns NaN for negative and fractional numbers
	  factorial: function () {
	    var mem = { 0: 1, 1: 1 };
	    return function (num) {
	      if (num in mem) {
	        return mem[num];
	      }
	      if (num >= 0 && num % 1 === 0 && typeof num === 'number') {
	        mem[num] = num * Palindrome.factorial(num - 1);
	        return mem[num];
	      } else return NaN;
	    };
	  }(),

	  //returns the factorial of the number of palindromes within an array
	  palindromeFactorial: function palindromeFactorial(arr) {
	    if (Array.isArray(arr)) {
	      return Palindrome.factorial(arr.filter(function (item) {
	        return Palindrome.isPalindrome(item);
	      }).length);
	    } else return NaN;
	  }
	};

	exports.default = Palindrome;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _palindromes = __webpack_require__(1);

	var _palindromes2 = _interopRequireDefault(_palindromes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe("Palindromes", function () {
	  it("should solve factorials", function () {
	    expect(_palindromes2.default.factorial(13)).to.equal(6227020800);
	    expect(_palindromes2.default.factorial(14)).to.equal(87178291200);
	    expect(_palindromes2.default.factorial(5)).to.equal(120);
	    expect(_palindromes2.default.factorial(4)).to.equal(24);
	    expect(_palindromes2.default.factorial(3)).to.equal(6);
	    expect(_palindromes2.default.factorial(2)).to.equal(2);
	    expect(_palindromes2.default.factorial(1)).to.equal(1);
	    expect(_palindromes2.default.factorial(0)).to.equal(1);
	    expect(isNaN(_palindromes2.default.factorial(7.95))).to.be.true;
	    expect(isNaN(_palindromes2.default.factorial(-1))).to.be.true;
	    expect(isNaN(_palindromes2.default.factorial('carrot'))).to.be.true;
	    expect(isNaN(_palindromes2.default.factorial({}))).to.be.true;
	    expect(isNaN(_palindromes2.default.factorial([]))).to.be.true;
	  });

	  it("check if words are palindromes", function () {
	    expect(_palindromes2.default.isPalindrome('Racecar')).to.be.true;
	    expect(_palindromes2.default.isPalindrome('racecar')).to.be.true;
	    expect(_palindromes2.default.isPalindrome('dad')).to.be.true;
	    expect(_palindromes2.default.isPalindrome(424)).to.be.true;
	    expect(_palindromes2.default.isPalindrome('cat')).to.be.false;
	    expect(_palindromes2.default.isPalindrome('')).to.be.false;
	    expect(_palindromes2.default.isPalindrome([])).to.be.false;
	    expect(_palindromes2.default.isPalindrome({})).to.be.false;
	  });

	  it("Returns factorial of the number of palindromes in an array", function () {
	    expect(_palindromes2.default.palindromeFactorial(['mom', 'race car', 'dad', 'florence healthcare'])).to.equal(6);
	    expect(_palindromes2.default.palindromeFactorial([])).to.equal(1);
	    expect(_palindromes2.default.palindromeFactorial(['Amy must I jujitsu my ma'])).to.equal(1);
	    expect(isNaN(_palindromes2.default.palindromeFactorial(7.95))).to.be.true;
	    expect(isNaN(_palindromes2.default.palindromeFactorial(-1))).to.be.true;
	    expect(isNaN(_palindromes2.default.palindromeFactorial('carrot'))).to.be.true;
	    expect(isNaN(_palindromes2.default.palindromeFactorial({}))).to.be.true;
	  });
	});

/***/ }
/******/ ]);