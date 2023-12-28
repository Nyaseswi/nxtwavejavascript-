function exampleFunction() {
    let x = 10;
    if (true) {
      let x = 20; // This creates a new 'x' variable with block scope.
    }
    console.log(x); // Outputs 10
  }
  