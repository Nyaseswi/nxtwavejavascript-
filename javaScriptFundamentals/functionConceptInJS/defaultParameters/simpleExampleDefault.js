function greet(name = 'Friend', greeting = 'Hello') {
    console.log(`${greeting}, ${name}!`);
  }
  greet(); // Output: Hello, Friend!
greet('Alice', 'Hi'); // Output: Hi, Alice!
// When you call greet() without any arguments, it uses the default values.
// When you call greet('Alice', 'Hi'), it overrides the default values with the provided arguments.