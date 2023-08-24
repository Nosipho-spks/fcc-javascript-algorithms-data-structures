function convertToRoman(num) {
  let numToRomanNumeral = {
    M:	1000,
    CM:	900,
    D:	500,
    CD:	400,
    C:	100,
    XC:	90,
    L:	50,
    XL:	40,
    X:	10,
    IX:	9,
    V:	5,
    IV:	4,
    I:	1
  };
  
let result = "";
for(let prop in numToRomanNumeral) {
  while(num >= numToRomanNumeral[prop]) {
    result += prop;
    num -= numToRomanNumeral[prop]; 
  }
}
 return result;
}

console.log(convertToRoman(29));