"use strict";
function greeter(func) {
    func("Hello world");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function greeter1(func) {
    func("Hello World!");
}
function doSomethingFunc(func) {
    console.log(func.description + " returned " + func(6));
}
function myFunc(nums) {
    return nums > 3;
}
myFunc.description = "default description";
doSomethingFunc(myFunc);
function GenerateDate(coc) {
    console.log(coc(101));
    console.log((new coc("10")));
}
GenerateDate(Date);
function optionalPara(num) {
    console.log(typeof num);
}
optionalPara(10);
optionalPara();
optionalPara(undefined);
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
myForEach([1, 2, 3], (a, i) => {
    console.log(a, i === null || i === void 0 ? void 0 : i.toFixed);
});
function anyParam(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
function runCallBack(cb) {
    cb(1, 2);
}
runCallBack((x) => console.log(x));
function restMultiply(num, ...m) {
    return m.map(x => num * x);
}
const a = restMultiply(5, 1, 2, 3, 4, 5);
console.log(a);
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1);
function sumFunc({ a, b, c }) {
    return a + b + c;
}
console.log(sumFunc({ a: 1, b: 3, c: 4 }));
const f1 = () => {
    return true;
};
const f2 = () => true;
const f3 = function () {
    return true;
};
console.log(typeof f1());
console.log(f2());
console.log(f3());
const resf1 = f1();
if (typeof resf1 === "undefined")
    console.log(`f1 returned undefined`);
else if (typeof resf1 === "boolean")
    console.log(`f1 returned boolean`);
const f11 = () => {
    return true;
};
const resf11 = f11();
console.log(typeof resf11);
//# sourceMappingURL=func-code.js.map