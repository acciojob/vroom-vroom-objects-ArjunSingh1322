// Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar constructor function (inherits from Car)
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Inherit properties from Car
    this.topSpeed = topSpeed; // Set topSpeed property
}

// Inherit methods from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset constructor reference (important after Object.create)
SportsCar.prototype.constructor = SportsCar;

// Adding method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

// Example Usage
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());  // Output: 200
