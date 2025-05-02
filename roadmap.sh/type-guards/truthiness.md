
---

## ✅ What are *truthy* and *falsy* values?

In JavaScript/TypeScript, values used in conditional expressions like `if`, `&&`, `||`, `!`, etc., are first **coerced** to a boolean.

### 📌 Falsy values in JavaScript/TypeScript:

These **evaluate to `false`** when used in boolean contexts:

* `false`
* `0`
* `NaN`
* `""` (empty string)
* `0n` (bigint zero)
* `null`
* `undefined`

Everything **else** is **truthy** (evaluates to `true`).

---

## ✅ How to check if a value is truthy or falsy

You can use either of these:

```ts
Boolean(value); // returns true or false
!!value;        // also returns true or false (common shortcut)
```

### Example:

```ts
console.log(Boolean(null));     // false
console.log(Boolean("hello"));  // true
console.log(!!0);               // false
console.log(!!"world");         // true
```

---

## 📘 Truthiness Narrowing (Official TypeScript Concept)

Now, let's go through the content **line by line** with explanations.

---

### 🔸 Line-by-line Explanation

#### 🔹 Concept:

> **Truthiness narrowing**
> Truthiness might not be a word you’ll find in the dictionary, but it’s very much something you’ll hear about in JavaScript.

✅ *Explanation*:
“Truthiness” refers to how values behave in conditional checks — whether they are treated as true or false. This is a real concept in JS, even if it's not a formal dictionary term.

---

> In JavaScript, we can use any expression in conditionals, &\&s, ||s, if statements, Boolean negations (!), and more.

✅ *Explanation*:
JavaScript conditionals don’t require a strict boolean (`true` or `false`). Instead, they coerce values to booleans based on their **truthy/falsy nature**.

---

> As an example, `if` statements don’t expect their condition to always have the type boolean.

✅ *Explanation*:
You can write `if ("hello") {}` and it works, even though `"hello"` is a string — JS converts it to a boolean internally (`true` in this case).

---

#### 🔹 Code:

```ts
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}
```

✅ *Explanation*:

* If `numUsersOnline` is `0`, the condition is falsy — returns `"Nobody's here :("`.
* If it's `1` or more, it's truthy — returns `"There are X online now!"`.

---

> In JavaScript, constructs like `if` first “coerce” their conditions to booleans to make sense of them.

✅ *Explanation*:
JS uses **type coercion** — converting types behind the scenes — to evaluate conditions like `if (value)`.

---

> Values like `0`, `NaN`, `""`, `0n`, `null`, `undefined` all coerce to `false`.

✅ *Explanation*:
These are **falsy** — using them in an `if` condition will result in the `false` path being taken.

---

> You can always coerce values to booleans by running them through the `Boolean` function, or by using the shorter double-Boolean negation.

```ts
Boolean("hello"); // boolean, true
!!"world";        // literal true, type `true`
```

✅ *Explanation*:

* `Boolean("hello")` gives a `boolean` type.
* `!!"world"` gives a **literal type** `true` — useful for narrowing in TypeScript.

---

#### 🔹 Code:

```ts
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
```

✅ *Explanation*:

* First checks `if (strs)` to **narrow out null** (falsy).
* Then checks `typeof strs === "object"` to see if it's an array.
* Else, it's a string.
* This pattern avoids runtime errors like `TypeError: null is not iterable`.

---

> Keep in mind though that truthiness checking on primitives can often be error prone.

✅ *Explanation*:
Some values like `""` (empty string) are **falsy**, but still valid — so blindly using `if (value)` might accidentally skip valid cases.

---

#### 🔹 Example of what **not** to do:

```ts
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
```

✅ *Explanation*:

* Problem: `""` is falsy, so this code skips the valid empty string case.
* Lesson: Don't rely solely on `if (strs)` if valid falsy values exist (like `""`, `0`, etc.).

---

#### 🔹 Final Example:

```ts
function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}
```

✅ *Explanation*:

* `if (!values)` filters out `undefined`.
* If `values` is truthy (i.e., it's a real array), it safely runs `.map`.
* This is a **safe and idiomatic** use of truthiness.

---

## ✅ Summary: When and How to Use Truthiness Checks

| Check                          | Safe to use? | Why?                                                |
| ------------------------------ | ------------ | --------------------------------------------------- |
| `if (value)`                   | Sometimes    | Works for most, but may skip valid falsy values     |
| `if (value != null)`           | Yes          | Excludes only `null` and `undefined` (more precise) |
| `if (typeof value === "type")` | Yes          | Safe type narrowing                                 |
| `Boolean(value)` / `!!value`   | Yes          | Explicit coercion, useful for inspection and guards |

---
