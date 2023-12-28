const average = function(a=0,b=0,c=0){
    return (a+b+c) /10
}
console.log(average());

//overrides values 
const average1 = function(a=0,b=0,c=0){
    return (a+b+c) /10
}
console.log(average1(a=6,b=7,c=10)); // these values are replaced by 0 