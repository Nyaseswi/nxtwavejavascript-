// - Less than  <
// - Greater than  >
// - Less than or equal to  <=
// - Greater than equal to >=
console.log(2<4);
console.log(2>4);
console.log(2<=4);
console.log(2>=4);

//exercise
'use strict';

var waterTemperature = 55;
var isItBoiling = waterTemperature >= 100;
var isItFrozen = waterTemperature <= 0;
var isItWarm = waterTemperature > 30 && waterTemperature < 60;

console.log('Is the water boiling?', isItBoiling);
console.log('Is the water frozen?', isItFrozen);
console.log('Is it warm?', isItWarm);
