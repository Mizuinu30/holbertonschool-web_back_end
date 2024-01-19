import Car from './10-car;

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // Clone the EVCar including its specific property _range
    return new this.constructor(this._brand, this._motor, this._color, this._range);
  }
}
