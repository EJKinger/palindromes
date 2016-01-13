"use strict";

var Palindrome = (function(){
  //checks if word is a a palindrome, returns boolean
  var isPalindrome = function(word){
    if (word === '') return false;
    if (typeof word === 'string'){
      return word.replace(/\s/, '') === word.split('').reverse().join('').replace(/\s/, '');
    } else return false;
  };

  //returns the factorial of a number, returns NaN for negative and fractional numbers
  var factorial = function(num){
    if (typeof num === 'number') {
      if (num === 0) return 1;
      if (num < 0 || num % 1 !== 0) return undefined;
      for (var i = num - 1; i >= 1; i--){
        num *= i;
      }
      return num;
    } else return NaN;
  };

  //returns the factorial of the number of palindromes within an array
  var palindromeFactorial = function(arr){
    if(Array.isArray(arr)){
      return factorial(arr.filter(function(item){
        return isPalindrome(item);
      }).length);
    } else return NaN;
  };

  //returns an object, makes these methods available
  return {
    isPalindrome: isPalindrome,
    factorial: factorial,
    palindromeFactorial: palindromeFactorial
  };
})();
