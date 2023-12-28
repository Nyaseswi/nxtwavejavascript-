'use strict';
const books = [
    'The hound of Baskervilles',
    'Avatar',
    'Crisp and Shine',
    'The Founder',
];

books.forEach(function(element, index) {
    console.log(element.split('').reverse().join(''));
    console.log(index);
});
