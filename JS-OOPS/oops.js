class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} Inheritance`;
  }
}

let myCar = new Car("honda", "city");

// console.log(myCar.start())
// console.log(myCar.model)

//Encapsulation

class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();

// console.log(account.getBalance())

//Polymorphism

class Bird {
  fly() {
    return "Flying...";
  }
}

class Penguin extends Bird {
  fly() {
    return "Penguins cant fly";
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly())
// console.log(penguin.fly())

//Getters and Setters

class Person {
  constructor(name, age) {
    this._name = name; // Convention: use underscore to mark a private property
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name can't be empty");
    }
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    if (newAge >= 0) {
      this._age = newAge;
    } else {
      console.log("Age must be a positive number");
    }
  }
}

// Usage
let person = new Person("John", 30);

console.log(person.name);
person.name = "Jane";
console.log(person.name);

person.age = -5;
console.log(person.age);
