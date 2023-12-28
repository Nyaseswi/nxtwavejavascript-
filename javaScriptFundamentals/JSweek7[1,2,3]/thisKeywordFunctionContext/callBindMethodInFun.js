const john = {
    age:35,
    gender:'M',
    height:78,
    weight:177.8,
}
const sarah = {
    age:32,
    gender:'F',
    height:65,
    weight:177.8,
}
const calBmi = function(){
    return this.weight/ (this.height/100)**2;
}

//console.log(calBmi()); //Nan because defined values are not reading use call method 
console.log(calBmi.call(john));
console.log(`John BMI is ${calBmi.call(john)}`);
//bind method 
const johnBMI = calBmi.bind(john);
console.log(johnBMI());