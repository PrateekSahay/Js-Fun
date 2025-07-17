// ✅ 1. INTERFACE - For describing the shape of an object
interface User {
    id: number;
    name: string;
    email?: string; // optional property
    getGreeting(): string;
  }
  
  const user: User = {
    id: 1,
    name: "Alice",
    getGreeting: () => "Hello from Alice!",
  };
  
  // Interfaces support EXTENDS
  interface Admin extends User {
    role: "admin";
  }
  
  const admin: Admin = {
    id: 2,
    name: "Bob",
    role: "admin",
    getGreeting: () => "Hello from Admin!",
  };
  
  // ✅ 2. TYPE ALIAS - More flexible: can define objects, unions, tuples, primitives
  
  // a) Object type (similar to interface)
  type Product = {
    id: number;
    name: string;
    price: number;
  };
  
  // b) Union type
  type Status = "loading" | "success" | "error";
  
  const currentStatus: Status = "success";
  
  // c) Tuple type
  type Point = [number, number];
  const point: Point = [10, 20];
  
  // d) Combine with intersection (&)
  type WithTimestamp = { createdAt: Date };
  type ProductWithTime = Product & WithTimestamp;
  
  const item: ProductWithTime = {
    id: 101,
    name: "Laptop",
    price: 999,
    createdAt: new Date(),
  };
  
  // ✅ 3. ENUM - For defining a set of named constants
  enum OrderStatus {
    PENDING = "pending",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
  }
  
  const order = {
    id: 123,
    status: OrderStatus.SHIPPED,
  };
  
  // ✅ 4. KEY DIFFERENCES & WHEN TO USE
  
  /**
   * interface vs type:
   * - Both can describe object shapes.
   * - `interface` can be extended (OOP-style), preferred for public APIs.
   * - `type` is more flexible (can do unions, tuples, primitives).
   * - Use `type` for unions, mapped types, tuples.
   * - Use `interface` for consistent object shape (especially in libraries or classes).
   * 
   * enum vs union type:
   * - `enum` is good when values have meaning + need reverse lookup.
   * - Union type (`"pending" | "shipped"`) is lighter and preferred in many modern TS projects.
   */
  
  console.log(user.getGreeting());
  console.log(`Order status: ${order.status}`);
  

//   🧠 TL;DR
// Feature	    Use for                             	Can extend?	  Supports unions/tuples/primitives
// interface	Object shape (especially OOP)       	✅ Yes	            ❌ No
// type	        Flexible definitions, unions, etc	     ✅ Yes (via &)	    ✅ Yes
// enum	        Constant sets of values	                 ❌ No	            ❌ No