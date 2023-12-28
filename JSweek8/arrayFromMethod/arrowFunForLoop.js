'use strict';

// Define a function named 'genStars' that takes a 'count' parameter.
const genStars = (count) => Array.from(Array(count), () => '*');

// The 'genStars' function creates an array of length 'count', where each element is '*'.

// First set of iterations (ascending):
for (let i = 1; i <= 6; i++) {
  console.log(genStars(i));
}

console.log('1st iteration 6 arrays -------')
// This loop starts with 'i' at 1 and continues as long as 'i' is less than or equal to 6.
// In each iteration, 'genStars(i)' is called and the result is logged to the console.

// Here's what happens in each iteration:
// - When i = 1, 'genStars(1)' creates an array with one element: ['*'].
// - When i = 2, 'genStars(2)' creates an array with two elements: ['*', '*'].
// - And so on, until i = 6, where 'genStars(6)' creates an array with six elements: ['*', '*', '*', '*', '*', '*'].

// Second set of iterations (descending):
for (let i = 6; i >= 1; i--) {
  console.log(genStars(i));
}
console.log('2nd iteration 6 to 1');

// This loop starts with 'i' at 6 and continues as long as 'i' is greater than or equal to 1.
// In each iteration, 'genStars(i)' is called and the result is logged to the console.

// Here's what happens in each iteration:
// - When i = 6, 'genStars(6)' creates an array with six elements: ['*', '*', '*', '*', '*', '*'].
// - When i = 5, 'genStars(5)' creates an array with five elements: ['*', '*', '*', '*', '*'].
// - And so on, until i = 1, where 'genStars(1)' creates an array with one element: ['*'].

//As a result, this code will produce a pattern of stars in two parts: an ascending pattern with stars increasing from 1 to 6, followed by a descending pattern with stars decreasing from 6 to 1. The output will be a set of lines with varying numbers of asterisks.
