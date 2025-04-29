"use strict";
let myName = "Tumpa";
let anotherName = "Kulsum";
function greet(name) {
    console.log(`Hello, ${name.toUpperCase()}!!`);
}
greet(myName);
function add(a, b) {
    return a + b;
}
add(5, 9);
const fruits = ["Apple", "Orange", "Mango"];
fruits.forEach(function (ele) {
    console.log(ele);
});
fruits.forEach((ele) => {
    console.log(`arrow: ${ele}`);
});
//# sourceMappingURL=type-annotation.js.map