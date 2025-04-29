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
function printCoord(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
printCoord({ x: 8, y: 9 });
function printFullName(obj) {
    console.log(`full name: ${obj.first} ${obj.last}`);
}
printFullName({ first: "Tumpa" });
//# sourceMappingURL=type-annotation.js.map