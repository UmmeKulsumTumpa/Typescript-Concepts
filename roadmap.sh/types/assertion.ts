// tells the ts compiler to treat a value as a specific type

let someValue = "hello" as string;
let strLen: number = (someValue as string).length; // we are telling the compiler that someValue is a string


