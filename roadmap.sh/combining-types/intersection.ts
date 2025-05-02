// combine multiple types into one
// requiring a value to satisfy all types simultaneously
// when we interserct types, the order of the types doesn't matter

// intersection type creates a new type that has all properties of the combined types
// commonly used with interfaces or object types to merger their properties

// example: combining two interfaces
interface HasName {
    name: string;
}

interface HasAge{
    age: number;
}

// intersection type
type Person = HasName & HasAge;

const person1: Person ={
    name: "Tumpa",
    age: 22,
} // valid

// const invalidPerson: Person = {
//     name: "Kulsum",
// }; // error, property age is missing

// example: intersection with function types

type Log = (message: string) => void;
type Alert = (message: string) => void;

type Logger = Log & Alert;

const logger: Logger = (message: string) => {
    console.log(message);
    alert(message);
} // valid




