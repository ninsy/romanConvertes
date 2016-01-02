
function Converter() {  
  this.calculatedDigits = new Map();
  this.primordialMap = new Map([
   ["I", 1],
   ["V", 5],
   ["X", 10],
   ["L", 50],
   ["C", 100],
   ["D", 500],
   ["M", 1000]
  ]);
};

Converter.prototype.toRoman = function(decimalInput) {
  for(let [key, value] of this.primordialMap) {
    if(value == decimalInput) return key;
  };
  for(let [key, value] of this.calculatedDigits) {
    if(value == decimalInput) return key;
  }
  
};

Converter.prototype.fromRoman = function(romanInput) {
  
  var toReturn = this.primordialMap.get(romanInput);
  if(toReturn != undefined) {
    return toReturn;
  } 
  else {
      toReturn = this.calculatedDigits.get(romanInput);
      if(toReturn != undefined) {
        return toReturn;
      }
      else {
       var stringToArray = romanInput.split("");
       console.log(stringToArray);
        var translatedSum = 0;
        var toBeOmmited = false;
      
        stringToArray.forEach((singleElement, index) => {
           console.log("Index: " + index);
    
          if(toBeOmmited) {
            toBeOmmited = false;
            return 0;
          }
          if(singleElement != 0) {
            
            var currentValue = this.fromRoman(stringToArray[index]);
            var nextValue = 0;
            if(stringToArray[index+1]) {
              nextValue = this.fromRoman(stringToArray[index+1]);
            }
            // console.log("PAIR: ");
            // console.log(currentValue);
            // console.log(nextValue);
            // console.log("--");
            if(currentValue >= nextValue ) {
              console.log("Adding: " + currentValue);
              translatedSum += currentValue;
            }
            else {
              var currentSum = nextValue - currentValue
              translatedSum += currentSum;
              console.log("Adding: " + currentSum);
              toBeOmmited = true;
            }
          }
        });
        console.log(translatedSum);        
      }
  }
};


var x = new Converter();
x.fromRoman("MCMXC");
x.fromRoman("MMVIII");
x.fromRoman("MDCLXVI");
