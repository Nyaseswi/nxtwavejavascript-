'use strict';
let person=[
    {
        id:1,
name:'ssv',
age:'null', //want to escape read avvakudadu 
clg:'ncpa',
    },
    {
        id:2,
    name:'sss',
    age:24,
    clg:'ncpa',
}
]
//console.log(person[0].name || 'n/a')
// console.log(person[0].age|| 'n/a')
// console.log(person[0].age ?? 'n/a')
console.log(`${person[0].name ?? person[0].age}`)
