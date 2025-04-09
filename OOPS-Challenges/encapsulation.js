// Task 1
class BankAccount {
  constructor(balance = 0) {
    if (balance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this._balance = balance;
  }

  // Getter for balance
  get balance() {
    return this._balance;
  }

  // Setter for balance with validation
  set balance(value) {
    if (value < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = value;
  }

  // Deposit method
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this._balance += amount;
  }

  // Withdraw method
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdraw amount must be positive");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }
}

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}
