const text = 'whether it\'s color or colours@gmail.com, it\'s all the same. The human eye #pizza #jaffa can see all kinds of colors';
const pattern = /[a-z0-9._]+@[a-z0-9-]+\.[a-z.]{2,6}/gi;
const hash = /(?<=#)\w+/gi;
const hashes = text.match(hash);
const str = text.match(pattern);
console.log(str); 
console.log(hashes);
