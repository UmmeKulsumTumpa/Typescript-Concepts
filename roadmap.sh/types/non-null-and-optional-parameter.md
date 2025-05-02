
---

## 🔹 TypeScript: `!` and `?` Symbols — Meaning, Use, and Examples

### 🔸 1. `?` - Optional Modifier and Optional Chaining

#### ✅ Official Name(s):

* **Optional Property Modifier** (when used in object types)
* **Optional Parameter** (when used in function parameters)
* **Optional Chaining Operator** (when used in expressions)

---

#### ✅ A. `?` as an **Optional Property Modifier**

Marks a property as optional in a type or interface.

```ts
type User = {
  name: string;
  age?: number; // 'age' is optional
};

const user1: User = { name: "Alice" };        // ✅ OK
const user2: User = { name: "Bob", age: 30 }; // ✅ OK
```

---

#### ✅ B. `?` as an **Optional Parameter** in Functions

```ts
function greet(name?: string) {
  console.log(`Hello, ${name ?? "Guest"}!`);
}

greet("Alice"); // Hello, Alice!
greet();        // Hello, Guest!
```

---

#### ✅ C. `?` as an **Optional Chaining Operator** (ES2020)

Safely access nested object properties without causing runtime errors if part of the chain is `null` or `undefined`.

```ts
const person = {
  name: "Charlie",
  address: {
    city: "New York"
  }
};

console.log(person.address?.city); // "New York"
console.log(person.contact?.phone); // undefined (no error!)
```

---

### 🔸 2. `!` - Non-Null Assertion Operator

#### ✅ Official Name:

* **Non-Null Assertion Operator**

---

#### ✅ Use Case:

Tells TypeScript that a value is **not `null` or `undefined`**, even if the type system cannot verify it. Used **after** a variable or expression.

```ts
let input: string | null = document.querySelector("input")?.value || null;

// Assert it's not null
const trimmed = input!.trim(); // TypeScript assumes 'input' is not null here
```

⚠️ **Use with caution**: You are asserting something TypeScript cannot guarantee, so you are taking responsibility.

---

### 🧠 Summary Table

| Symbol | Context                      | Meaning                             | Official Name               |
| ------ | ---------------------------- | ----------------------------------- | --------------------------- |
| `?`    | In object types              | Optional property                   | Optional Property Modifier  |
| `?`    | In function parameters       | Optional parameter                  | Optional Parameter          |
| `?`    | In expressions (e.g. obj?.x) | Safely access if not null/undefined | Optional Chaining Operator  |
| `!`    | After variable or expression | Assert value is not null/undefined  | Non-Null Assertion Operator |

---
