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