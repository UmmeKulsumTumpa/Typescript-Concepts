"use strict";
function example(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function printAllWithEquality(strs) {
    if (strs !== null) {
        if (typeof strs !== null) {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs.toUpperCase());
        }
    }
}
function multiplyValue(container, factor) {
    if (container.value != undefined) {
        console.log(container.value);
        container.value *= factor;
    }
    console.log(container.value);
}
console.log(null == undefined);
console.log(null == null);
console.log(null != undefined);
console.log(null === undefined);
multiplyValue({ value: undefined }, 2);
//# sourceMappingURL=equality-narrowing.js.map