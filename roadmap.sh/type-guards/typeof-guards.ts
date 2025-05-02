// example: 1

// remove the comments and see what error you get from the compiler!!!
// function printAll(strs: string | string[] | null){
//     if(typeof strs === "object"){
//         // in js, typeof null === object
//         // and null is not iterable
//         // so before using the for...of, we must check the object is not null
//         for (const str of strs){ // error: strts is possibly null
//             console.log(str); // ok     
//         }
//     }
//     else if (typeof strs === "string"){
//         console.log(strs);
//     }
// }

// solution for example 1
function printAll(strs: string | string[] | null){
    if(typeof strs === "object" && strs !== null){
        // now that we hav e added the null checking
        // so we won't get the error
        for (const str of strs){
            console.log(str); // ok     
        }
    }
    else if (typeof strs === "string"){
        console.log(strs);
    }
}

// another solution to the above problem: using the ! - non-null assertion operator
function anotherPrintAll(strs: string | string[] | null){
    if(typeof strs === "object"){
        for (const str of strs!){ // added the non-null operator
            console.log(str); // ok     
        }
    }
    else if (typeof strs === "string"){
        console.log(strs);
    }
}
