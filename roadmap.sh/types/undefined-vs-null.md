
---

# 🧠 `null` vs `undefined` in JavaScript and TypeScript

---

## 🔹 1. Basic Definitions

### ✅ `undefined`
- **JavaScript**: A variable that has been declared but not assigned a value.
- **TypeScript**: A type used to explicitly indicate a value is *not assigned*.

### ✅ `null`
- **JavaScript**: A value that explicitly represents *no value* or *empty*.
- **TypeScript**: A type used to signify *intentional absence of value*.

---

## 🔄 2. JS Behavior: `undefined` vs `null`

### ▶ `undefined` in JavaScript

```js
let x;
console.log(x); // undefined (declared but not initialized)
```

- Function without return:
```js
function test() {}
console.log(test()); // undefined
```

- Accessing non-existent property:
```js
const obj = {};
console.log(obj.foo); // undefined
```

---

### ▶ `null` in JavaScript

```js
let x = null;
console.log(x); // null
```

- Intentionally clearing a value:
```js
let user = { name: "Alice" };
user = null; // explicitly saying "no user"
```

---

## 🧪 JavaScript Comparison Table

| Feature                          | `undefined`                  | `null`                           |
|----------------------------------|-------------------------------|----------------------------------|
| Type of                         | `"undefined"` (primitive)     | `"object"` (yes, historically!)  |
| Set by                          | JS engine (by default)        | Developer (manually)             |
| Meaning                         | Variable not assigned         | No value / Empty                 |
| Use in equality                 | `undefined == null` ✅ true    | `undefined === null` ❌ false     |
| Boolean conversion              | false                         | false                            |
| Use case                        | Missing value, default param  | Empty or intentionally cleared   |

---

## 🔷 3. TypeScript Behavior

In **TypeScript**, both `null` and `undefined` are treated as **types** as well as **values**.

### ▶ `undefined` as a type
```ts
let x: undefined;
x = undefined; // ✅
x = null;      // ❌ Error (strictNullChecks on)
```

### ▶ `null` as a type
```ts
let y: null;
y = null;      // ✅
y = undefined; // ❌
```

---

## ⚠ Strict Mode Behavior (`strictNullChecks: true`)

This compiler setting enables more precise checking:

```ts
let name: string = "John";
name = null;      // ❌ Error
name = undefined; // ❌ Error
```

To allow them:

```ts
let name: string | null | undefined;
name = null;      // ✅
name = undefined; // ✅
```

---

## 🧪 TS Comparison Table

| Feature                         | `undefined`                   | `null`                          |
|--------------------------------|-------------------------------|---------------------------------|
| Type                           | `undefined`                   | `null`                          |
| Value                          | No assignment                 | Explicitly empty                |
| TS strict mode                 | Must allow via union          | Must allow via union            |
| Default value in TS            | Optional props: `undefined`   | Never `null` unless assigned    |
| Accepts assignment from other? | Only from `undefined`         | Only from `null`                |

---

## 💡 Key Use Cases

| Use Case                      | Use `undefined`         | Use `null`                |
|------------------------------|-------------------------|---------------------------|
| Default unassigned variable  | ✅                      | ❌                         |
| Optional parameter/property  | ✅                      | ❌ (unless explicitly set) |
| Clear/reset a value manually | ❌                      | ✅                         |
| Absence of object/value      | ✅ or `undefined | null` | ✅                         |

---

## 🧾 Examples of Both in Use

### Function with Optional Parameter
```ts
function greet(name?: string) {
  if (name === undefined) {
    console.log("Hello, guest!");
  } else {
    console.log(`Hello, ${name}`);
  }
}
```

### Function returning null intentionally
```ts
function findUser(): string | null {
  return null; // e.g. not found
}
```

---

## 🆚 Runtime: `typeof` Comparison

```js
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" ❗ (legacy bug in JS)
```

---

## ✅ Best Practices

- Use **`undefined`** for:
  - Optional parameters
  - Default uninitialized values
  - "Missing" values in JavaScript
- Use **`null`** for:
  - Intentionally clearing values
  - Return types when value is explicitly absent

### Example:

```ts
type User = {
  name: string;
  email?: string; // undefined if not present
  deletedAt: Date | null; // null if not deleted
};
```

---

## 🧠 Final Word

| Language     | `undefined`                          | `null`                                 |
|--------------|--------------------------------------|----------------------------------------|
| JavaScript   | Default uninitialized state          | Explicit empty / non-value             |
| TypeScript   | Type + Value                         | Type + Value                           |
| Type system  | Must be handled via union types      | Must be handled via union types        |
| Equality     | `undefined == null` is true          | `undefined === null` is false          |
| Runtime type | `"undefined"`                        | `"object"` (legacy bug in JS)          |

---
