'use strict';

let user = {
  name: 'Rob Williams',
  age: 22,
  livesIn: 'New Jersey',
  introduction() {
    return `Hi, my name is ${this.name}. I'm ${this.age} years old and I live in ${this.livesIn}`;
  },
  ending(){
    return `Hi, I currently live in ${this.livesIn}`
  }
};
console.log(user.introduction());
console.log(user.ending());
