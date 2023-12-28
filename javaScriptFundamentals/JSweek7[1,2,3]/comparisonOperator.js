//equality operatory
console.log('2'==2); //doesnt care about typeof data 
console.log(2==2); //true
console.log(true==true); //true
console.log('true'==true); //false
console.log(true==false ); //false
console.log('-----------------equality operatory') 
//strict Equality operator
console.log('2'===2);
console.log(true===false);
// console.log(true===True); //case senstivie
console.log('----------------- strict equality operatory')  
console.log('---------inequality operator !=')
console.log(2!=4);
console.log('2' != 2); //doesnt care about type its true
console.log('-----------strict inequality or nonidentity operator !==')
console.log('2'!==2)
console.log(2!==2)

//exercise
'use strict';
var costOfToothbrush = 10;
var printedCost = '10';
var advertisedCost = 10.5;
console.log(
    'Are both costs same? (Equality Operator)',
    costOfToothbrush == printedCost
  );
  console.log(
    'Are both costs same? (Strict Equality Operator)',
    costOfToothbrush === printedCost
  );
  console.log(
    'The advertised cost is not the same as the actual cost: ',
    advertisedCost !== costOfToothbrush
  );
