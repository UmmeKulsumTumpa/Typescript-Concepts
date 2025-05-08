"use strict";
function someFunction(val) {
    const innerFunc = (someArgs) => {
        const storeArgs = someArgs;
    };
    return innerFunc;
}
const foolRes = someFunction("");
const boolRes = someFunction(true);
//# sourceMappingURL=conditional-types.js.map