### 1. Differences Between Interfaces and Types in TypeScript

Both `interface` and `type` are used in TypeScript to define the structure of data, but they have some differences.

## Interface
Interfaces are mainly used to define the shape of objects and can be extended easily.

```ts
interface User {
  name: string
  age: number
}

interface Admin extends User {
  role: string
}
```

## Type
Types are more flexible and can represent unions, intersections, and complex structures.

```ts
type User = {
  name: string
  age: number
}

type Admin = User & {
  role: string
}
```

## Key Difference
- Interfaces are best for object structures
- Types are better when working with unions and intersections




### 2. Use of the keyof Keyword in TypeScript

The keyof keyword creates a union of all property names of a type.

```ts
type Product = {
  id: number
  name: string
  price: number
}

type ProductKey = keyof Product


Here, ProductKey becomes:

"id" | "name" | "price"


This helps prevent invalid property access.

```