// typo problem

const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    bleu: [0, 0, 255], // typo: should be blue
};

// to fic this, we have two options:
// 1. use a type annotation
// 2. using satisfies operator

// option1 : type annotation
type Colors = "red" | "green" | "blue";
type RGB = [number, number, number];

const palette1: Record<Colors, string | RGB> = {
    red: [255, 0, 0],
    green: "#00ff00",
    // bleu: [0, 0, 255], // typo caught by the compiler
    blue: [0, 0, 255],
};
// now the new problem is that green pallete is inferred as string | RGB a union

// palette1.green.toUpperCase(); 
// if we want to use the string methods, we should first narrow the type
if (typeof palette1.green === "string") {
    palette1.green.toUpperCase(); // now we can use the string methods
}
// but this is not ideal, we want to use the string methods without narrowing the type

// option2 : using satisfies operator
const palette2 = {
    red: [255, 0, 0],
    green: "#00ff00",
    // bleu: [0, 0, 255], // typo: should be blue
    blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>; 

const greenCustomized = palette2.green.toUpperCase(); // now it works without narrowing the type


// so when to use the satisfies operator?
// - type safety
// - keep precise type for each property
// - avoid losin the power of type inference

