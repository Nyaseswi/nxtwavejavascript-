const text = 'whether it\'s color or colours, it\'s all the same. The human eye can see all kinds of colors';
const pattern = /colou?rs/g;
const match = text.search(pattern);
console.log(match); // It will output the position of the first match or -1 if not found.
