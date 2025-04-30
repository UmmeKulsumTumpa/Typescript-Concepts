
---

# 📘 TypeScript `unknown` – Complete Notes

---

## 🔹 What is `unknown`?

- `unknown` is a **TypeScript-exclusive** type introduced in v3.0.
- It represents a value **that could be anything**, just like `any`, but is **safer**.
- It is the **type-safe counterpart to `any`**.

```ts
let value: unknown;
value = 5;       // ✅ okay
value = "hello"; // ✅ okay
value = true;    // ✅ okay
```

---

## 🔹 Why use `unknown` over `any`?

| Feature       | `any`                        | `unknown`                            |
|---------------|-------------------------------|--------------------------------------|
| Assign anything? | ✅ Yes                      | ✅ Yes                                |
| Use anything on the value? | ✅ Yes (unsafe)         | ❌ No (must narrow the type first)   |
| Safe?         | ❌ No – skips type checking   | ✅ Yes – forces type checking         |

---

## 🔹 Rules and Restrictions of `unknown`

### 1. ✅ **Can assign any type to `unknown`**
```ts
let x: unknown;

x = 10;
x = "string";
x = { a: 1 };
x = [1, 2, 3];
x = null;
x = undefined;
```

---

### 2. ❌ **Cannot use properties/methods on an `unknown` variable directly**
```ts
let value: unknown;

// value.trim();       ❌ Error
// value.toFixed(2);   ❌ Error

if (typeof value === "string") {
  console.log(value.trim());  // ✅ OK – type narrowed
}
```

---

### 3. ❌ **Cannot assign `unknown` directly to other specific types (without checks or assertion)**

```ts
let value: unknown;
let str: string;

// str = value;           ❌ Error: Type 'unknown' is not assignable to type 'string'

if (typeof value === "string") {
  str = value;           // ✅ OK
}
```

---

## 🔹 Type Narrowing with `unknown`

Before using an `unknown` value, you **must narrow** its type using:

### ✅ `typeof`
```ts
if (typeof value === "number") {
  console.log(value.toFixed(2));
}
```

### ✅ `instanceof`
```ts
if (value instanceof Date) {
  console.log(value.getFullYear());
}
```

### ✅ `Array.isArray()`
```ts
if (Array.isArray(value)) {
  console.log(value.length);
}
```

### ✅ Type assertion
```ts
console.log((value as string).toUpperCase());
```

---

## 🔹 `unknown` vs Other Types (Comparison Table)

| Expression              | Result    |
|-------------------------|-----------|
| `unknown` ⊇ all types   | ✅ Yes     |
| All types ⊆ `unknown`   | ❌ No      |
| `unknown` assign to any specific type? | ❌ No (without narrowing/assertion) |
| Assign to `any` or `unknown`? | ✅ Yes |

---

## 🔹 Function Return Type as `unknown`

```ts
function parseJson(json: string): unknown {
  return JSON.parse(json);
}

const data = parseJson('{"name":"John"}');

// data.name; ❌ Error — unknown type, must narrow or assert
```

---

## 🔹 `unknown` in Union and Intersection Types

### In **unions**, `unknown` absorbs all other types:

```ts
type A = unknown | string;  // same as unknown
```

### In **intersections**, `unknown` acts as identity:

```ts
type B = unknown & string;  // same as string
```

---

## 🔹 Use Cases of `unknown`

### 1. Safer `any` in public APIs
```ts
function handleInput(input: unknown) {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  }
}
```

### 2. Deserializing data (like from JSON)
```ts
function parseData(json: string): unknown {
  return JSON.parse(json);
}
```

### 3. Handling data from untyped sources
```ts
let userInput: unknown = getExternalData(); // e.g., from `any`, 3rd-party lib
```

---

## 🔹 Other Behavior Highlights

### 1. `unknown` is not comparable directly
```ts
let x: unknown;
let y: unknown;

// console.log(x === y); ✅ Works at runtime (JS allows it), but TS may not infer anything useful
```

### 2. Type guards make `unknown` powerful
```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

---

## ✅ Best Practices

- Use `unknown` when you're working with **dynamic data** (e.g., APIs, user input).
- **Always narrow the type** before using the value.
- Prefer `unknown` over `any` for safety in large codebases.
- Avoid using `unknown` for internal variables unless strictly needed.

---

---

### ✅ **1. Intersection Types with `unknown`**

```ts
type T00 = unknown & null; // null
type T01 = unknown & undefined; // undefined
type T02 = unknown & null & undefined; // null & undefined (which becomes never)
type T03 = unknown & string; // string
type T04 = unknown & string[]; // string[]
type T05 = unknown & unknown; // unknown
type T06 = unknown & any; // any
```

**Explanation**:
- In intersection types (`&`), `unknown` behaves like a **neutral type**.
- The result is usually the **other type**, unless the types are mutually exclusive.

| Expression | Result        | Why? |
|------------|---------------|------|
| `unknown & null` | `null` | `null` is more specific than `unknown`. |
| `unknown & undefined` | `undefined` | Same reason. |
| `unknown & null & undefined` | `never` | Nothing can be both `null` and `undefined` at the same time. |
| `unknown & string` | `string` | It keeps the specific type. |
| `unknown & any` | `any` | `any` wins over everything. |
| `unknown & unknown` | `unknown` | Same type. |

---

### ✅ **2. Union Types with `unknown`**

```ts
type T10 = unknown | null; // unknown
type T11 = unknown | undefined; // unknown
type T12 = unknown | null | undefined; // unknown
type T13 = unknown | string; // unknown
type T14 = unknown | string[]; // unknown
type T15 = unknown | unknown; // unknown
type T16 = unknown | any; // any
```

**Explanation**:
- In unions (`|`), `unknown` is **absorbing**—it hides all other types.
- Except for `any`, which always wins.

---

### ✅ **3. Generics and `unknown`**

```ts
type T20<T> = T & {}; // T
type T21<T> = T | {}; // T | {}
type T22<T> = T & unknown; // T
type T23<T> = T | unknown; // unknown
```

**Explanation**:
- `T & {}` just removes `null` and `undefined`, but keeps structure.
- `T & unknown` is always just `T` (neutral type in intersections).
- `T | unknown` is always `unknown` (absorbs anything).

---

### ✅ **4. Conditional Types with `unknown`**

```ts
type T30<T> = unknown extends T ? true : false; // Deferred
type T31<T> = T extends unknown ? true : false; // Deferred
type T32<T> = never extends T ? true : false; // true
type T33<T> = T extends never ? true : false; // Deferred
```

**Explanation**:
- Conditional types involving generic `T` are **deferred** (evaluated later).
- `never extends T` is always `true`, because `never` is a subtype of all types.

---

### ✅ **5. `keyof unknown`**

```ts
type T40 = keyof any; // string | number | symbol
type T41 = keyof unknown; // never
```

**Explanation**:
- You can get keys from `any` (like object keys), but not from `unknown` because its structure is... unknown!

---

### ✅ **6. Only Equality Operators Allowed**

```ts
function f10(x: unknown) {
  x == 5;        // ✅ OK
  x !== 10;      // ✅ OK
  x >= 0;        // ❌ Error
  x + 1;         // ❌ Error
  x * 2;         // ❌ Error
  -x;            // ❌ Error
  +x;            // ❌ Error
}
```

**Explanation**:
- With `unknown`, you can compare for equality (`==`, `===`) but **cannot do arithmetic** or logical operations unless the type is narrowed.

---

### ✅ **7. No Property Access or Function Call**

```ts
function f11(x: unknown) {
  x.foo;     // ❌ Error
  x[5];      // ❌ Error
  x();       // ❌ Error
  new x();   // ❌ Error
}
```

**Explanation**:
- You cannot do anything with `x` unless you **know what it is**. `unknown` blocks access to properties, methods, or function calls.

---

### ✅ **8. Type Narrowing with `typeof`, `instanceof`, or Custom Predicate**

```ts
declare function isFunction(x: unknown): x is Function;

function f20(x: unknown) {
  if (typeof x === "string" || typeof x === "number") {
    x; // ✅ string | number
  }
  if (x instanceof Error) {
    x; // ✅ Error
  }
  if (isFunction(x)) {
    x; // ✅ Function
  }
}
```

**Explanation**:
- TypeScript allows access only **after narrowing** the type via `typeof`, `instanceof`, or user-defined type guards.

---

### ✅ **9. Mapped Types over `unknown`**

```ts
type T50<T> = { [P in keyof T]: number };
type T51 = T50<any>;     // { [x: string]: number }
type T52 = T50<unknown>; // {}
```

**Explanation**:
- You can’t map over the properties of `unknown` (because it has none), so it results in an **empty object** type.

---

### ✅ **10. Assigning to `unknown` is always allowed**

```ts
function f21<T>(pAny: any, pNever: never, pT: T) {
  let x: unknown;
  x = 123;
  x = "hello";
  x = [1, 2, 3];
  x = new Error();
  x = x;
  x = pAny;
  x = pNever;
  x = pT;
}
```

**Explanation**:
- You can assign **anything** to `unknown`.

---

### ✅ **11. But `unknown` can only be assigned to `any` or `unknown`**

```ts
function f22(x: unknown) {
  let v1: any = x;        // ✅
  let v2: unknown = x;    // ✅
  let v3: object = x;     // ❌
  let v4: string = x;     // ❌
  let v5: string[] = x;   // ❌
  let v6: {} = x;         // ❌
  let v7: {} | null | undefined = x; // ❌
}
```

**Explanation**:
- You can't assign `unknown` to more specific types unless you narrow or assert.

---

### ✅ **12. Generic `T extends unknown` isn't enough**

```ts
function f23<T extends unknown>(x: T) {
  let y: object = x; // ❌ Error
}
```

**Explanation**:
- Even if `T` is a subtype of `unknown`, TypeScript doesn't know if it's an object unless you narrow it.

---

### ✅ **13. Index signature with `unknown` values**

```ts
function f24(x: { [x: string]: unknown }) {
  x = {};            // ✅
  x = { a: 5 };       // ✅
  x = [1, 2, 3];      // ✅ (arrays are objects)
  x = 123;            // ❌
}
```

**Explanation**:
- Any object-like value is fine. Primitives like `123` are not allowed.

---

### ✅ **14. Local variables of type `unknown` are always considered initialized**

```ts
function f25() {
  let x: unknown;
  let y = x; // ✅
}
```

**Explanation**:
- You don’t need to initialize `x` before using it — it's considered initialized by TS.

---

### ✅ **15. Spreading `unknown` makes the result `unknown`**

```ts
function f26(x: {}, y: unknown, z: any) {
  let o1 = { a: 42, ...x };             // ✅ { a: number }
  let o2 = { a: 42, ...x, ...y };       // ❌ becomes unknown
  let o3 = { a: 42, ...x, ...y, ...z }; // ❌ becomes any
}
```

**Explanation**:
- When you spread an `unknown`, the type of the result becomes `unknown`—because TS doesn’t know what’s inside `y`.

---

### ✅ **16. Function with `unknown` return type doesn’t need `return`**

```ts
function f27(): unknown {}
```

**Explanation**:
- Weird but allowed: Since the function “might” return anything (or nothing), it's legal to omit `return`.

---

### ✅ **17. Rest object from `unknown` is not allowed**

```ts
function f28(x: unknown) {
  let { ...a } = x; // ❌ Error
}
```

**Explanation**:
- You can't destructure from `unknown`. The structure must be known first.

---

### ✅ **18. Class properties of type `unknown` don't need initialization**

```ts
class C1 {
  a: string; // ❌ Error: must initialize
  b: unknown; // ✅ OK
  c: any;     // ✅ OK
}
```

**Explanation**:
- `unknown` is treated like `any`: TS assumes you’ll initialize it later (no strict check).

---
