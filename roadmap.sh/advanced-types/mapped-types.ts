// example: 1

type OptionFlags<Type> = {
    [Property in keyof Type]: boolean;
}

type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
}

type FeatureOptions = OptionFlags<Features>;
// it infers to similar: 
// type FeatureOption = {
//      darkMode: boolean,
//        newUserProfile: boolean;
// }

// we can also remove or add readonly and ?(optional) modifiers
// by setting - or + prefix
// if we don't use any prefix, + is assumed

// example: 2

type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property]; // removes the readonly modifiers
}

type LockedAccount = {
    readonly id: string;
    readonly name: string;
}

type UnlockedAccount = CreateMutable<LockedAccount>;

const acc1: UnlockedAccount = {id: "10", name: "Tumpa"};
const acc2: LockedAccount = {id: "20", name: "Kulsum"};

console.log(acc1);

acc1.id = "1307";

console.log(acc1); // the id will be changed, because it is now mutable

// acc2.id = "1300"; // error, because it is now readonly

// question is why use the mapped type? we can create another type which will not have any readonly property

// key remapping via as
// example: 3

// example ta bujhi ni...

// we can filter out keys 
// example: 4

type RemovedKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
}

interface Circle {
    kind: "Circle";
    radius: number;
}

type KindLessCircle = RemovedKindField<Circle>;

// const kindLessCircle: KindLessCircle = {kind: "Circle", radius: 10}; // error if you set the property kind for this Type

// arbitary union type
// example: 5

type EventConfig<Events extends {kind: string}> = {
    [E in Events as E["kind"]]: (event: E) => void;
}

type SquareEvent = {
    kind: "square",
    x: number,
    y: number,
}

type CircleEvent = {
    kind: "Circle",
    radius: number,
}

type Config = EventConfig<SquareEvent | CircleEvent>;
/**
 * type Config = {
 * square: (event: SquareEvent) => void;
 * circle: (event: CircleEvent) => void;
 * }
 */

