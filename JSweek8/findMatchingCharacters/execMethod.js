text = 'whether its color or colors, its all same. The human eye can see all kinds of colors ';
// const pattern= new RegExp('colou?rs','g');
const pattern = /colou?rs?/g;
console.log(pattern.exec(text)[0]);
console.log(pattern.exec(text)[0]);
console.log(pattern.exec(text)[0]);
