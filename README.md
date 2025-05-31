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
