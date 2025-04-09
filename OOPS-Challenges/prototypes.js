function Animal() {}
Animal.prototype.speak = function () {
  return "Animal speaking";
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return "Woof!";
};

const myDog = new Dog();

console.log(myDog.bark());
console.log(myDog.speak());
console.log(myDog instanceof Dog);
console.log(myDog instanceof Animal);
