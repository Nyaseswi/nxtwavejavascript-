let a = 90.57
let b = 60
let c = "yaseswi"
let d = true
let e = [1,2,3,4] // not list
let f = (1,2,3,4) // not tuple

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e)); // object not list 
console.log(typeof(f)); //number not tuple
console.log(typeof(g)); // undefined

let isApproved = false;
console.log(typeof(isApproved)); //boolean
console.log(typeof(false)); //boolean

//strings types 
let user = 'hello';
let user1 = "Hello";
let user2 = `hello`; //blackticks
console.log(user)
console.log(user1)
console.log(user2)
console.log(typeof(user));
console.log(typeof(user1));
console.log(typeof(user2));

//undefined type 
let age;
console.log(age)
console.log(typeof(age)); // undefined value type is also undefined 