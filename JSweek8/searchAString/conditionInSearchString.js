const text = "This is a sample text, and it contains the word 'sample'.";

// Specify the search string and the starting position
const searchString = "sample";
const startingPosition = 15; // The index where you want to start the search

// Search for the string starting from the specified position
const position = text.indexOf(searchString, startingPosition);

if (position !== -1) {
  console.log(`'${searchString}' found at position ${position}`);
} else {
  console.log(`'${searchString}' not found in the text.`);
}
