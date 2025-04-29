// -------------------------------------------
// type annotation on variable
// -------------------------------------------

// type annotation will always go after the thing being typed
let myName: string = "Tumpa";

// no type annotation needed, anotherName inferred as type String
let anotherName = "Kulsum";

// anotherName = 20; // gives error, "Type number is not assignable to type string"

// -------------------------------------------
// type annotation on function
// -------------------------------------------

// parameter type annotation
function greet(name: string){
    console.log(`Hello, ${name.toUpperCase()}!!`);
}

greet(myName);
// greet(40); // would be a runtime error

// return type annotation
// though a we don't need return type annotation
// ts will infer the function's return type based on the return statement
function add(a: number, b: number): number{
    // return "a"; // gives error
    return a+b;
}

add(5, 9);

// -------------------------------------------
// // anonymous function
// -------------------------------------------

// contextual typing: the context that the function occurs within inform what type it should have
// for anonymous function, contextual typing happens

const fruits = ["Apple", "Orange", "Mango"];

fruits.forEach(function (ele){
    console.log(ele);
});

// contextual typing also happens to arrow function
fruits.forEach((ele) => {
    console.log(`arrow: ${ele}`);
});

// the parameter's type annotation is an object type
// we can use both , or ; to seperate the properties

function printCoord(pt: {x: number, y: number}){
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}

printCoord({x:8, y:9});

// -------------------------------------------
// optional properties
// -------------------------------------------
// to specify a property to be optional, add  a ? after the property name

function printFullName(obj: {first: string, last?: string}){
    console.log(`full name: ${obj.first} ${obj.last}`);
}

printFullName({first: "Tumpa"}); // now we have the flexibility not to specify the last name
// but inside the function, it is set undefined if we don't pass it

// -------------------------------------------
// type aliases
// -------------------------------------------

type Point = {
    x: number,
    y: number,
};

function aliasPrintCoord(pt: Point){
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}

aliasPrintCoord({x: 10, y: 20});


// -------------------------------------------
// union types
// -------------------------------------------

function printId(id: string | number,){
    console.log("Your id is: " + id);
};

printId(1307); // OK
printId("1307"); // OK
// printId({myId: 1307}); // error, cause the id can only be string or number,
// so passing an object will through an error

// what will we do when we are setting union for a parameter
// example: 1

function idPrint(id: number | string){
    // console.log(id.toUpperCase()); // we can't use only string property when we declare the parameter acceptable as both string and number
    // we must use something that are both compatible for all the types of union members
}

// example: 2
// the solution to the above problem is to narrow the union with code
function idPrint2(id: number | string){
    if(typeof id === "string"){
        // for this block, the id will be treated as string
        console.log(`UpperCase ID: ${id.toUpperCase()}`);
    }
    else{
        // for this block, the id will be treated as number
        console.log(`${id} % 1300 = ${id % 1300}`);
    }
}

idPrint2(1307); //
idPrint2("idwillbeuppercase");


