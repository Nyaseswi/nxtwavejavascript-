const PI = 3.14159;
PI = 3; // Error: Cannot reassign a 'const' variable.

const person = { name: 'John' };
person.name = 'Jane'; // Allowed, since the object itself is not being reassigned.
