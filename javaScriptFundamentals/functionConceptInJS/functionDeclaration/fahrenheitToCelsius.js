
'use strict';
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }
let tempInFahrenheit = 77;
console.log(
    `${tempInFahrenheit} degrees Fahrenheit is `,
    toCelsius(tempInFahrenheit),
    'degrees Celsius'
  );

