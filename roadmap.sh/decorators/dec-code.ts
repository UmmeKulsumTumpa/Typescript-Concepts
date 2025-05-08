// class decorators
/**
 * - Applied to the constructor of the class
 * - Can modify or replace the class constructor
 */

function LogClass(target: Function) {
    console.log(`Class ${target.name} is being created`);
}

@LogClass
class MyClass {
    constructor() {
        console.log(`MyClass Constructor`);
    }
}

const obj = new MyClass();

// method decorators

function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Called method ${propertyKey} with arguments:`, args);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

class MyClassMethod {
    @LogMethod
    greet(name: string) {
        console.log(`Hello, ${name}`);
    }
}

const obj1 = new MyClassMethod();
obj1.greet('Alice');

