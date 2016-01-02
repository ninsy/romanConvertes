

describe('simplest', function() {
  var subject;
  
  beforeEach(function() {
    subject = new Converter();
  });
  
  it('converts romanToDecimal', function() {
    expect(subject.fromRoman("I")).toEqual(1);
  });
  
  it('converts decimalToRoman', function() {
    expect(subject.toRoman(1)).toEqual("I");
  });
});
  
