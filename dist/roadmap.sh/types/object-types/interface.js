"use strict";
function paintshape({ shape, xPos = 0, yPos = 0 }) {
    console.log(`x coordinates at: ${xPos}`);
    console.log(`y coordinates at: ${yPos}`);
}
paintshape({ shape: "circle" });
function drawShape({ shape: Shape, xPos: number = 0 }) {
    console.log(`x coordinates at: ${number}`);
}
drawShape({ shape: "circle" });
//# sourceMappingURL=interface.js.map