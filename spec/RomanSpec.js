

describe('simplest', function() {
  var subject;
  
  beforeEach(function() {
    subject = new Converter();
  });
  
  
  describe('romanToDecimal', function() {
    
    
    it('CDXXXIX to 439', function() {
      expect(subject.fromRoman("CDXXXIX")).toEqual(439);  
    });
    it('XLIX 49', function() {
      expect(subject.fromRoman("XLIX")).toEqual(49);
    });
    it('VIII to 8', function() {
      expect(subject.fromRoman("VIII")).toEqual(8);
    });
    it('MMXVI to 2016', function() {
      expect(subject.fromRoman("MMXVI")).toEqual(2016);
    });
    it('MCMLXXXIV to 1984', function() {
      expect(subject.fromRoman("MCMLXXXIV")).toEqual(1984);
    });
    it('MCMXCIV to 1994', function() {
      expect(subject.fromRoman("MCMXCIV")).toEqual(1994);
    });
    it('MCMXC to 1990', function() {
      expect(subject.fromRoman("MCMXC")).toEqual(1990);
    }); 
  });
    
  
  describe('decimalToRoman', function() {
    
    it('1 to I', function() {
      expect(subject.toRoman(1)).toEqual("I");
    });
    it('1234 to MCCXXXIV', function() {
      expect(subject.toRoman(1234)).toEqual("MCCXXXIV");
    });
    it('2017 to MMXVII', function() {
      expect(subject.toRoman(2017)).toEqual("MMXVII");
    });
    it('734 to DCCXXXIV', function() {
      expect(subject.toRoman(734)).toEqual("DCCXXXIV");
    });
    it('1945 to MCMXLV', function() {
      expect(subject.toRoman(1945)).toEqual("MCMXLV");
    });
    it('1918 to MCMXVIII', function() {
      expect(subject.toRoman(1918)).toEqual("MCMXVIII");
    });
    it('1410 to MCDX', function() {
      expect(subject.toRoman(1410)).toEqual("MCDX");
    });
  });
});
  
