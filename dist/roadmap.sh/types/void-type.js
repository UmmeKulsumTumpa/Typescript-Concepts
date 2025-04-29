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
const cb = () => {
    console.log("Callback");
    return "hello";
};
let result = cb();
console.log(result);
console.log(typeof result);
function voidTest() { }
;
let val = voidTest();
console.log(typeof val);
//# sourceMappingURL=void-type.js.map