function convertToRoman(num) {
  
    const myFunc = (digit, first, second, third) => {
      switch(true){
        case digit <= 3:
          return first.repeat(digit)
        case digit == 4:
          return first + second;
        case digit <= 8:
          return  second + first.repeat(digit - 5);
        default:
          return first + third
      }
    }
    
    let result = ''
  
    //getThousands 
      result += "M".repeat(Math.floor(num / 1000))
      num %= 1000
  
    //getHundred
     result += myFunc(Math.floor(num / 100), "C", "D","M")
      num %= 100
  
    //getTens
     result += myFunc(Math.floor(num / 10), "X", "L", "C")
        num %= 10
  
    //getOnes
     result += myFunc(num, "I", "V", "X")
  
  
  return result
   
  }
  
convertToRoman(1234);

//https://forum.freecodecamp.org/t/solution-to-challenge-roman-numeral-converter/414708