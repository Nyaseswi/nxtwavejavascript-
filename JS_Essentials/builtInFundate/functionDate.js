//new date 
let now = new Date();
console.log(now);  
console.log(typeof(now));

//new Date(milliseconds)
let time1 = new Date(0);
console.log(time1); 
let time2 = new Date(100000000000);
console.log(time2);

//new Date(date string)
let date = new Date("2021-01-28");
let dateYearMon = new Date("2020-08"); //passed year and month
let date1 = new Date("2020"); //passed year
let date2 = new Date("03/25/2015"); //short hand format 
let date3 = new Date("Jul 1 2021"); //long date format 
let date4 = new Date("1 Jul 2021"); // mon & date can be in any order 
let date5 = new Date("July 1 2021"); // mon can be ful or abb
let date6 = new Date("JULY, 1, 2021");
let time3 = new Date(2021, 1, 20, 4, 12, 11, 0);
console.log(time3);  // Sat Feb 20 2021 04:12:11 GMT+0530 (India Standard Time) { }
let time4 = new Date(2021, 1, 20, 4);
console.log(time4);
let time5 = new Date(2020, 1);
console.log(time5); 
//Autocorrection 
let date7 = new Date(2008, 0, 33);
// Jan does not have 33 days
//instance methods 
let date8 = new Date(1947, 7, 15, 1, 3, 15, 0);

console.log(date8.getFullYear());  // 1947
console.log(date8.getMonth());
//setting or updating date values 
let date9 = new Date(1947, 7, 15);
date1.setYear(2021);
date1.setDate(1);

console.log(date9);



console.log(date);
console.log(dateYearMon);
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);
console.log(date7);

