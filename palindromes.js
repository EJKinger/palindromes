var Palindrome = (function(){
  "use strict";
  //checks if word is a a palindrome, returns boolean
  var isPalindrome = function(word){
    if (typeof word === 'number'){
      word = String(word);
    }
    if (word === '' || word.length === 1) return false;
    if (typeof word === 'string'){
      return word.replace(/\s/, '').toLowerCase() === 
        word.split('').reverse().join('').replace(/\s/, '').toLowerCase();
    } else return false;
  };

  //returns the factorial of a number, returns NaN for negative and fractional numbers
  var factorial = function(num){
    var mem = {0: 1, 1: 1};
    if (num in mem){
      return mem[num];
    }
    if (num >= 0 && typeof num === 'number'){
      mem[num] = num * factorial(num - 1);
      return mem[num];
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
