
---

## 1. Mapped Types

### What Are They?

Mapped types allow you to create new types by transforming properties of existing ones. They iterate over keys of a type and apply modifications.([JavaScript With Syntax For Types.][2])

### Syntax

```ts
type NewType = {
  [K in keyof ExistingType]: Transformation;
};
```



### Example

```ts
type User = {
  name: string;
  age: number;
};

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
// Equivalent to:
// {
//   readonly name: string;
//   readonly age: number;
// }
```



### Use Cases

* Creating variations like `Partial<T>`, `Readonly<T>`, or `Required<T>`
* Transforming property types
* Generating types for APIs or forms([JavaScript With Syntax For Types.][3])

---

## 2. Conditional Types

### What Are They?

Conditional types enable types to be determined based on a condition, akin to ternary operators.([omid.dev][1])

### Syntax

```ts
type ResultType<T> = T extends Condition ? TrueType : FalseType;
```



### Example

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```



### Use Cases

* Type transformations based on conditions
* Creating utility types like `Exclude<T, U>` or `Extract<T, U>`
* Inferring types conditionally([JavaScript With Syntax For Types.][2], [Medium][4])

---

## 3. Literal Types

### What Are They?

Literal types represent exact values, not just general types.([JavaScript With Syntax For Types.][3])

### Example

```ts
type Direction = 'north' | 'south' | 'east' | 'west';

function move(dir: Direction) {
  // ...
}
```



### Use Cases

* Restricting values to specific options
* Creating discriminated unions
* Enhancing type safety for constants([Wikipedia][5], [Medium][6])

---

## 4. Template Literal Types

### What Are They?

Introduced in TypeScript 4.1, template literal types allow constructing string literal types by combining other types.([Instil][7])

### Syntax

```ts
type Greeting = `Hello, ${string}`;
```



### Example

```ts
type Colors = 'red' | 'blue';
type Shades = 'light' | 'dark';

type ColorVariants = `${Shades}-${Colors}`;
// Results in: 'light-red' | 'light-blue' | 'dark-red' | 'dark-blue'
```



### Use Cases

* Generating dynamic string types
* Creating keys for objects with patterned names
* Enhancing type safety in localization or theming systems([JavaScript in Plain English][8], [Medium][6])

---

## 5. Recursive Types

### What Are They?

Recursive types are types that refer to themselves, allowing representation of nested or hierarchical structures.

### Example

```ts
type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
interface JsonObject {
  [key: string]: JsonValue;
}
```



### Use Cases

* Modeling JSON structures
* Representing trees or linked lists
* Handling nested configurations or menus([DEV Community][9])

---

## Relationships and Differences with Basic Types

| Feature                 | Basic Types            | Advanced Types                           |                                                     |
| ----------------------- | ---------------------- | ---------------------------------------- | --------------------------------------------------- |
| **Flexibility**         | Limited                | High                                     |                                                     |
| **Use Cases**           | Simple data structures | Complex transformations and validations  |                                                     |
| **Learning Curve**      | Gentle                 | Steeper                                  |                                                     |
| **Type Safety**         | Basic checks           | Enhanced, with compile-time validations  |                                                     |
| **Code Expressiveness** | Moderate               | High, enabling DRY and maintainable code | ([Wikipedia][5], [Medium][6], [Stack Overflow][10]) |

---

Understanding and leveraging these advanced types can significantly enhance the robustness and maintainability of your TypeScript code. They provide powerful tools for modeling complex scenarios, ensuring type safety, and reducing runtime errors.

---
