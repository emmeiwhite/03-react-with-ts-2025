type ComponentProps = { name: string; age: number }

const Component = ({ name, age }: ComponentProps) => {
  // async-function example

  async function getData(): string {
    return 'data fetched successfully'
  }

  return (
    <div>
      <strong>Name : </strong> {name}
      and <strong>Age : </strong> {age}
    </div>
  )
}
export default Component
