//Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.
const person = {
  name: "Alice",
  introduce: function () {
    return `Hi, my name is ${this.name}`;
  },
};
const boundIntroduce = person.introduce.bind(person);
boundIntroduce();


//Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.
function introduce() {
  console.log(`Hi, my name is ${this.name}.`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };
const person3 = { name: "Charlie" };

introduce.call(person1);
introduce.call(person2);
introduce.call(person3);


//Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array.
function sum(a, b) {
  return (a + b) * this.multiplier;
}

const context1 = { multiplier: 2 };
const context2 = { multiplier: 3 };
const context3 = { multiplier: 0.5 };


console.log(sum.apply(context1, [4, 5]));
console.log(sum.apply(context2, [10, 1]));
console.log(sum.apply(context3, [8, 4]));