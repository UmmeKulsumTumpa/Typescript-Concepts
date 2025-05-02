// the keyof operator takes an ibject type and 
// returns a union of its keys

type Coord = {
    x: number;
    y: number;  
}

type CoordKeys = keyof Coord; // "x" | "y"

