 
# Question
**What happens in JavaScript vs TypeScript if you call a function with fewer arguments than it expects?**

---
# Discussion

## 📜 In JavaScript (JS)

- **Functions are very flexible.**  
- JavaScript **does not enforce** the number of arguments at all.
- If you **pass fewer arguments**, the missing ones are set to `undefined`.

---

### Example 1 — JS: Missing argument becomes `undefined`

```javascript
function add(a, b, c) {
  console.log(a, b, c);
}

add(1, 2); 
// Output: 1 2 undefined
```

🔹 Here, `c` is **undefined** because we didn't pass a third parameter.  
🔹 **No error** happens at all.

---

### Example 2 — JS: Using missing parameter

```javascript
function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(2, 3)); 
// Output: NaN
```

- `c` is `undefined`
- `2 * 3 * undefined` → `NaN` (Not a Number)

🔹 So **strange behavior** can happen without any warnings or errors!

---

## 📜 In TypeScript (TS)

- **TypeScript *does check*** the number of arguments.
- **If you pass fewer (or more) arguments**, **you get a compile-time error**.
- It forces you to pass the correct number of parameters (based on the function type signature).

---

### Example 3 — TS: Error for missing argument

```typescript
function add(a: number, b: number, c: number) {
  console.log(a, b, c);
}

add(1, 2); 
// ❌ Error: Expected 3 arguments, but got 2.
```

🔹 TypeScript **will NOT allow** you to compile this code.

---

## But TypeScript also has ways to **make arguments optional** if you want.

- You can **make a parameter optional** using a `?`
- Or **provide a default value**.

---

### Example 4 — TS: Optional Parameter

```typescript
function add(a: number, b: number, c?: number) {
  console.log(a, b, c);
}

add(1, 2); 
// ✅ No Error
// Output: 1 2 undefined
```

- Here, `c` is optional (`c?: number`).
- If you don't pass `c`, it becomes `undefined` — just like in JS.
- But now it's **intentional and clear**.

---

### Example 5 — TS: Default Parameter

```typescript
function add(a: number, b: number, c: number = 10) {
  console.log(a, b, c);
}

add(1, 2); 
// ✅ No Error
// Output: 1 2 10
```

- `c` has a **default value** of `10`.
- If `c` is missing, `10` is used.

---

## ✍️ So to summarize:

| | JavaScript | TypeScript |
|:-|:-|:-|
| Missing parameter behavior | No error, treated as `undefined` | Compile-time error unless made optional or default |
| Strict about number of arguments? | ❌ No | ✅ Yes |
| How to allow optional parameters? | No syntax — must handle manually | Use `?` or default value `= something` |
| Risks | Bugs like `NaN`, undefined behavior | Safer and more predictable |

---

# ⚡ Pro Tips:

- **Always** use optional parameters (`?`) or defaults if you know an argument might be missing.
- **TypeScript helps you** catch mistakes **before running** your code.

---

### Final tiny demo

```typescript
function greet(name: string, age?: number) {
  if (age) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  } else {
    console.log(`Hello ${name}!`);
  }
}

greet("Tumpa");  // Hello Tumpa!
greet("Kulsum", 25); // Hello Kulsum, you are 25 years old.
```
✅ Now `age` is optional. Safer, flexible, and no bugs.

---
