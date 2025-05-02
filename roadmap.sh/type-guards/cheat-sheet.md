
---

#  Type Guards in TypeScript – Cheat Sheet

Type guards help TypeScript **narrow down** a variable from a broader type to a more specific one based on runtime checks.

---

## 1. 🔁 **Equality Narrowing**

### ✅ What it does:

Narrow types based on `===`, `!==`, `==`, `!=` comparisons.

### 🧪 Works with:

* Primitives like `null`, `undefined`, `string`, `number`, etc.
* Loose equality (`==`, `!=`) checks both `null` and `undefined`

### 🎯 When to use:

When comparing a variable to a literal (e.g., `null`, `"string"`, `0`) or another variable.

### 📌 Key Note:

* `x == null` narrows out **both** `null` and `undefined`
* `x === null` narrows out only `null`

### 🧾 Example:

```ts
function printValue(val: string | number | null | undefined) {
  if (val != null) {
    // val: string | number
    console.log(val);
  }
}
```

---

## 2. ✅ **Truthiness Narrowing**

### ✅ What it does:

Narrows values using if-statements and truthy/falsy evaluation.

### 🧪 Works with:

* All values in JavaScript (based on JS truthy/falsy rules)

### 🎯 When to use:

When you only care if something is "present" or "non-empty".

### ⚠️ Be careful:

Falsy values like `""`, `0`, `NaN`, and `false` are also excluded.

### 🧾 Example:

```ts
function process(input: string | null | undefined) {
  if (input) {
    // input: string (null and undefined removed)
    console.log(input.trim());
  }
}
```

---

## 3. 🧬 **typeof Type Guards**

### ✅ What it does:

Uses the `typeof` operator to check **primitive types**.

### 🧪 Works with:

* `'string'`, `'number'`, `'boolean'`, `'symbol'`, `'undefined'`, `'bigint'`, `'function'`

### 🎯 When to use:

When narrowing unions of primitive types.

### 🧾 Example:

```ts
function handle(x: string | number) {
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  } else {
    console.log(x.toFixed(2));
  }
}
```

---

## 4. 🏛️ **instanceof Type Guards**

### ✅ What it does:

Uses `instanceof` to check **constructor/class** instances.

### 🧪 Works with:

* Class instances
* Built-ins like `Date`, `Error`, `RegExp`, etc.

### 🎯 When to use:

When narrowing objects created with constructors.

### 🧾 Example:

```ts
function logDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toISOString());
  } else {
    console.log(new Date(date).toISOString());
  }
}
```

---

## 5. 🔍 **in Operator Narrowing**

### ✅ What it does:

Checks if a property exists in an object (`"prop" in obj`).

### 🧪 Works with:

* Objects/interfaces
* Discriminated unions with unique properties

### 🎯 When to use:

To distinguish between objects with different shapes.

### 🧾 Example:

```ts
interface Dog { bark(): void }
interface Cat { meow(): void }

function speak(pet: Dog | Cat) {
  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}
```

---

## 6. 🧠 **Type Predicates (Custom Guards)**

### ✅ What it does:

Custom functions that tell TypeScript how to narrow a type.

### 🧪 Syntax:

```ts
function isFish(pet: Fish | Bird): pet is Fish { ... }
```

### 🎯 When to use:

* When built-in guards aren’t enough
* For reusable or complex type narrowing
* For filtering arrays by type

### 🧾 Example:

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();
if (isFish(pet)) pet.swim(); else pet.fly();
```

You can also use them in filters:

```ts
const pets: (Fish | Bird)[] = [...];
const fishes: Fish[] = pets.filter(isFish);
```

---

## 📋 Summary Table

| Type Guard             | Use Case                            | Works On                     | Narrowing Behavior                                      |
| ---------------------- | ----------------------------------- | ---------------------------- | ------------------------------------------------------- |
| Equality (`===`, `==`) | Check for specific value            | Primitives, null, undefined  | Narrow by literal match or absence of null/undefined    |
| Truthiness             | Check if value is "truthy"          | All types                    | Excludes `null`, `undefined`, `false`, `0`, `""`, `NaN` |
| `typeof`               | Check primitive type                | string, number, etc.         | Narrows to the specific primitive type                  |
| `instanceof`           | Check class or constructor instance | Objects/classes              | Narrows to instance of the constructor                  |
| `in`                   | Check if property exists            | Objects/discriminated unions | Narrows by property existence                           |
| Type Predicate         | Custom type check                   | Any                          | Manual control; narrows to custom type                  |

---

