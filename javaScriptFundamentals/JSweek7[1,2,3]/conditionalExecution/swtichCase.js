'use strict';
let item = 'Lettuce';
let type;
switch (item) {
    case 'Apple':
    case 'Banana': 
    case 'Kiwi': 
    case 'Strawberry':
    type = 'fruit';
    break;
    case 'Lettuce':
    case 'Potato':
    case 'Celery':
    case 'Eggplant':
      type = 'vegetable';
      break;
    default: {
      throw new Error('Unable to identify item...');
    }
  }
console.log(`${item} is a ${type}`);
