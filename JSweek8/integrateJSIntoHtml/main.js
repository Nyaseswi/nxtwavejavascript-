'use strict';
let date = new Date();
console.log(date);

const getTime = () => new Date().toTimeString();
const greetMe = () =>console.log(`Hey , the time is ${getTime()}`)