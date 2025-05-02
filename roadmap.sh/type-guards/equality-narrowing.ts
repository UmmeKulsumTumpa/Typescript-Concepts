function example(x: string | number, y: string | boolean){
    if(x === y){
        // now the both is string type in common
        // now we know that both are string
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    }
    else{
        console.log(x); // can be a number/string
        console.log(y); // can be a boolean/string
    }
}

// specific check with null
function printAllWithEquality(strs: string | string[] | null){
    if (strs !== null){ // this filters out null, not empty string or undefined
        // now compiler knows that strs is: string or string[]
        if(typeof strs !== null){
            for (const s of strs){
                console.log(s);
            }
        }
        else if(typeof strs === "string"){
            console.log(strs.toUpperCase());
        }
    }
}

// now we will use the loosely equality check to exclude both null and undefined
interface Container{
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number){
    if(container.value != undefined){ // excludes both null and undefined
        // here we can use both null and undefined,
        // any of them will exclude both!
        console.log(container.value);
        container.value *= factor;
    }
    console.log(container.value);
}

// null and undefined are of different types 
// but their values are of same 

console.log(null == undefined); // true
console.log(null == null); // true
console.log(null != undefined); // false
console.log(null === undefined); // false, caus strict checks the types too!

multiplyValue({value: undefined}, 2);

