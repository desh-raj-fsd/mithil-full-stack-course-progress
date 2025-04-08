//outdated method

let computer = { cpu: 12 };
let lenovo = { screen: "HD", __proto__: computer };
let tomHardware = {};

//object.__proto__  to see property of prototype

// console.log(lenovo.__proto__);

//new method
let genericCar = { tyres: 4 };
let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla` , tesla.tyres)
console.log(Object.getPrototypeOf(tesla));
