"use strict";
/*
1. Создайте интерфейс IVehicle:
  Методы:
    - getDetails(): string — возвращает информацию о транспортном средстве.
    - start(): string — возвращает строку "The vehicle is starting".
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
  Реализуйте конструктор с полями:
    - make (строка)
    - model (строка)
  Добавьте методы:
    - start, возвращающего строку: "The vehicle {make} {model} is starting.".
    - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.
*/
class Vehicle {
    make;
    model;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        return `The vehicle ${this.make} ${this.model} is starting.`;
    }
}
/*
3. Создайте класс Car, который наследует Vehicle:
    - Добавляет поле year (число).
    - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
*/
class Car extends Vehicle {
    year;
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getDetails() {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}
/*
4. Создайте объект класса Car и проверьте работоспособность
*/
const car = new Car('Volvo', 'XC60', 2019);
console.log(car.start()); // "The vehicle Volvo XC60 is starting."
console.log(car.getDetails()); // "Volvo XC60, 2019"
