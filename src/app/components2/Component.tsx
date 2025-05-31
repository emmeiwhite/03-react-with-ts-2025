type ComponentProps = {
  name: string
  age: number
  children?: React.ReactNode
}

const Component = ({ name, age, children }: ComponentProps) => {
  return (
    <div>
      <strong>Name : </strong> {name}
      and <strong>Age : </strong> {age}
      <p>{children}</p>
    </div>
  )
}
export default Component
