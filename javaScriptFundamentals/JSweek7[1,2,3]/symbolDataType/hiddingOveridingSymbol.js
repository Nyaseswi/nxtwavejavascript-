let email = Symbol(  );
let employee = {};
employee.name = 'ssv',
employee.age = 23,
employee[email] = 'test@gmail.com';
console.log(Object.keys(employee));
