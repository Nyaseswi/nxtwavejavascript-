function Car(color, brand) {
    this.color = color;
    this.brand = brand;
    this.start = function() {
      console.log("started");
    };
  }
console.log(Car.name);
console.log(Car.length);
console.log(typeof(Car));
console.log(Car.constructor);
let car1 = new Car("blue", "Audi");
console.log(car1.constructor);