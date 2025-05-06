"use strict";
class PointClass {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const pt = new PointClass();
console.log(pt.x, pt.y);
class DemonstrateReadonly {
    constructor(otherName) {
        this.name = "tumpa";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
}
const demoReadonly = new DemonstrateReadonly();
console.log(`Without modifying the readonly in constructor: ${demoReadonly.name}`);
const demoReadonly2 = new DemonstrateReadonly("kulsum");
console.log(`Without modifying the readonly in constructor: ${demoReadonly2.name}`);
class DemoPoint {
    constructor(x, y = 0) {
        if (typeof x === "number") {
            this.x = x;
        }
        else {
            this.x = 0;
            console.log(`Hello ${x}`);
        }
        this.y = y;
    }
}
const pt1 = new DemoPoint("10");
console.log(pt1.x, pt1.y);
class Sonar {
    ping() {
        console.log("ping!");
    }
}
class NameCheck {
    check(s) {
        return s.toLowerCase() === "ok";
    }
}
//# sourceMappingURL=class-code.js.map