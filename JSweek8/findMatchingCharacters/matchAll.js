'use strict';
const message = 'Rivercomb is 200 miles away from the ocean, and 150 miles from the airport';
const pattern = /\d+\s*miles/g;
const matches = message.match(pattern);
console.log(matches);
