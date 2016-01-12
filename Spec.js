describe("Palindromes", function() {
  it("should solve factorials", function(){
    expect(Math.factorial(5)).to.equal(120);
    expect(Math.factorial(4)).to.equal(24);
    expect(Math.factorial(3)).to.equal(6);
    expect(Math.factorial(2)).to.equal(2);
    expect(Math.factorial(1)).to.equal(1);
    expect(Math.factorial(0)).to.equal(1);
    expect(isNaN(Math.factorial(-1))).to.be.true;
    expect(isNaN(Math.factorial('carrot'))).to.be.true;
    expect(isNaN(Math.factorial({}))).to.be.true;
    expect(isNaN(Math.factorial([]))).to.be.true;
  });

  it("check if words are palindromes", function() {
    expect('racecar'.isPalindrome()).to.be.true;
    expect('dad'.isPalindrome()).to.be.true;
    expect('cat'.isPalindrome()).to.be.false;
  });
});