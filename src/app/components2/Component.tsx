type ComponentProps = { name: string; age: number }

const Component = ({ name, age }: ComponentProps) => {
  return (
    <div>
      <strong>Name : </strong> {name}
      and <strong>Age : </strong> {age}
    </div>
  )
}
export default Component
