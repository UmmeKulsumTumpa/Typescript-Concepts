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
//# sourceMappingURL=func-code.js.map