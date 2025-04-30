// export {};
// alias is to give a specific type
type userId = number;
let id: userId = 1307; // we could use the type number here, but the userId seems more sepcific here

// object type alias
// makes the object reusable
// we can use the same template for multiple objects

type User = {
    name: string,
    id: userId,
}

const user1: User = {
    name: "Tumpa",
    id: 1307,
}

// union type alias
type Status = "success" | "error" | "loading";

let status1: Status = "success";

// function type aliases
type Greet  = (name: string) => string;
const greet1: Greet = (name) => `Hello ${name}`; // so that 

// recursive alis


