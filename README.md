# React with TypeScript

## Why TypeScript in the first place?

- Static type checking
- We get to learn about the potential bugs as we are typing (at development time)
- Provides a way to describe the shape of an object, hence providing better documentation and autocomplete
- Makes maintenance and refactoring of large code basis much easier.

## Typing Props

- Defining the structure of the props

## Generic Type

Generic Function which takes and returns same arguments

```ts
function generate<T>(arg: T): T {
  return arg
}

console.log(generate<string>('hello world'))
console.log(generate<number>(23))
console.log(generate<boolean>(true))
```

Generic Interface

```ts
interface GenericInterface<T> {
  value: T
  getValue: () => T
}
const genericString: GenericInterface<string> = {
  value: 'continue with TS/NextJS',
  getValue() {
    return this.value
  }
}

console.log(genericString.getValue())
```

## Discriminated Union

A discriminated union based on the type field:

```ts
type Basic = { type: 'basic'; name: string }
type Advanced = { type: 'advanced'; name: string; email: string }
type ComponentProps = Basic | Advanced
```

💡 This tells TypeScript:

“If type is `'advanced'`, then email must be present.”

## Fetch Data with TypeScript

## ✅ What is Zod?

Zod is a TypeScript-first schema validation library.
It helps you:

- ✅ Validate data at runtime (e.g., data from an API)

- ✅ Parse/transform data safely

- ✅ Automatically infer TypeScript types from your validation schemas

### 🎯 Goal

- ✅ Fetch the tour data

- ✅ Validate it using Zod

- ✅ Automatically infer TypeScript types

- ✅ Safely pass to a client component

### 🧱 Step-by-step with explanation:

- 1. Install Zod (if not already installed)
     `npm install zod`

- 2. Create the Zod schema + inferred Type

```ts
export const TourSchema = z.object({
  id: z.string(),
  image: z.string(),
  name: z.string(),
  price: z.string(),
  info: z.string()
})

type Tour = z.infer<typeof TourSchema>
```

## 🧠 Mental Model: Zod in React / Next.js

┌────────────────────────────┐
│ 1. Define Schema │
│ "What should valid data │
│ look like?" │
└────────────────────────────┘
↓

- z.object({ ...shape })
- z.string(), z.number(), z.array(), etc.

                ↓

┌────────────────────────────┐
│ 2. Validate Incoming Data│
│ "Is the API data matching │
│ the expected shape?" │
└────────────────────────────┘
↓

- z.array(Schema).safeParse(data)

                ↓

┌────────────────────────────┐
│ 3. Use Parsed Data │
│ Only use result.data if │
│ result.success === true │
└────────────────────────────┘

| Concept                  | Mental Cue                           | Use When...                         |
| ------------------------ | ------------------------------------ | ----------------------------------- |
| `z.object({...})`        | "My data is an object"               | Validating a single item / shape    |
| `z.array(...)`           | "I expect a list of items like this" | Validating list of objects          |
| `safeParse(data)`        | "I’m not 100% sure if data is valid" | Safer than `.parse()` (won’t throw) |
| `z.string().optional()`  | "This field might be missing"        | For optional fields                 |
| `z.union([A, B])`        | "Field can be either A or B"         | Multiple valid shapes               |
| `z.infer<typeof Schema>` | "I want the TypeScript type"         | Reuse schema shape as TS type       |
