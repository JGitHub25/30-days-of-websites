function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }

  return inner;
}

// const fun = outer();

// console.log(fun());
// console.log(fun());
// console.log(fun());

let numero = 0;
function normal() {
  numero++;
  return numero;
}

function logger() {
  console.log(normal());
  console.log(normal());
  console.log(normal());
}

// logger();

const sayHiTo = function saludar(name = "Paco") {
  console.log(`Hi, ${name}!`);
};
sayHiTo("Pepe");
sayHiTo();

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const john = {
  name: "john",
  "last name": "Perez",
  age: 56,
  saludar() {
    console.log(`Hi, I am ${this.name}`);
  },
};
console.log(john);
john.saludar();
john.job = "Doctor";
console.log(john);
const obj = { ...john, job: "Doctor" };
console.log(obj);
console.log(john["last name"]);
delete john.name;
console.log(john);
obj.saludar = function () {
  console.log(`${this.name} ${this["last name"]}`);
};

obj.saludar();
