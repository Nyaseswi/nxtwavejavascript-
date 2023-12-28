'use strict';
const books = [
    'The hound of Baskervilles',
    'Avatar',
    'Crisp and Shine',
    'The Founder',
];

const flipTiles=(function(element, index) {
    console.log(element.split('').reverse().join(''));
    console.log(index);
});
books.forEach(flipTiles);

