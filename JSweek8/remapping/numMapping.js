const numbers = [
    [1,2],
    [2,2],
    [2,3]
]
const toSum = (arr) =>arr.map((Element)=>Element[0]+Element[1])
console.log(toSum(numbers));

//unpacking 
const toAdd = (arr) =>arr.map(([a,b])=>a+b)
console.log(toAdd(numbers));
