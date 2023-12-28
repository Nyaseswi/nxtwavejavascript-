//condition ? expressionIfTrue : expressionIfFalse;
//exampleOne
var isRaining = true;
var weather = isRaining ? "Take an umbrella" : "Enjoy the sunshine";

console.log(weather); // Output will be "Take an umbrella"
console.log('exampleTwo');
'use strict'; // This line enables strict mode in JavaScript, which helps catch common coding mistakes and prevent the use of potentially problematic features.

const today = 'Thursday'; // Declares a constant variable named 'today' and assigns it the string 'Thursday'.

const typeOfDay =
  today === 'Saturday' || today === 'Sunday' // Checks if 'today' is equal to 'Saturday' or 'Sunday'.
    ? 'Weekend' // If the condition is true, assign 'Weekend' to 'typeOfDay'.
    : today === 'Wednesday' // If the previous condition is false, check if 'today' is equal to 'Wednesday'.
    ? 'Hump Day' // If it's Wednesday, assign 'Hump Day' to 'typeOfDay'.
    : 'Weekday'; // If none of the previous conditions are true, assign 'Weekday' to 'typeOfDay'.

console.log(`${today} - ${typeOfDay}`); // Logs the value of 'today' and 'typeOfDay' to the console.

