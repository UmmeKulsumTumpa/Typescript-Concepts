"use strict";
let value;
value = "hello";
value = 42;
value = true;
function printID(id) {
    console.log(id);
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id + 100);
    }
}
printID("hello");
printID(42);
//# sourceMappingURL=union.js.map