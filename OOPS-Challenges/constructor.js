function Person(name, age) {
  if (typeof age !== "number" || age <= 0) {
    throw new Error("Age must be a positive number");
  }

  this.name = name;
  this.age = age;

  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}

try {
  const person1 = new Person("Alice", 25);
  console.log(person1.greet());

  const person2 = new Person("Bob", -10);
} catch (error) {
  console.error(error.message);
}
