function Car(brand, model, engine, transmission, color, age, isAdmin) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.transmission = transmission;
    this.color = color;
    this.age = age;
    this.isAdmin = isAdmin;

    this.drive = () => this.age >= 18;
    this.honk = () => isAdmin ? 'Accepted' : 'Denied';
    this.stop = () => isAdmin ? 'stopped' : 'continue';
    this.isEligibleToBuy = () => this.age <= 50;
}

let car0 = new Car('Mg', '30', 'KVt', 'CVT', 'red', 10, true);

console.log(car0); // access all properties
console.log(car0.age); // access single property
console.log(car0.drive()); // true or false
console.log(car0.honk());
console.log(car0.stop());
console.log(car0.isEligibleToBuy()); // true or false
