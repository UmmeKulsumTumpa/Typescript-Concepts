"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogClass(target) {
    console.log(`Class ${target.name} is being created`);
}
let MyClass = class MyClass {
    constructor() {
        console.log(`MyClass Constructor`);
    }
};
MyClass = __decorate([
    LogClass
], MyClass);
const obj = new MyClass();
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Called method ${propertyKey} with arguments:`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
class MyClassMethod {
    greet(name) {
        console.log(`Hello, ${name}`);
    }
}
__decorate([
    LogMethod
], MyClassMethod.prototype, "greet", null);
const obj1 = new MyClassMethod();
obj1.greet('Alice');
//# sourceMappingURL=dec-code.js.map