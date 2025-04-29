
---

## 🔹 What is `void` in TypeScript?

In **TypeScript**, `void` is used as the **return type** of a function **that does not return anything**.

```ts
function sayHello(): void {
  console.log("Hello!");
}
```

- This function prints to the console but **does not return any value**.
- Therefore, its return type is `void`.

### 🔍 Implicit vs Explicit `void`

You can **explicitly** write `: void`, or TypeScript can **infer** it if you don't write anything.

```ts
function doSomething() {
  console.log("This function returns nothing");
}
// inferred as () => void
```

---

## 🔹 How does JavaScript treat functions that return nothing?

In **JavaScript**, when a function doesn't return anything, it **implicitly returns `undefined`**.

```js
function jsFunc() {
  console.log("JS Function");
}

const result = jsFunc(); // result === undefined
```

So:

| JavaScript | TypeScript |
|------------|------------|
| No return value → `undefined` | No return value → type is `void` |
| No `void` keyword for return types | Uses `void` as return type |

But keep this in mind:

### ✅ `void` ≠ `undefined` in TypeScript!

They look similar, but they are **different types** in TS:

```ts
let x: void = undefined; // ✅ allowed
let y: undefined = undefined; // ✅

x = y; // ✅ allowed
y = x; // ✅ allowed
```

But:

```ts
function returnsVoid(): void {}
function returnsUndefined(): undefined {
  return undefined;
}

let a: void = returnsVoid();         // ✅
let b: undefined = returnsUndefined(); // ✅

// let c: undefined = returnsVoid();   ❌ Type 'void' is not assignable to type 'undefined'
// let d: void = returnsUndefined();   ✅ Allowed
```

TypeScript treats `void` as **more general** than `undefined`.  
So `undefined` is assignable to `void`, but **not the other way around**.

---

## 🔹 How `void` behaves in contextual function types

TypeScript allows **flexibility** in `() => void` functions:

```ts
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true; // ✅ Allowed — return value is ignored
};

const f2: voidFunc = () => true; // ✅ Arrow shorthand

const f3: voidFunc = function () {
  return true; // ✅ Still valid
};

const v1 = f1(); // Type of v1 is void
const v2 = f2(); // Type of v2 is void
const v3 = f3(); // Type of v3 is void
```

✅ Even though they return `true`, **TypeScript ignores the return value** because the declared return type is `void`.

This allows things like:

```ts
[1, 2, 3].forEach((n) => console.log(n));
```

Or:

```ts
const dst = [0];
[1, 2, 3].forEach((n) => dst.push(n)); // push returns a number, but forEach expects void — still valid!
```

### Why?

Because for cases like `.forEach(callback)`:
- TypeScript says: "This callback returns `void`"
- But it's okay to return something, because **it's not used**.

---

## 🔴 Special Case: Literal Function Definitions

If you define a function with **explicit `: void`**, **you must not return anything** if you're not in a contextual type.

```ts
function f(): void {
  return true; // ❌ Error!
}
```

Same with function expressions:

```ts
const f = function (): void {
  return true; // ❌ Error
};
```

> 🧠 Why the difference?

- In **literal declarations**, TS enforces `void` strictly.
- In **contextual types** (like a function assigned to `() => void`), TS ignores return values.

---

## 🔧 Compilation: How TypeScript `void` compiles to JavaScript

The `void` keyword **does not exist in JS** (except for a completely unrelated `void` operator, which is rare and unrelated).

So this TypeScript:

```ts
function sayHi(): void {
  console.log("Hi");
}
```

Compiles to JavaScript like:

```js
function sayHi() {
  console.log("Hi");
}
```

✅ As expected — just a regular JS function that returns `undefined`.

---

## 🔍 Summary: `void` in TypeScript vs JavaScript

| Feature | JavaScript | TypeScript |
|--------|-------------|------------|
| Return type for no-return functions | Implicitly returns `undefined` | Explicit return type `void` |
| Does `void` exist? | No `void` type (but `void` operator exists) | Yes, used as a type |
| What does `void` mean? | Nothing — function returns `undefined` | Function does not return a value |
| Can function with `void` return something? | ✅ JS doesn't care | ✅ Sometimes allowed, but ignored |
| Is `void` same as `undefined`? | Not applicable | ❌ Not exactly — `undefined` is a specific value, `void` is a broader type |
| Compiles to | Normal JS function | Normal JS function — no runtime difference |

---

## ✅ Key Takeaways

- Use `void` when you want to **explicitly show** a function doesn't return anything.
- You can return a value from a function typed as `() => void`, but **TypeScript ignores it**.
- `void` is **not the same** as `undefined` — it's more general.
- During compilation, TS removes all `void` types and compiles to normal JS code.
- In JS, functions without return still return `undefined` — TS models this behavior but makes it **safer and explicit** with `void`.

---
