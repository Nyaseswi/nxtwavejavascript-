const text = " The color of sky is blue, colors are unique";
const pattern = new RegExp('colou?rs?', 'gi');
console.log(pattern.exec(text));
