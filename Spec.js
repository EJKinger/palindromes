"use strict";

var _palindromes = require("./palindromes.js");

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