let person = {
    name:"Yaseswi",
    age:25,
    city: "vijayawada",
    job:"Medical Scribe",
    company:"AQuity Solutions"
}
console.log(person)
console.log(person.name) // dot notation 
console.log(person['name']) // bracket notation 
console.log(person.gender) //gender property doesn't exist so it gives undefined dot notation
console.log(person['gender']) //gender property doesn't exist so it gives undefined bracket notation