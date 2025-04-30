interface  PaintOptions {
    shape: string;
    xPos?: number;
    yPos?: number;
}

// destructuring parameter in ts
// the function extract objects with properties like shape, xPos, yPos
function paintshape({shape, xPos = 0, yPos = 0}: PaintOptions){
    console.log(`x coordinates at: ${xPos}`);
    console.log(`y coordinates at: ${yPos}`);
}

paintshape({shape: "circle"}); // prints the default values of x and y Pos

// But an important note that, in destructuring object properties,
// ts/js hasn't yet introduced type annotation
// this is because the syntax already means something different in js

function drawShape({shape: Shape, xPos: number = 0}: PaintOptions){
    console.log(`x coordinates at: ${number}`); // renames the xPos as number and print the value of xPos
    // console.log(`y coordinates at: ${yPos}`);
}

// in the above syntax, it doesn't mean that shape is of type shape or
// xPos or yPos is of type number
// what they actually means:

// shape: shape -- get shape from the object, and call it shape inside the function
// xPos: number -- get xPos from the object, and call it number inside the function


drawShape({shape: "circle"});
