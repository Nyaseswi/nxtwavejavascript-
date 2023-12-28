const number = [
    [1,2],
    [2,3],
    [1,2],
    [
        [2,3],
        [1,2],
        [2,3],
    ],
    ]

// const flatDeeplyNetsed = number.flat(2);
// console.log(flatDeeplyNetsed);
    
const flatDeeplyNetsed = number.flat(2).filter((Element)=>Element%2===0);
console.log(flatDeeplyNetsed);