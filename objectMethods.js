// ===========================================
// 📦 JavaScript Object Cheat Sheet
// ===========================================

// 🔹 1. OBJECT CREATION METHODS

// ✅ Using object literal
const obj1 = {
    name: "Alice",
    age: 30
  };
  
  // ✅ Using Object constructor
  const obj2 = new Object();
  obj2.name = "Bob";
  obj2.age = 25;
  
  // ✅ Using Object.create()
  const proto = { greet() { return "Hello!"; } };
  const obj3 = Object.create(proto);
  obj3.name = "Charlie";
  
  // ✅ Using class
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const obj4 = new Person("David", 40);
  
  // ✅ Using function constructor
  function Car(make, year) {
    this.make = make;
    this.year = year;
  }
  const obj5 = new Car("Toyota", 2022);
  
  // ✅ Using JSON.parse()
  const obj6 = JSON.parse('{"name":"Eva","age":29}');
  
  
  // 🔹 2. OBJECT ACCESS & MODIFICATION
  
  const user = { name: "Frank", age: 33 };
  
  // ✅ Dot notation
  console.log(user.name); // Frank
  
  // ✅ Bracket notation
  console.log(user["age"]); // 33
  
  // ✅ Add new property
  user.city = "New York";
  
  // ✅ Update property
  user.age = 34;
  
  // ✅ Delete property
  delete user.city;
  
  
  // 🔹 3. CHECKING PROPERTIES
  
  console.log("name" in user); // true
  console.log(user.hasOwnProperty("age")); // true
  console.log(Object.keys(user).includes("name")); // true
  
  
  // 🔹 4. LOOPING OVER OBJECT
  
  for (const key in user) {
    console.log("for...in:", key, user[key]);
  }
  
  Object.keys(user).forEach(key => {
    console.log("Object.keys:", key, user[key]);
  });
  
  for (const [key, value] of Object.entries(user)) {
    console.log("Object.entries:", key, value);
  };
  
  
  // 🔹 5. OBJECT METHODS
  
  const tools = {
    hammer: true,
    wrench: false
  };
  
  // ✅ Object.keys()
  console.log(Object.keys(tools)); // ['hammer', 'wrench']
  
  // ✅ Object.values()
  console.log(Object.values(tools)); // [true, false]
  
  // ✅ Object.entries()
  console.log(Object.entries(tools)); // [['hammer', true], ['wrench', false]]
  
  // ✅ Object.assign(target, source)
  const merged = Object.assign({}, user, tools);
  console.log("Merged object:", merged);
  
  // ✅ Spread operator
  const copied = { ...user };
  console.log("Copied object:", copied);
  
  // ✅ Object.freeze()
  const frozen = Object.freeze({ a: 1 });
  frozen.a = 2; // Won't change
  console.log("Frozen:", frozen);
  
  // ✅ Object.seal()
  const sealed = Object.seal({ b: 2 });
  sealed.b = 3; // ✅ allowed
  delete sealed.b; // ❌ not allowed
  console.log("Sealed:", sealed);
  
  
  // 🔹 6. DEEP CLONING
  
  const nested = { a: 1, b: { c: 2 } };
  
  // ❌ Shallow clone
  const shallow = { ...nested };
  shallow.b.c = 99;
  console.log("Shallow clone:", shallow, nested); // both changed
  
  // ✅ Deep clone (JSON method — only works for simple types)
  const deep = JSON.parse(JSON.stringify(nested));
  deep.b.c = 42;
  console.log("Deep clone:", deep, nested);
  
  
  // 🔹 7. OBJECT TO ARRAY
  
  console.log(Object.entries(user)); // [[key, value], ...]
  console.log(Object.keys(user));    // ['name', 'age']
  console.log(Object.values(user));  // ['Frank', 34]
  
  
  // 🔹 8. ARRAY TO OBJECT
  
  const arrEntries = [["id", 101], ["role", "admin"]];
  const fromEntries = Object.fromEntries(arrEntries);
  console.log("fromEntries:", fromEntries);
  
  
  // 🔹 9. DESTRUCTURING OBJECT
  
  const profile = {
    username: "john_doe",
    email: "john@example.com",
    location: "NY"
  };
  
  const { username, location } = profile;
  console.log("Destructured:", username, location);
  
  
  // 🔹 10. NESTED OBJECT ACCESS (Safe access)
  
  const nestedUser = {
    id: 1,
    address: {
      city: "Delhi",
      pincode: 110001
    }
  };
  
  console.log(nestedUser.address?.city);        // "Delhi"
  console.log(nestedUser.contact?.email);       // undefined (no error)
  
  
  // 🔹 11. OPTIONAL CHAINING + DEFAULT VALUE
  
  const city = nestedUser.address?.city ?? "Unknown";
  console.log("City:", city);
  
  
  // 🔹 12. OBJECT UTILITIES
  
  console.log("is Object:", typeof user === 'object' && !Array.isArray(user));
  console.log("is Plain Object:", Object.prototype.toString.call(user) === '[object Object]');
  
// ======================================================
// 📦 JavaScript Object Creation – Comparison & Use Cases
// ======================================================


// 🔹 1. ✅ OBJECT LITERAL – Most Common and Preferred
const user1 = {
    name: "Alice",
    age: 30
  };
  console.log("Object Literal:", user1);
  // ✔ Best for simple key-value pairs and configs
  
  
  // 🔹 2. 🔹 OBJECT CONSTRUCTOR – Rarely Used in Modern Code
  const user2 = new Object();
  user2.name = "Bob";
  user2.age = 25;
  console.log("Object Constructor:", user2);
  // ❌ Verbose. Equivalent to literal but rarely needed.
  
  
  // 🔹 3. ✅ OBJECT.CREATE(PROTO) – Manual Prototype Inheritance
  const proto1 = {
    greet() {
      return `Hello, ${this.name}`;
    }
  };
  const user3 = Object.create(proto1);
  user3.name = "Charlie";
  console.log("Object.create:", user3);
  console.log("Greet:", user3.greet());
  // ✔ Good for creating objects with shared prototype without using class
  
  
  // 🔹 4. ✅ CLASS – Modern OOP Way to Define Blueprints
  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `Hi, I'm ${this.name}`;
    }
  }
  const user4 = new User("David", 40);
  console.log("Class-based:", user4);
  console.log("Greet:", user4.greet());
  // ✔ Ideal when you need reusable object blueprints or inheritance
  
  
  // 🔹 5. 🔹 FUNCTION CONSTRUCTOR – Old Pre-ES6 OOP Pattern
  function Car(make, year) {
    this.make = make;
    this.year = year;
  }
  Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
  };
  const car = new Car("Toyota", 2020);
  console.log("Function Constructor:", car);
  console.log("Car Age:", car.getAge());
  // ❌ Outdated, use `class` instead
  
  
  // 🔹 6. ✅ JSON PARSE – For Server/API or LocalStorage Data
  const jsonStr = '{"name":"Eva","age":29}';
  const user6 = JSON.parse(jsonStr);
  console.log("JSON.parse:", user6);
  // ✔ Best for parsing stringified objects from APIs or storage
  
  // NOTE: JSON.parse can only handle data (no functions or custom prototypes)
  
  
  // ==============================================
  // 🧠 Summary: When to Use What
  // ==============================================
  
  console.log("\n💡 Summary:");
  console.log("Object Literal     → Best for quick object creation");
  console.log("Object.create      → When you need manual prototype chaining");
  console.log("Class              → When using OOP or creating reusable types");
  console.log("Function Constructor → Legacy pattern, use only in old code");
  console.log("JSON.parse         → When parsing stringified objects (e.g. API)");
  console.log("new Object()       → Avoid; same as {} but longer");
  
  // ==============================================
  // ✅ BONUS: Object Type Check
  // ==============================================
  
  const test = { a: 1 };
  
  console.log("\nIs plain object:", Object.prototype.toString.call(test) === '[object Object]');
  console.log("Is array:", Array.isArray(test)); // false
  console.log("Is object (typeof):", typeof test === "object" && !Array.isArray(test));
    