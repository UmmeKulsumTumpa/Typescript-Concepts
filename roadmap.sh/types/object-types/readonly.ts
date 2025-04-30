// example: 1
interface SomeType {
    readonly prop: string;
}

function doSomething(obj: SomeType){
    console.log(`prop has the value ${obj.prop}`);

    // obj.prop ="Changed"; // error, can only read not able to write
}

// readonly only means that we can't reassign teh property, but it doesn't mean complete frozen

// example: 2
// inner values can still be changed
// freezes only the property, not the whole object
interface Home{
    readonly resident: {
        name: string,
        age: number,
    }
}

function visitForBirthday(home: Home){
    home.resident.age++; // increment the age property inside the readonly value
}

// example: 3

// we can't reassign the readonly property
function evict(home: Home){
    // home.resident = {
    //     name: "Tumpa",
    //     age: 22
    // }; // it will give error, because we are now reassigning the whole object
}


