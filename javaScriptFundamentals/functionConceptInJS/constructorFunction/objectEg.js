'use strict';

let user = {
  name: 'Rob Williams',
  age: 22,
  livesIn: 'New Jersey',
  introduction: function () {
    return `Hi, my name is ${this.name}. I'm ${this.age} years old and I live in ${this.livesIn}`;
  },
  ending(){
    return `Hi, by the next birthday ${this.age} will be incremented to 23`
  }
  //ending function shorthand notation 
};
console.log(user.introduction());
console.log(user.ending());
