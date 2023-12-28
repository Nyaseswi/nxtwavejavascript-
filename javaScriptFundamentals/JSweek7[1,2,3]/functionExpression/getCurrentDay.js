'use strict';

const getDay = function () {
  const days = [
    'Sunday',// index number is 0 
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date().getDay(); // Use getDay to get the day of the week
  return days[today];
  
};

console.log(`Today is ${getDay()}`);
