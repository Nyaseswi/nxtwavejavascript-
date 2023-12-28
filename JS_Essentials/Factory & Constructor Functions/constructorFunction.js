function Car(color, brand) {
    this.color = color;
    this.brand = brand;
    this.start = function() {
      console.log("started");
    };
  }
  
  let car1 = new Car("blue", "Audi");
  console.log(car1);  // Car { }
  console.log(car1.start);//instance method 
  console.log(car1.color);  // instance properties
  console.log(car1.brand);
