function add(a,b,c){
    return a+b+c
}
let numbers =[1,2,3];
console.log(add(...numbers));

//more values 

function mun(a,b,c){
    return a*b*c
}
let muntiply=[2,6,7,8,6,4,10];
console.log(mun(...muntiply));

console.log(12*7); // neglects another values 