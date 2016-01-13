describe("Palindromes", function() {
  it("should solve factorials", function(){
    expect(Palindrome.factorial(5)).to.equal(120);
    expect(Palindrome.factorial(4)).to.equal(24);
    expect(Palindrome.factorial(3)).to.equal(6);
    expect(Palindrome.factorial(2)).to.equal(2);
    expect(Palindrome.factorial(1)).to.equal(1);
    expect(Palindrome.factorial(0)).to.equal(1);
    expect(isNaN(Palindrome.factorial(7.95))).to.be.true;
    expect(isNaN(Palindrome.factorial(-1))).to.be.true;
    expect(isNaN(Palindrome.factorial('carrot'))).to.be.true;
    expect(isNaN(Palindrome.factorial({}))).to.be.true;
    expect(isNaN(Palindrome.factorial([]))).to.be.true;
  });

  it("check if words are palindromes", function() {
    expect(Palindrome.isPalindrome('racecar')).to.be.true;
    expect(Palindrome.isPalindrome('dad')).to.be.true;
    expect(Palindrome.isPalindrome('cat')).to.be.false;
    expect(Palindrome.isPalindrome('')).to.be.false;
    expect(Palindrome.isPalindrome([])).to.be.false;
    expect(Palindrome.isPalindrome({})).to.be.false;
    expect(Palindrome.isPalindrome(43)).to.be.false;
  });

  it("Returns factorial of the number of palindromes in an array", function() {
    expect(Palindrome.palindromeFactorial(
      ['mom', 'race car', 'dad', 'florence healthcare'])).to.equal(6);
    expect(Palindrome.palindromeFactorial(
      [])).to.equal(1);
    expect(Palindrome.palindromeFactorial(
      ['Amy must I jujitsu my ma'])).to.equal(1);
    expect(isNaN(Palindrome.palindromeFactorial(7.95))).to.be.true;
    expect(isNaN(Palindrome.palindromeFactorial(-1))).to.be.true;
    expect(isNaN(Palindrome.palindromeFactorial('carrot'))).to.be.true;
    expect(isNaN(Palindrome.palindromeFactorial({}))).to.be.true;
  });
});