// 1. let, const, var scope difference
function scopeExample() {
  var a = 1;      // function-scoped
  let b = 2;      // block-scoped
  const c = 3;    // block-scoped and read-only

  if (true) {
    var a = 10;   // same function-level var
    let b = 20;   // new block-level let
    const c = 30; // new block-level const
    console.log("Inside block:", a, b, c);
  }

  console.log("Outside block:", a, b, c);
}
scopeExample();

// 2. Fruits array – get second fruit
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
function getSecondFruit() {
  return fruits[1];
}
console.log("Second fruit:", getSecondFruit());

// 3. Push and Pop array
function pushPopExample(arr) {
  arr.push("NewItem");
  arr.pop();
  return arr;
}
console.log("Push/Pop result:", pushPopExample([1, 2, 3]));

// 4. Map: Square each number
const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
  return arr.map(n => n * n);
}
console.log("Squared numbers:", squareNumbers(numbers));

// 5. Filter: Remove even numbers
function filterOdd(arr) {
  return arr.filter(n => n % 2 !== 0);
}
console.log("Odd numbers:", filterOdd([1, 2, 3, 4, 5, 6, 7]));

// 6. Object greeting
const person = {
  name: "Raj",
  age: 22,
  occupation: "Developer"
};
function greet(obj) {
  console.log(`Hello, I'm ${obj.name}, a ${obj.age}-year-old ${obj.occupation}.`);
}
greet(person);

// 7. Rectangle area
function calcArea(obj) {
  return obj.width * obj.height;
}
console.log("Area of rectangle:", calcArea({ width: 5, height: 10 }));

// 8. Object.keys()
function getKeys(obj) {
  return Object.keys(obj);
}
console.log("Object keys:", getKeys({ x: 1, y: 2, z: 3 }));

// 9. Merge two objects
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Merged object:", mergeObjects({ a: 1 }, { b: 2 }));

// 10. Sum using reduce
function sumNumbers(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
console.log("Sum of array:", sumNumbers([10, 20, 30, 40]));

