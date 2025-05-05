"use strict";
function makeDate(mOrTimeStamp, d, y) {
    if (d != undefined && y != undefined) {
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
//# sourceMappingURL=overload-func.js.map