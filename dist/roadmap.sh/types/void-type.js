"use strict";
function testVoid() {
    console.log(`just testing that this function returns void by not returning anything explicitly`);
}
console.log(testVoid());
let val1 = testVoid();
function testVoid2() {
    console.log(`This time it must show void as explicitly mentioned`);
}
console.log(testVoid2());
let val2 = testVoid2();
if (typeof val1 == "undefined") {
    console.log(`the type of val1 is undefined`);
}
let check = val2;
let alsoCheck = val1;
//# sourceMappingURL=void-type.js.map