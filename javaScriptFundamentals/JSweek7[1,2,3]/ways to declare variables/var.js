function exampleFunction() {
    var x = 10;
    if (true) {
      var x = 20; // This reassigns the outer 'x' variable.
    }
    console.log(x); // Outputs 20
  }
  