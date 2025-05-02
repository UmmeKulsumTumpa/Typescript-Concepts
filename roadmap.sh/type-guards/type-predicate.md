
---

## 🔹 What is a **type predicate**?

A **type predicate** is a special return type in a function that **narrows** the type of a variable in TypeScript.
It gives you **manual control** over how TypeScript narrows a union or broader type in your own logic.

---

### ✅ Syntax

```ts
function yourFunction(param: SomeUnion): param is NarrowedType
```

* `param` must match the function parameter.
* `param is NarrowedType` is the **type predicate**.
* The function returns a boolean but also tells TypeScript:
  *“If this function returns true, then `param` is of type `NarrowedType`.”*

---

### 🐠 Example from the content

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

Explanation:

* `pet` is a parameter of type `Fish | Bird`
* `(pet as Fish).swim !== undefined` is a runtime check to see if it behaves like a `Fish`
* The return type `pet is Fish` tells TypeScript that this function is a **type guard**

---

## 💡 Usage Example

```ts
let pet = getSmallPet(); // pet: Fish | Bird

if (isFish(pet)) {
  pet.swim(); // OK, TypeScript knows pet is Fish
} else {
  pet.fly(); // OK, TypeScript knows pet is Bird
}
```

✅ Inside the `if`, `pet` is `Fish`
✅ Inside the `else`, `pet` is narrowed to `Bird`

---

## 🧪 Filtering Arrays with Type Predicates

```ts
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
```

* `filter` uses the return value of `isFish` to keep only those items that are `Fish`.
* Because `isFish` is a type predicate, the filtered array is automatically inferred as `Fish[]`.

Alternative:

```ts
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
```

* Manual assertion, not necessary if your predicate is correct.

Custom logic inside predicate:

```ts
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
```

✅ This shows you can use **inline type predicates** using arrow functions.
✅ Use `pet: Type => pet is SubType` syntax inline.

---

## 🏛️ Use in Classes

You can also use `this is SomeClass` in **class methods** to narrow based on instance checks:

```ts
class Dog {
  bark() {}
}

class Cat {
  meow() {}
}

type Pet = Dog | Cat;

function isDog(pet: Pet): pet is Dog {
  return pet instanceof Dog;
}
```

You can also write:

```ts
class Animal {
  isCat(): this is Cat {
    return this instanceof Cat;
  }
}
```

---

## 🔁 Summary: When to Use Type Predicates

Use type predicates when:

* You want to manually check and narrow types
* TypeScript’s automatic narrowing isn’t enough
* You need to write reusable, precise type guards

---

## 📚 All Possible Use Cases

### 1. Narrowing union types:

```ts
function isString(x: unknown): x is string {
  return typeof x === "string";
}
```

### 2. With interfaces:

```ts
interface Square { kind: "square"; size: number; }
interface Circle { kind: "circle"; radius: number; }

function isSquare(shape: Square | Circle): shape is Square {
  return shape.kind === "square";
}
```

### 3. Filtering arrays:

```ts
const values: (string | number)[] = ["a", 1, "b", 2];
const stringsOnly: string[] = values.filter((v): v is string => typeof v === "string");
```

### 4. Class instance checks:

```ts
function isDate(val: any): val is Date {
  return val instanceof Date;
}
```

### 5. Inside class methods:

```ts
class Animal {
  isBird(): this is Bird {
    return this instanceof Bird;
  }
}
```

---

## ⚠️ Things to Keep in Mind

* Type predicates must refer to a parameter (or `this`)
* Only work at runtime (you must check a real property or behavior)
* Don't confuse with type assertions (`as Type`) — predicates return a boolean and narrow types

---

