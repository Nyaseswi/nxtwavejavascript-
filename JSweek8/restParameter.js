let fruits = ['Apple','Kiwi','Orange','Grapes','watermelon'];
let [pie,smothie,...rest] = fruits;
console.log(`I want ${pie}`);
console.log(`Remaining fruits accessed with rest parameter ${rest}`);