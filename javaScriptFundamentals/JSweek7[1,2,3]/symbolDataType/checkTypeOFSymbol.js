let email = Symbol(  );
let employee = {};
employee.name = 'ssv',
employee.age = 23,
employee[email] = 'test@gmail.com';

for (const key in employee) {
   console.log(key);
}
console.log(typeof(email));
