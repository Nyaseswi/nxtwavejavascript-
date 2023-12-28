const myArray = [9,8,7,6,5,4,3,2,1];
const asc = [...myArray].sort((a,b)=>a-b);
const des = [...myArray].sort((a,b)=>b-a);
console.log(`Ascending..${asc}`);
console.log(`Descending..${des}`);
console.log(myArray.sort());
