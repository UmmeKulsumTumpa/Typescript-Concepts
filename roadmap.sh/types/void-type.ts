// any function that has no explicit return types, is set to undefined
function testVoid(){
    console.log(`just testing that this function returns void by not returning anything explicitly`);
}

console.log(testVoid()); // undefined, it is returning undefined same as js
let val1 =  testVoid();


function testVoid2() : void{
    console.log(`This time it must show void as explicitly mentioned`);
}

console.log(testVoid2()); // undefined
let val2 = testVoid2();

if(typeof val1 == "undefined"){
    console.log(`the type of val1 is undefined`); // still becomes undefined
}

// the fact is that, i can't explicitly print void or feel the existance of void in ts

// we can't directly proof the existence of void
// as in js, there are no explicit type called void
// but what we can do, is given below:

let check: void = val2;
// let alsoCheck: undefined = val2; // error, Type 'void' is not assignable 'undefined'
let alsoCheck: void = val1; // but undefined can be stored as void
// so void is more generic

