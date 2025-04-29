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

// anonymus function

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



