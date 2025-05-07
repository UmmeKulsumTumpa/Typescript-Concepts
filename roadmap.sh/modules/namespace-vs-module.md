
---

### 🆚 **Namespaces vs Modules in TypeScript**

| Feature                | **Namespace**                                                 | **Module**                                                                                |
| ---------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Keyword                | `namespace`                                                   | `export`, `import`                                                                        |
| Used For               | Organizing code in **the same global scope / project**        | Breaking code into **separate files** that are imported                                   |
| File System Dependency | **No need for separate files** (can live in one file or many) | Each module lives in its **own file**                                                     |
| Compilation Target     | Works with **`--outFile`** for browser use                    | Works with **`--module`**, like CommonJS, ES6                                             |
| Loading                | Manual via `<script>` tags                                    | Loaded via **module loaders** like Node.js, Webpack, or browser import maps               |
| Best For               | Simple apps, browser codebases, older projects                | Modern JavaScript apps, large-scale apps, Node.js projects                                |
| Syntax Example         | `namespace MyUtils { export function greet() { ... } }`       | `export function greet() {}` in one file, `import { greet } from './my-utils'` in another |

---

### 🧠 **When Should You Use What?**

| Situation                                                 | Use Namespace                    | Use Module                 |
| --------------------------------------------------------- | -------------------------------- | -------------------------- |
| Targeting browser only, no module bundler (Webpack, etc.) | ✅ Yes                            | ❌ Not ideal                |
| Using modern tooling (Node, Webpack, Vite, etc.)          | ❌ No                             | ✅ Yes                      |
| Want multiple files but bundled into one                  | ✅ Use `--outFile` with namespace | ✅ Use modules with bundler |
| Want auto-loading/importing and tree shaking              | ❌                                | ✅ Yes                      |
| Working with older JS libraries via `<script>`            | ✅                                | ❌                          |

👉 **Today**, modules are the **recommended** standard for large apps.

---

### 🤔 **Can You Declare Two Things with the Same Name?**

#### ✅ Inside **Namespaces** or **Modules**:

You **cannot** declare two classes/functions/variables with the same name **in the same scope**:

```ts
namespace MyNS {
  class User {}      // ✅
  class User {}      // ❌ Error: Duplicate identifier 'User'
}
```

But you **can reuse** names in **different namespaces**:

```ts
namespace Admin {
  export class User {}  // OK
}
namespace Guest {
  export class User {}  // OK
}
```

So you must access them like:

```ts
let admin = new Admin.User();
let guest = new Guest.User();
```

---

#### ❌ Outside of Any Namespace or Module (Global Scope):

If you declare **same-named** things globally:

```ts
class Animal {}        // ✅
class Animal {}        // ❌ Error: Duplicate identifier 'Animal'
```

Same goes for:

* Variables
* Functions
* Classes

Because **everything is global**, you'll get **name conflicts** — exactly what namespaces and modules help **avoid**.

---

### ✅ Summary

| Question                   | Answer                                                                       |
| -------------------------- | ---------------------------------------------------------------------------- |
| **What’s the difference?** | Namespace is for grouping in one scope; Module is for separating into files  |
| **When to use namespace?** | Older projects, browser-only apps with no tooling                            |
| **When to use module?**    | Always in modern projects (Node, React, etc.)                                |
| **Can I reuse names?**     | ✅ Yes, in different namespaces or modules<br>❌ No, in the same one or global |
| **Why use namespaces?**    | To avoid naming conflicts and group related code                             |

---
