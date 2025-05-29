type ComponentProps = { name: string; age: number }

const Component = ({ name, age }: ComponentProps) => {
  // async-function example

  /** The return type of an async function or method must be the global Promise<T> type. */
  async function getData(): Promise<string> {
    return 'data fetched successfully'
  }

  const result = getData()

  return (
    <div>
      <strong>Name : </strong> {name}
      and <strong>Age : </strong> {age}
    </div>
  )
}
export default Component
