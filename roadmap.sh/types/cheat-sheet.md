

---

### ✅ **Primitive Types in TypeScript**

| Type       | Description                                                                 | JS Equivalent | Nullable? | Assignable To        | Example                                 |
|------------|-----------------------------------------------------------------------------|----------------|------------|------------------------|-----------------------------------------|
| `boolean`  | Represents `true` or `false`.                                               | ✅              | ❌         | `boolean`, `any`        | `let isDone: boolean = false;`         |
| `number`   | Floating point numbers, integers, etc.                                      | ✅              | ❌         | `number`, `any`         | `let score: number = 98;`              |
| `string`   | Textual data                                                                | ✅              | ❌         | `string`, `any`         | `let name: string = "Tumpa";`          |
| `void`     | Used for functions that do not return a value.                             | ❌ (`undefined` at runtime) | N/A       | Only assignable to `undefined` or ignored | `function log(): void {}`             |
| `null`     | Explicitly represents no value                                              | ✅              | ✅         | Depends on `strictNullChecks` | `let x: null = null;`                  |
| `undefined`| A variable not assigned a value or a function with no return                | ✅              | ✅         | Depends on `strictNullChecks` | `let y: undefined = undefined;`        |
| `any`      | Opts out of type checking                                                   | ✅              | ✅         | Everything              | `let value: any = "hello"; value = 5;` |
| `unknown`  | Like `any`, but safer—must be checked before use                            | ✅              | ✅         | Must narrow before use   | `let x: unknown = 10;`                 |
| `never`    | Represents values that never occur (e.g. function never returns)            | ❌              | ❌         | Assignable to nothing    | `function fail(): never { throw "err"; }` |

---

### ✅ **Object Types in TypeScript**

| Type        | Description                                                        | Compile to JS? | Example |
|-------------|--------------------------------------------------------------------|----------------|---------|
| `object`    | Non-primitive values (everything except `string`, `number`, etc.)  | ✅              | `let user: object = { name: "Tumpa" };` |
| `array`     | Collection of elements                                              | ✅              | `let nums: number[] = [1, 2, 3];`       |
| `tuple`     | Fixed-length, typed array                                           | ❌ (compiles to normal array) | `let t: [number, string] = [1, "a"];` |
| `interface` | Describes object shape, supports extension                         | ❌              | `interface User { name: string }`       |
| `class`     | ES6 class with optional TS features like access modifiers           | ✅              | `class User { constructor(public name: string) {} }` |
| `enum`      | A set of named constants, numeric or string                         | ❌ (compiled as object) | `enum Direction { Up, Down }`         |

---

### 🧠 Additional Notes

#### ⚙️ Runtime Behavior
| Type      | JS Equivalent | Runtime Notes |
|-----------|----------------|---------------|
| `void`    | Compiles to `undefined` | Treated like `undefined` at runtime |
| `never`   | Not emitted unless used in control flow | Used for exhaustive checks |
| `enum`    | Compiles to a JS object with reverse mapping (for numeric enums) |
| `tuple`   | Compiles to array | Type info is lost after compilation |

#### 📌 Special Types
- `any`: Disables type checking – dangerous if overused.
- `unknown`: Requires type narrowing – safest alternative to `any`.
- `void`: Used mainly in return types; you can't assign a value of type `void` other than `undefined`.
- `never`: Used in cases where code cannot continue (infinite loops, errors).

---
