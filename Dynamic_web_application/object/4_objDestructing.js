let person = {
    name:"Yaseswi",
    age:25,
    city: "vijayawada",
    job:"Medical Scribe",
    company:"AQuity Solutions"
}
//obj destructing syntax for accessing muntiple 
let {name,age} = person;
console.log(name,age);
//obj destructing syntax for accessing single property  
let {city} = person;
console.log(city);