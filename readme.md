
---

# TypeScript: Short History

- JavaScript was originally made for **small browser scripts**.
- Over time, **web apps grew huge** (hundreds of thousands of lines of code).
- JavaScript has **quirks** (unexpected behaviors) because it wasn't built for big apps.
- **TypeScript** was created to **fix JavaScript's problems** for big applications:
  - It **adds static type checking** (catches mistakes before running code).
  - It **builds on top of JavaScript** (all JS code is valid TS code).
  - It **compiles** (transpiles) to normal JavaScript — no runtime changes.
  - Helps **developers find errors early** and **write safer, more maintainable code**.

---

# JavaScript vs TypeScript (Simple Notes)

| Feature | JavaScript (JS) | TypeScript (TS) |
|:---|:---|:---|
| **Type System** | No static types | Static types (optional) |
| **Error Checking** | Errors found at runtime | Errors found at compile-time |
| **Code Size** | Good for small scripts | Good for large applications |
| **Learning Curve** | Easier to start with | Slightly harder (need to learn types) |
| **Flexibility** | Very flexible | Stricter, more disciplined |
| **Runtime** | Runs directly | Compiles to JS, then runs |
| **Tools/IDE Support** | Basic | Excellent (autocompletion, type hints) |
| **Migration** | No extra step | Need compiler (`tsc`) |

---

✅ **If you're building big projects → use TypeScript.**  
✅ **If you're making small scripts or quick tests → JavaScript is fine.**

- TypeScript is js's runtime with a compile-time type checker

# To install and compile, resource: [tutorial](https://thenewstack.io/typescript-tutorial-a-guide-to-using-the-programming-language/)

## Also here is a short and simple guideline

---

## Steps to Install TypeScript and Compile a `.ts` File

1. **Install Node.js and npm** (if not already installed):
   ```bash
   sudo apt-get install nodejs npm -y
   ```

2. **Install TypeScript globally**:
   ```bash
   sudo npm install -g typescript
   ```

3. **Verify TypeScript installation**:
   ```bash
   tsc -v
   ```

4. **Create a TypeScript file**:
   ```bash
   mkdir project-folder
   cd project-folder
   nano filename.ts
   ```

5. **Write your TypeScript code** (example):
   ```typescript
   let message: string = 'Hello, World!';
   console.log(message);
   ```

6. **Compile the `.ts` file to JavaScript**:
   ```bash
   tsc filename.ts
   ```

7. **Run the generated JavaScript file**:
   ```bash
   node filename.js
   ```

---