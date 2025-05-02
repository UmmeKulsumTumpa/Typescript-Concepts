
---

## ✅ What’s the Problem?

Earlier, you learned that:

```ts
if (strs) {
  // ...
}
```

…can **accidentally skip valid falsy values** like an empty string `""`, which is a valid `string`, but falsy.

To fix this, we can do **explicit checks** like:

```ts
if (strs !== null) { ... }
```

Let’s explain your examples in plain English.

---

### ✅ Example 1: Specific Check with `!== null`

```ts
function printAll(strs: string | string[] | null) {
  if (strs !== null) {
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

### 💡 What's going on here?

* `strs` can be:

  * a `string`
  * a `string[]`
  * or `null`

---

### 🧠 Explanation:

* `if (strs !== null)`
  → This filters out only `null` — not empty strings (`""`), not `undefined`, just `null`.
  → After this check, TypeScript **knows** `strs` is now `string | string[]`.

* `typeof strs === "object"`
  → So now, this means `strs` must be a `string[]` (because arrays are typeof "object").

* `else if (typeof strs === "string")`
  → This handles the other case — it's a string.

✅ Now this version is **safe** and correctly handles empty strings too, unlike `if (strs)`.

---

### ✅ Example 2: Using `!= null` to exclude both `null` and `undefined`

```ts
interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor;
  }
}
```

### 💡 What's going on here?

* `value` could be:

  * a `number`
  * `null`
  * or `undefined`

---

### 🧠 Explanation:

* `if (container.value != null)`
  → This uses **loose inequality** (`!=`), which is smart here:

  * `value != null` is `true` if the value is **not `null` and not `undefined`**.
  * So, it **filters out both null and undefined** in one go.

* After this check, TypeScript knows:
  → `value` must now be a `number`.

* So it’s safe to do `container.value *= factor` (multiply it).

---

## ✅ Summary of Key Ideas

| Check                      | Filters out            | Notes                           |
| -------------------------- | ---------------------- | ------------------------------- |
| `strs !== null`            | only `null`            | Keeps `undefined`, `""`, etc.   |
| `strs != null`             | `null` and `undefined` | Useful to check both at once    |
| `if (strs)`                | all falsy values       | May skip valid things like `""` |
| `typeof strs === "object"` | detects arrays/objects | Use after null check            |

---

