function makeDate(timeStamp: number): Date; // function declaration
function makeDate(m: number, d: number, y: number): Date; // function declaration

// function definition
function makeDate(mOrTimeStamp: number, d?: number, y?: number): Date{
    if(d != undefined && y != undefined){
        return new Date(y, mOrTimeStamp, d);
    }
    else {
        return new Date(mOrTimeStamp);
    }
}

const d1 = makeDate(1212);
const d2 = makeDate(5, 4, 4);

console.log(d1);
console.log(d2);
