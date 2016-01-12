"use strict";

String.prototype.isPalindrome = function(){
  var word = this;
  if (typeof word === 'string'){
    return word === word.split('').reverse().join('');
  } else return false;
};

Math.factorial = function(num){
  if (typeof num === 'number') {
    if (num === 0) return 1;
    if (num < 0) return NaN;
    for (var i = num - 1; i >= 1; i--){
      num *= i;
    }
    return num;
  } else return NaN;
};
