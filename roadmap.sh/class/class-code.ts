class PointClass{
    x = 0;
    y = 0;
}

const pt = new PointClass();
console.log(pt.x, pt.y); // 0, 0 -> prints the default value

// pt.x = "0"; // error

// with the readonly property, presents assignments to the field of outside of the constructor

class DemonstrateReadonly{
    readonly name: string = "tumpa";

    constructor(otherName?: string){
        if(otherName !== undefined){
            this.name = otherName;
        }
    }

    // errFunc(){
    //     this.name = "will get error"; // error, cannot assign to property because it is readonly
    // }
}

const demoReadonly = new DemonstrateReadonly();
console.log(`Without modifying the readonly in constructor: ${demoReadonly.name}`); // tumpa

const demoReadonly2 = new DemonstrateReadonly("kulsum");
console.log(`Without modifying the readonly in constructor: ${demoReadonly2.name}`); // kulsum

// demoReadonly2.name = "error"; // can't assign to any readonly property

// constructor over-loading

class DemoPoint{
    x: number;
    y: number;

    // constructor overloads
    constructor(x: number, y: number);
    constructor(xy: string);
    constructor(x: string | number, y: number = 0){
        if(typeof x === "number"){
            this.x = x;
        }
        else{
            this.x = 0;
            console.log(`Hello ${x}`);
        }

        this.y = y;
    }
}

const pt1 = new DemoPoint("10");
console.log(pt1.x, pt1.y); // 0, 0


