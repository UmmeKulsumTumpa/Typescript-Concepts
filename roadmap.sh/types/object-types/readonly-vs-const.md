
---

## 🔒 What is `readonly`?

- The `readonly` modifier in TypeScript **prevents reassigning a property**.
- It is **only enforced at compile time** (when you write or compile code), not at runtime (when the code is running in the browser or Node.js).

---

### ✅ Example 1: Basic Use

```ts
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'.`); // ✅ Reading is fine

  obj.prop = "hello"; // ❌ Error: Cannot assign to 'prop' because it's readonly
}
```

- You can **read** from `obj.prop`.
- You **cannot write or change** `obj.prop`.

---

## 🧠 Important Note:
> `readonly` only means you **can't reassign the property**, it does **not** mean the value is completely frozen.

---

### ✅ Example 2: Inner values can still change

```ts
interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // You can still change inner properties
  home.resident.age++; // ✅ Allowed
}
```

- `resident` is `readonly`, so you **can’t change the entire `resident` object**.
- But you **can change its internal values**, like `age`.

---

### ❌ Example 3: Reassigning the `readonly` property

```ts
function evict(home: Home) {
  home.resident = {
    name: "Victor the Evictor",
    age: 42,
  }; // ❌ Error: Cannot assign to 'resident'
}
```

- You can’t do this because `resident` is `readonly`.
- You **can’t assign a new object** to a `readonly` property.

---

## 🪞 `readonly` is **shallow**, not deep

- It **only protects the top-level property**.
- The inner values (like inside an object or array) are **still mutable**.

---

## 🔁 Readonly and Type Compatibility

```ts
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

let readonlyPerson: ReadonlyPerson = writablePerson;
```

- This works ✅: TypeScript doesn’t care that one has `readonly` and the other doesn’t.
- Even though `readonlyPerson` is **marked readonly**, the original `writablePerson` is still mutable.

```ts
writablePerson.age++; // ✅ Allowed
console.log(readonlyPerson.age); // Now 43
```

- So you changed the value via `writablePerson`, and it affected `readonlyPerson`.

> 💡 TypeScript allows this because both variables point to the **same object in memory**. `readonly` does not create a deep copy or frozen object.

---

## 🛠️ You Can Remove `readonly` with Mapped Types

Advanced: You can write TypeScript utility types that **remove or add** `readonly` using mapped types. Here's how to remove it:

```ts
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
```

Use it like this:

```ts
type Person = {
  readonly name: string;
  readonly age: number;
};

type EditablePerson = Mutable<Person>;
```

Now `EditablePerson` has the same properties, but not marked as `readonly`.

---

## ✅ Summary

| Feature                        | Description |
|-------------------------------|-------------|
| `readonly` modifier           | Makes a property **non-reassignable** |
| Still mutable inside objects  | `readonly obj` allows `obj.innerValue++` |
| Not deep immutability         | Only top-level is protected |
| Type compatibility            | `readonly` doesn't block assigning normal types |
| Aliasing affects data         | `readonlyPerson` changes if `writablePerson` changes |
| Can be removed with mapping   | Use mapped types to remove `readonly` |

---

---

## 🔄 `const` vs `readonly` in TypeScript

| Feature           | `const`                                   | `readonly`                                       |
|------------------|--------------------------------------------|--------------------------------------------------|
| Used with        | **Variables** (bindings)                   | **Object properties** and **class properties**   |
| Applies to       | The **variable binding itself**            | The **property of an object or class**           |
| Enforced at      | **Runtime and Compile time** (for binding) | **Compile time only**                            |
| Affects mutability? | ❌ No – object can still be changed      | ❌ No – inner properties can still be changed     |
| Works on         | Top-level bindings like `const x = 5;`     | Inside `interface`, `type`, `class` definitions  |

---

### ✅ `const` — freezes the **binding**, not the value

```ts
const obj = { name: "Alice" };
obj.name = "Bob"; // ✅ Allowed
obj = { name: "Charlie" }; // ❌ Error: assignment to constant variable
```

- You **can modify** the internal values of `obj`
- But you **can’t reassign `obj` itself**

---

### ✅ `readonly` — freezes the **property**, not the whole object

```ts
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
user.name = "Bob";   // ✅ OK
user.id = 2;         // ❌ Error: Cannot assign to 'id' because it is a read-only property
```

- You **can change** `name`
- You **can’t change** `id` because it’s `readonly`

---

### 🧠 Combine `const` and `readonly`

You can (and often should) use both together for maximum safety:

```ts
const user: Readonly<User> = {
  id: 1,
  name: "Alice"
};
```

- `const` prevents **reassigning `user`**
- `readonly` prevents **changing the properties inside `user`**

---

## ⚠️ Summary: Key Differences

| Question                          | `const`                          | `readonly`                             |
|----------------------------------|----------------------------------|----------------------------------------|
| Freezes variable binding?        | ✅ Yes                           | ❌ No                                   |
| Freezes object properties?       | ❌ No                            | ✅ Yes                                  |
| Use in object types?             | ❌ No                            | ✅ Yes (`interface`, `class`, `type`)  |
| Works at runtime?                | ✅ Yes                           | ❌ No (only compile-time check)        |
| Can be combined?                 | ✅ Yes (`const` + `readonly`)    | ✅ Yes                                  |

---

## 📌 When to Use Each?

- Use `const` to **prevent reassignment** of variables.
- Use `readonly` to **prevent changing specific properties** inside objects or classes.
- Use both together to lock down **both the binding and the internal structure**.

