function Car(color, brand) {
    this.color = color;
    this.brand = brand;
    this.start = function() {
      console.log("started");
    };
  }
  
  let car1 = new Car("blue", "Audi");
  //creating multiple objects 
  let car2 = new Car("blue", "Audi");
  let car3 = new Car("blue", "Audi");
  console.log(car1);  // Car { } function name from which it is created 
  console.log(Car.length) // 2 properties used color,brand 
  console.log(typeof(Car)); // function type 