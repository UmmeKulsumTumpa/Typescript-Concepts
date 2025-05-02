"use strict";
function printAll(strs) {
    if (typeof strs === "object" && strs !== null) {
        for (const str of strs) {
            console.log(str);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
function anotherPrintAll(strs) {
    if (typeof strs === "object") {
        for (const str of strs) {
            console.log(str);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
//# sourceMappingURL=typeof-guards.js.map