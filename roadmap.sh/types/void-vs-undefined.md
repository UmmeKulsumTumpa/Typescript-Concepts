
---

# ✅ TypeScript: Mastering `void` vs `undefined`

## 🔹 Summary Table

| Aspect                | `void`                                 | `undefined`                               |
|----------------------|-----------------------------------------|--------------------------------------------|
| **Definition**        | A *TypeScript type* meaning “no return value” | A JavaScript *value* and *TypeScript type* |
| **At Runtime**        | Does **not exist** in JavaScript       | Exists as a real value: `undefined`        |
| **Return Value Use**  | Used to annotate functions with no return | Used as a value or default                 |
| **Assignable To**     | `undefined` can be assigned to `void`  | Depends on `strictNullChecks`              |
| **typeof result**     | `typeof somethingReturningVoid()` → `"undefined"` | `typeof undefined` → `"undefined"`    |
| **Compiles To**       | Disappears — `void` returns become `undefined` | `undefined` remains as is                |
| **Usage in Conditionals** | Cannot check `if (val === void)`  | Can check `if (val === undefined)`         |

---

## 🔹 1. What is `void` in TypeScript?

- `void` is a **TypeScript-only** type that represents functions that **do not return anything**.
- At **runtime**, `void` becomes `undefined` in JavaScript.

```ts
function logMessage(): void {
  console.log("Logging...");
}
```

At runtime (compiled to JavaScript):
```js
function logMessage() {
  console.log("Logging...");
}
```

✅ Valid: TypeScript compiles `void` away. It exists only at compile-time.

---

## 🔹 2. What is `undefined`?

- `undefined` is both a **JavaScript primitive value** and a **TypeScript type**.
- A variable without a value is `undefined`.

```ts
let x: undefined = undefined;
```

- Functions with no `return` return `undefined`:

```ts
function test() {
  // no return
}
console.log(test()); // undefined
```

---

## 🔹 3. So, what’s the relationship?

In practice:

- A function returning `void` will **return `undefined`** in JavaScript.
- `void` is more about **intent and contract**: “this function doesn’t give you anything back”.

```ts
function log(): void {
  console.log("just logging");
}

let result = log();
console.log(result); // undefined
```

But you **can’t** do:
```ts
if (typeof result === "void") { ... } // ❌ Invalid: "void" is not a typeof result
```

Because:
```ts
console.log(typeof result); // "undefined"
```

> ❗ `void` does not exist at runtime — **it only exists in the TypeScript type system**.

---

## 🔹 4. `void` vs `undefined` as Types

In TypeScript:

```ts
let a: void;
let b: undefined;

a = undefined; // ✅ allowed
b = undefined; // ✅ allowed

a = b;         // ✅ allowed
b = a;         // ✅ allowed (with strictNullChecks off)
```

But with `strictNullChecks` **on**, assigning `void` to `undefined` is not allowed without explicit intent.

---

## 🔹 5. Function Return: `void` vs `undefined`

### 🔸 No return (inferred as void):
```ts
function noReturn() {
  console.log("hello");
}
```

Inferred return type: `void`.

### 🔸 Explicit `undefined` return:
```ts
function returnsUndefined(): undefined {
  return undefined;
}
```

Here, you must **explicitly** return `undefined`.

---

## 🔹 6. Why use `void` then?

To enforce contracts — such as in callbacks or event handlers.

```ts
type Callback = () => void;

const cb: Callback = () => {
  console.log("callback");
  return 123; // ✅ Allowed — value ignored
};

let result = cb(); // type is void (even though function returns number)
console.log(result); // undefined
```

✅ `void` return type allows function to return **any value**, but **treats the return as ignored**.

---

## 🔄 What Happened: Where the Confusion Comes From

You followed **my earlier note** where I explained:

> A function typed as `() => void` can return any value, **but that value is ignored**.

This is **true from TypeScript’s type-checking perspective**, but **it does not mean**:

- the function returns `undefined` at runtime,
- or that `typeof result` becomes `'undefined'`.

> That part — the **runtime behavior** — is controlled entirely by **JavaScript**, not TypeScript.

The **confusion** comes when we mix:
- **what TypeScript enforces at compile time** (for your code safety),
- vs **what actually happens when JavaScript runs** your compiled `.js`.

---

## 💡 Revisit the "Void Return" Example

### Earlier TS note said:
```ts
type Callback = () => void;

const cb: Callback = () => {
    return 123;
};

let result = cb(); // Type is 'void'
```

This is **100% valid TypeScript** because TypeScript's void **means: "do not use this return value"** — not "no value will be returned."

But...

### When compiled to JavaScript:

```js
const cb = () => {
    return 123;
};

let result = cb();       // 123
console.log(result);     // logs 123
console.log(typeof result); // logs 'number'
```

👆 This is **expected JS behavior** because `void` **doesn’t exist at runtime** — it's a **TypeScript-only** abstraction.

---

## 🔍 Why the Note Might Seem Inconsistent

You probably expected this from my note:

```ts
let result = cb(); // result is 'void', so shouldn't return anything

console.log(result); // You thought this would log: undefined or nothing
```

But it logs `123`. Why?

Because:
- **TypeScript ignored the return value** (type = `void`)
- **JavaScript didn’t ignore it**, so it was still returned

👉 The **mistake** would be expecting TypeScript types to **change JavaScript behavior**. **They don’t.**

---

## ✅ Correct Understanding (Updated for Clarity)

### TypeScript `void`:

| Behavior | Meaning |
|---------|---------|
| **At compile time (TS)** | "This function shouldn’t be *used* for its return value" |
| **At runtime (JS)**      | Any value returned will still exist unless explicitly not returned |
| **Can you return a value?** | ✅ Yes, in inferred `() => void`, TS will allow it |
| **Will the value be present in JS?** | ✅ Yes, and `typeof` will reflect its actual value |

---

## 🧪 Want to Force No Return?

To make TypeScript enforce **"must not return anything"**, write:

```ts
function cb(): void {
  return 123; // ❌ TypeScript error
}
```

Only in **explicit functions**, TS enforces *"no return values allowed."*

But in *assigned* functions:

```ts
const cb: () => void = () => 123; // ✅ allowed — value is "ignored"
```

---

## ✅ TL;DR Summary

- TypeScript's `void` **prevents use of** return values — it **doesn't remove them**.
- You can return a value from a `() => void` function — **TS won’t complain**, but **it exists at runtime**.
- If you want **no value returned at all**, use `function fn(): void { ... }` and TS will enforce it.
- `typeof` always checks **runtime value**, **not TypeScript types**.

---


---

## 🔹 7. Special Case: `as void`

Rarely used directly, but you might see this:

```ts
const val = (someFunction() as void);
```

Means: “I don’t care what this function returns — I treat it as void”.

---

## 🔹 8. Why `typeof x === "void"` is Invalid?

Because:

```ts
typeof x // → "undefined"
```

JavaScript has no `"void"` string in `typeof`. That’s **only a TS construct**.

So you cannot do:
```ts
if (typeof x === "void") {} // ❌ Error
```

✅ Instead:
```ts
if (typeof x === "undefined") {}
```

---

## 🔹 9. Tuple Case (for fun)

You can use `void` in tuples to denote "return value not used":

```ts
type Result = [string, void];

const result: Result = ["done", undefined]; // ✅
```

But again, at runtime, it’s just `undefined`.

---

## 🔹 10. Real Proof of `void`'s Existence in Type System

```ts
function test(): void {}

let val = test();
console.log(typeof val); // "undefined"

type MyFunc = () => void;

const f: MyFunc = () => {
  return "hello"; // ✅ allowed
};

let x = f(); // x is void, even though it returned a string

// This is proof that TS enforces `void` at type level,
// but runtime returns undefined
```

---

## ✅ Final Summary

| Concept          | Details                                                                 |
|------------------|-------------------------------------------------------------------------|
| `void`           | TS-only type meaning "no return", compiles away                         |
| `undefined`      | Real JS value and TS type                                                |
| `void` returns   | Actually return `undefined` at runtime                                  |
| `typeof` check   | Cannot use `"void"` with `typeof`; use `"undefined"`                    |
| Use `void` for   | Function contracts where return value doesn’t matter                    |
| Can you assign `undefined` to `void`? | ✅ Yes, always                                       |
| Can you assign `void` to `undefined`? | ⚠️ Only if `strictNullChecks` is off                |

---
