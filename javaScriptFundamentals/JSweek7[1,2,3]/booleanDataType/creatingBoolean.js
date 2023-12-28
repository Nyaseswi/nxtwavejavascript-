'use strict';

var ageOfJoe = 19;
var eligibleForVoting = ageOfJoe > 18;
var isJoeASeniorCitizen = ageOfJoe > 60;
var lengthOfMsg = String(ageOfJoe).length; // linked to length 

console.log('Joe can vote. true or false?', eligibleForVoting); //True 
console.log('Joe is a senior citizen. true or false?', isJoeASeniorCitizen); //False 
console.log(lengthOfMsg); //2
console.log(typeof isJoeASeniorCitizen); //checked typeof 

