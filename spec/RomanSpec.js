describe('simplest', function() {
  var subject;
  
  beforeEach(function() {
    subject = new Converter();
  });
  
  
  describe('should find proper closest primordials', function() {   
      
      var foo, matchings;

    it('4 should match 5', function() {
      matchings = [4, 1, 5];
      foo = subject.findClosestPrimordial(4);
      expect(foo).toContain(4);
      expect(foo).toContain(1);
      expect(foo).toContain(5);
    });
    it('2 should match 1', function() {
       matchings = [2, 1, 1];
      foo = subject.findClosestPrimordial(4);
      expect(foo).toContain(2);
      expect(foo).toContain(1);
      expect(foo).toContain(1);
    });
    it('3 should match 1', function() {
       matchings = [3, 1, 1];
      foo = subject.findClosestPrimordial(4);
      expect(foo).toContain(3);
      expect(foo).toContain(1);
      expect(foo).toContain(1);
    });
    it('23 should match 10', function() {
       matchings = [23, 13, 10];
      foo = subject.findClosestPrimordial(4);
      expect(foo).toContain(23);
      expect(foo).toContain(13);
      expect(foo).toContain(10);
    });
    it('39 should match 50', function() {
       matchings = [39, 11, 50];
      foo = subject.findClosestPrimordial(4);
      expect(foo).toContain(39);
      expect(foo).toContain(11);
      expect(foo).toContain(50);
    });
      
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
    
  
  // describe('decimalToRoman', function() {
    
  //   it('1 to I', function() {
  //     expect(subject.toRoman(1)).toEqual("I");
  //   });
  //   it('1234 to MCCXXXIV', function() {
  //     expect(subject.toRoman(1234)).toEqual("MCCXXXIV");
  //   });
  //   it('2017 to MMXVII', function() {
  //     expect(subject.toRoman(2017)).toEqual("MMXVII");
  //   });
  //   it('734 to DCCXXXIV', function() {
  //     expect(subject.toRoman(734)).toEqual("DCCXXXIV");
  //   });
  //   it('1945 to MCMXLV', function() {
  //     expect(subject.toRoman(1945)).toEqual("MCMXLV");
  //   });
  //   it('1918 to MCMXVIII', function() {
  //     expect(subject.toRoman(1918)).toEqual("MCMXVIII");
  //   });
  //   it('1410 to MCDX', function() {
  //     expect(subject.toRoman(1410)).toEqual("MCDX");
  //   });
  // });
});
  
