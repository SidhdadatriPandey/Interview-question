# 1 How to add js in html code

# 2 Higher order function

# 3 “This” keyword

# 4 Explain “try” and “catch” in js

# 4 setTimeout() and setInterval()

# 5 Array methods

forEach();

map();

filter();

reduce();

every()

some()

# 6 Spread

# 7 Rest

# 8 Destructuring (object and array)

Destructuring is way to extract data form array and object.

# 9 DOM (in react notes)

# 10 DOM manipulation

Ans It allows us to manipulate or change web page content (html element)

# 11 DOM events

# 12 What is call Stack

Ans Callstack is data structure which stores function execution information. Which follows lifo.

Then take example of scope channing.

# 12 Is js is single threaded or synchronous language?

# 13 How we can perform asynchronous nature if  js it is synchronous?

also cover event loop working in this

# 12 What is callback?

Ans Callback is any function who goes as an argument in another function.

# 12 Call hell or callback hell problem

# 13 what is promise?

# 13 Promise chaining

Ans Promise chaining in JavaScript is a technique that allows developers to run a series of asynchronous tasks in a chain, where each task starts after the previous one finishes.

# 14 Async and await

# 14 What is API?

Ans An API, or Application Programming Interface, is a set of rules that allow software applications to communicate with each other.

# 15 What is axios?

Ans axios is a way to retrieve resources from server. It returns a promise. For handling axios response we use async and await key words or promise channing.

# 15 What is Fetch or Fetch API

Ans The fetch() method in JavaScript is a way to retrieve resources from a server. It returns a Promise . For handling fetch response we use async and await key words or promise channing.

Let res=fetch(url,[options])

If we call fetch method and not provide options then fetch method generates get request. Get request is used for getting data from server.

In options we can also provide other request.

# 16 How does js code run

# what is execution context

Ans When we run the js code execution context will get created. It has majorly two components 1 memory component(variable environment) 2 code component (thread of execution)

Execution context is created in two phases à 1 Memory creation phase (Creation phase) 2 code execution phase

![image.png](attachment:8332433c-c067-4c11-a765-8251c1c8cf93:image.png)

# 18 What is difference between fetch and axios in react?

**Ans Error handling**

Axios has built-in error handling and provides more detailed error messages, while fetch only throws an error for network issues.

**Data parsing**

Axios automatically transforms the server's response data, while with Fetch, we need to call the response.json method to parse the data into a JavaScript object.

**Library** à

 fetch is build-in feature in react but for using axios we need to install npm I axios.

# 17 Difference between normal fun and arrow fun

Ans 1 “arguments” objects not available in arrow functions

Ex àfunction sum(x,y){

console.log(arguments); // will show arguments obj

return x+y;

}

Ex à const sum=(x,y)=>{

console.log(arguments); // not show

return x+y;

}

2 In arrow function “this” scope is Lexical but in normal function “this” points to calling object;

3 In arrow function we can implicitly return value

Ex à let sum=(x,y)=> x+y;

4 their syntax are different in arrow function we have => sign

# 19 Difference between let, const and var

1. let and const are block scope variables but var is functional scope variable then ex.
2. if i create object or array through const then i can add or remove some values from that we can’t change that overall. ex.
3. in the case of “let” we can’t create two variable with same name
let a=10;

let a=20; // in this case we will get “syntax error”

var b=10;

var b=100; // this correct in the case of var

in the case of const we have more restriction like we need to declare variable value in same line
const b;

b=10; // it will give error

const b=10; // it is correct way

The priority of using ‘let’, ‘const’, ‘var’ is - 1) const 2) let 3) var

# 20 What is temporal dead zone in java script?

The Temporal Dead Zone (TDZ) in JavaScript refers to a specific period during the execution of code where variables declared with `let` and `const` exist within their scope but cannot be accessed before assigning the value.

# 20 How many types of function we have in JavaScript

Ans three

1 Named function

Ex à function sum() {consol.log(“show sum”);}

2 Anonymous function or Function expression

Ex à let sum= function() { consol.log(“sum”);}

3 Arrow function 

Ex à let sum= () => {consol.log(“sum”);}

# 19 What is hoisting in JavaScript?

Ans Hoisting is **JavaScript's default behavior** where declarations of functions, variables, and classes are moved to the top of their scope – all before code execution.

Ex getName(); // “javascript”

Console.log(x); //undefined

Consle.log(getName); //show whole function

Console.log(getName2) //undefined

Var x=5;

Function getName(){

Console.log(“ javascript”);

};

Var getName2=()=>{

Console.log(“javascript2”);

}

(Namaste javascript vi)

# 20 What is difference between forEach() and map()?

Ans map method returns new array where callback function condition applied for all elements of array. forEach method doesn’t return any new array it is only for array traversal.

# 35 Explain about ES6 features?

# New Features in ES6

- [The let keyword](https://www.w3schools.com/js/js_es6.asp)
- [The const keyword](https://www.w3schools.com/js/js_es6.asp)
- [Arrow Functions](https://www.w3schools.com/js/js_es6.asp)
- [Promises](https://www.w3schools.com/js/js_es6.asp)
- Template Literals

# 37 What is closures?

Ans Function along with their lexical scope is known as closure.

(or) A closure in JavaScript is a function that has access to the variables and parameters of its outer function, even after the outer function has finished executing.

function parent(){

var x=10;

function child(){

return x;

}

return child;

}

var a=parent();

console.log(a());//10

Take Namaste js ex.

# 38 In how many ways we can create objects in javaScript?

Ans Their are several ways to create object in js like 

### ✅ 1. **Using Object Literals** (Most Common)

```jsx
javascript
CopyEdit
const person = {
  name: "John",
  age: 30
};
```

---

### ✅ 2. **Using `new Object()` Constructor**

```jsx
javascript
CopyEdit
const person = new Object();
person.name = "John";
person.age = 30;
```

---

### ✅ 3. **Using Constructor Functions**

```jsx
javascript
CopyEdit
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("John", 30);
```

---

---

### ✅ 4. **Using `Object.create()`**

```jsx
javascript
CopyEdit
const proto = {
  greet() {
    console.log("Hello!");
  }
};

const obj = Object.create(proto);
obj.greet();  // Output: Hello!
```

---

### 

# 39 What is useRef in js?

The ***useRef*** Hook ***allows us to persist values between renders.***
 if we want to create a variable which should not get effected by component rerender then we can use useRef.
in the case of useState ui get rerender but in useRef not.

# 40 js imprortant String methods —

### ✅ **Top 12 JavaScript String Methods for Interviews**

| No. | Method | Description | Example |  |
| --- | --- | --- | --- | --- |
| 1️⃣ | `length` | Returns the number of characters in the string | `'hello'.length → 5` |  |
| 2️⃣ | `charAt(index)`  | Returns the character at a specified index | `'abc'.charAt(1) → 'b'` |  |
| 3️⃣ | `includes(substring)` | Checks if the substring exists | `'hello'.includes('ll') → true` |  |
| 4️⃣ | `indexOf(substring)` | Returns the first index of the substring | `'hello'.indexOf('l') → 2` |  |
| 5️⃣ | `slice(start, end?)` | Extracts a section of the string. “abcd”.slice(-2);//”cd” | `'hello'.slice(1, 4) → 'ell'` |  |
| 6️⃣ | `substring(start, end)` | Similar to `slice`, but doesn't accept negative values  | `'hello'.substring(1, 4) → 'ell'` |  |
| 7️⃣ | `toUpperCase()` | Converts to uppercase | `'hello'.toUpperCase() → 'HELLO'` |  |
| 8️⃣ | `toLowerCase()` | Converts to lowercase | `'HELLO'.toLowerCase() → 'hello'` |  |
| 9️⃣ | `trim()` | Removes whitespace from both ends means leading and trailing | `' hello '.trim() → 'hello'` |  |
| 🔟 | `split(separator)` | Splits string into an array based on separator | `'a,b,c'.split(',') → ['a', 'b', 'c']` |  |
| 1️⃣1️⃣ | `replace(old, new)` | Replaces the first occurrence of a substring | `'abcabc'.replace('a', 'x') → 'xbcabc'` |  |
| 1️⃣2️⃣ | `repeat(count)` | Repeats the string `count` times | `'ab'.repeat(3) → 'ababab'` |  |
|  |  |  |  |  |

split method examples

"my name is Sid".split(" ");
// ["my", "name", "is", "Sid"]

"hello".split("");
// ["h", "e", "l", "l", "o"]

"apple,banana,grape".split(",");
// ["apple", "banana", "grape"]

# 41. **what is difference between “undefined” and “not defined” in java script**

```
undefined is a special **value** that JavaScript uses to say, **"no value has been assigned yet."**
```

we can write like 
let a=10;

a=undefined; // we can write in this way but it’s not a best practice but not wrong

**“not defined”** is kind of error which we get if any variable is not declared and we are tying to use it like
console.log(x); // here x is not defined and we are trying to access it.

# 42 What is **Scope** in JavaScript?

**Scope** defines **where variables, functions, and objects are accessible** in our code.

### 🔹 Types of Scope in JavaScript:

### 1. **Global Scope**

- A variable declared **outside any function or block**.
- Can be accessed **anywhere** in your code.

```
js
CopyEdit
let globalVar = "I am global";

function test() {
  console.log(globalVar); // ✅ accessible
}
```

### 2. **Function Scope**

- Variables declared **inside a function** using `var`, `let`, or `const` are **only accessible inside that function**.

```
js
CopyEdit
function example() {
  let localVar = "I am inside";
  console.log(localVar); // ✅
}

console.log(localVar); // ❌ Error: not defined

```

### 3. **Block Scope (ES6+)**

- Introduced with `let` and `const`.
- Variables inside `{ ... }` (like in `if`, `for`, etc.) are only accessible **inside that block**.

```
js
CopyEdit
if (true) {
  let blockVar = "I exist only here";
}
console.log(blockVar); // ❌ Error
```

---

# 43 What is lexical environment?

A Lexical Environment in JavaScript is a data structure that stores variables and functions defined within a specific scope, along with a reference to its outer (parent) lexical environment.
( Lexical environment is created when ever execution context is created.). ex of scope chaining.

# 44 What is scope chaining?

**Scope Chaining** refers to the process JavaScript uses to **look up variables**.

example
 function parent(){

var x=90;

function child(){

console.log(x);

}

child();

}

parent();

![Screenshot 2025-06-28 at 1.48.11 PM.png](attachment:42f47e20-30a2-42bd-9278-2acd15a8dc85:Screenshot_2025-06-28_at_1.48.11_PM.png)

# 45 what is block in js?

In JavaScript, a **block** is a group of statements enclosed within **curly braces `{}`**. Blocks are used to group multiple statements together so they can be treated as a single unit.

# 46 What is block scope in java script?

**Block scope** means that **variables declared inside a block `{}` can only be accessed inside that block** — they are not visible outside.

### ✅ Supported by:

- `let`
- `const`

❌ **Not supported by** `var` (it is **function scoped**, not block scoped).

## Example →

{
let a = 10;
const b = 20;
var c = 30;
}

console.log(a); // ❌ Error: a is not defined
console.log(b); // ❌ Error: b is not defined
console.log(c); // ✅ 30 — because var is function scoped

### ✅ Where Block Scope Appears:

- Inside `if`, `for`, `while`, and `{}` blocks

```jsx
javascript
CopyEdit
if (true) {
  let x = 5;
  const y = 6;
}

```

# 47 What is shadowing in java script?

# or What is Variable Shadowing in js?

***Variable Shadowing in JavaScript*** occurs when the inner variable hides or overrides the outer variable.

Example →

let a=10;

var b=20;

const c=30;

{

let a=100;

var b=200;

const c=300;

console.log(a); //100

console.log(b); //200

console.log(c); //300

}

console.log(a); //10 

console.log(b); //200 (because var has global scope)

console.log(c); //30

`(insted of block we can use function also)`

## Incorrect way of shadowing

let a=10;

{

var a=20; // it’s illegal shadowing will through error

}

`but vice versa is correct` 

var a=10;

{

let a=20; // it’s totally correct

}

# 48 What is ‘event loop’ in java script?

The event loop in JavaScript is a core mechanism that enables asynchronous operations.

![Screenshot 2025-06-30 at 5.51.38 PM.png](attachment:1261a2a3-c5e0-45ea-ad52-4433f0d48ad5:Screenshot_2025-06-30_at_5.51.38_PM.png)

![Screenshot 2025-06-30 at 5.28.05 PM.png](attachment:3a82c021-d37b-43bf-86e1-5820fa334a9f:Screenshot_2025-06-30_at_5.28.05_PM.png)

![Screenshot 2025-06-30 at 5.38.01 PM.png](attachment:6067a44b-954e-4cf1-976a-afba75951ca3:Screenshot_2025-06-30_at_5.38.01_PM.png)

# 49 What is javascript engine?

A **JavaScript engine** is a program that **executes JavaScript code**. It takes the code we write and **translates it into machine code** so that your computer or browser can understand and run it.

# What will be the sequence of them and why
start, end, timeOut, promise

start

end

promise

timeOut
(because of event loop and web api)
