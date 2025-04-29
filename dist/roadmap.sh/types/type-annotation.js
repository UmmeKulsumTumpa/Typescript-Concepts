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
function aliasPrintCoord(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
aliasPrintCoord({ x: 10, y: 20 });
function printId(id) {
    console.log("Your id is: " + id);
}
;
printId(1307);
printId("1307");
function idPrint(id) {
}
function idPrint2(id) {
    if (typeof id === "string") {
        console.log(`UpperCase ID: ${id.toUpperCase()}`);
    }
    else {
        console.log(`${id} % 1300 = ${id % 1300}`);
    }
}
idPrint2(1307);
idPrint2("idwillbeuppercase");
//# sourceMappingURL=type-annotation.js.map