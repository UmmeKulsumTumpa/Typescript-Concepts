// a variable that can be one of several types
let value: string | number | boolean;

// console.log(value); // in ts we can't use variable before assigning a value
value = "hello"; // ok
value = 42; // ok
value = true; // ok
// value = null; // error: Type 'null' is not assignable to type 'string | number | boolean'.

// function with union type parameter
function printID(id: string | number) {
    console.log(id); // ok
    // console.log(id.toUpperCase()); // error, because now the compiler know that i can be a number or a string
    // so we have to say the compiler before performing specific operations of any type
    // this is called type narrowing

    if(typeof id === "string") {
        console.log(id.toUpperCase()); // ok
    }
    else {
        console.log(id+100); // ok
    }
}
printID("hello"); // ok
printID(42); // ok
// printId(true); // error


