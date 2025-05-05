// function type expression

function greeter(func: (a: string) => void){
    func("Hello world"); // call the func function with a string parameter
}

function printToConsole(s: string){
    console.log(s);
}

greeter(printToConsole);

// we also can use the function type separately for reuse
type GreetFunction = (a: string) => void;
function greeter1(func: GreetFunction){
    func("Hello World!");
}

// in js, functions can have properties
// but the function type expression doesn't allow for declaring properties
// so if we want to describe somethig callable with properties, we can use a call signature in an object type

// call signatures
type DescribableFunction = {
    description: string;
    (someArgs: number) : boolean;
};

function doSomethingFunc(func: DescribableFunction){
    console.log(func.description + " returned " + func(6));
}

function myFunc(nums: number){
    return nums > 3;
}

myFunc.description = "default description";

doSomethingFunc(myFunc);

// construct signatures
// type SomeCons = {
//     new (s: string): Date;
// }

interface CallOrConstruct{
    (n?: number): string; // callable sign
    new (s: string): Date; // construct sign
}

function GenerateDate(coc: CallOrConstruct){
    console.log(coc(101)); // string, returns a string of Date
    console.log((new coc("10"))); // object, return a date object 
}

GenerateDate(Date);

// optional parameters
function optionalPara(num?: number){
    console.log(typeof num);
}

optionalPara(10); // number
optionalPara(); // undefined, though the parameter is specified as number
// but the parameter will actually have type: number | undefined
// because undefined para in js gets the value undefined
optionalPara(undefined); // OK, no error

// ------------------------------------------------
// a very good mis-conception with optional parameters in callbacks
function myForEach(arr: any[], callback: (arg: any, index?: number) => void){
    for (let i=0; i<arr.length; i++){
        callback(arr[i]);
    }
}

myForEach([1,2,3], (a, i) => {
    // console.log(a, i.toFixed()); // we can't directly call i as it may also be not defined
    // so it may also be undefined
    // for safety you can use the below syntax, but it is not recommended to use optional parameter in callbacks
    console.log(a, i?.toFixed);
});

// also we can call a function(callbacks only) with fewer parameters, even if we don't use ? sign
// it is allowed in js/ts
// a function with fewer parameter is compartible with a function type that expects more parameters
// the extra ones are ignored

function anyParam(a: number, b: string, c: Object){
    console.log(a);
    console.log(b);
    console.log(c);
}

// anyParam(10); // this will certainlt give an error in ts

// good example

function runCallBack(cb: (x: number, y: number) => void){
    cb(1, 2);
}

runCallBack((x: number) => console.log(x)); // logs: 1, compatible, ignores the extra param


// rest params and args
// rest params
function restMultiply(num: number, ...m: number[]){
    return m.map(x => num * x);
}

const a = restMultiply(5, 1, 2, 3, 4, 5);

console.log(a);

// rest args
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2); // kinda concatenate type, joins the two arrays
console.log(arr1);

// parameter destructuring
function sumFunc({a, b, c}: {a: number, b: number, c: number}){
    return a+b+c;
}

console.log(sumFunc({a: 1, b: 3, c: 4})); // so the names must be the same as teh function definition params list.

// return type void
type voidFunc = () => void; // js has no type annotation

const f1: voidFunc = () => {
    return true;
}

const f2: voidFunc = () => true;

const f3: voidFunc = function() {
    return true;
}

console.log(typeof f1());
console.log(f2());
console.log(f3());

const resf1 = f1();

if(typeof resf1 === "undefined")
    console.log(`f1 returned undefined`);
else if(typeof resf1 === "boolean")
    console.log(`f1 returned boolean`);

// the below code will compiled to undefined in case of void return type
type voidFunc2 = () => void;

const f11: voidFunc2 = () => {
    return true;
}

const resf11 = f11();
console.log(typeof resf11); // undefined


