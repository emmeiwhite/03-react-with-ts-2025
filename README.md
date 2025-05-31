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
