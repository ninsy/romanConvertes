"use strict";
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
  this.multiplicationDictonary = {
    5: 10000,
    4: 1000,
    3: 100,
    2: 10,
    1: 1
  }
};

// Helper functions

/// since one picture is worth 1000 words, there's a little description
//      wages of 4 : 1, 5
//      wages of 23 : 10, 50
//      wages of 519 : 100, 500
//      wages of 1762 : 1000
Converter.prototype.matchWages = function(calucatedValue) {
  var calulatedValueWage = calucatedValue.toString().length;
  var wageArray = [];
  for(var [key, value] of this.primordialMap) {
    if(value.toString().length == calulatedValueWage) wageArray.push(value);
  }
  return wageArray;
}

Converter.prototype.findClosestPrimordial = function(passedValue) {
  // console.log("Calculating " + passedValue);
  var wagesArray = this.matchWages(passedValue);
  var differencesArray = wagesArray
  .map(singleValue => Math.abs(passedValue - singleValue));
  // console.log("Wages:" + wagesArray);
  // console.log("Diff array:" + differencesArray);
  var smallestDifference = differencesArray.indexOf(Math.min.apply(Math, differencesArray));
  var toBeReturned = {
    originalValue: passedValue, 
    differenceBetween: differencesArray[smallestDifference],
    primordialValue: wagesArray[smallestDifference]
  }
  return toBeReturned;
  // console.log(toBeReturned);
}

// Converting functions

Converter.prototype.toRoman = function(decimalInput) {
  var toReturn = undefined;
  for(var [key, value] of this.primordialMap) {
    if(value == decimalInput) toReturn = key ;
  };
  return toReturn;
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
        var translatedSum = 0;
        var toBeOmmited = false;
      
        stringToArray.forEach((singleElement, index) => {

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
            if(currentValue >= nextValue ) {
              console.log(currentValue);
              translatedSum += currentValue;
            }
            else {
              var currentSum = nextValue - currentValue
              console.log(currentValue);
              translatedSum += currentSum;
              toBeOmmited = true;
            }
          }
        });
        return translatedSum;        
      }
  }
};


var x = new Converter();
// x.fromRoman("MCMXC");
// x.fromRoman("MMVIII");
// x.fromRoman("MDCLXVI");

