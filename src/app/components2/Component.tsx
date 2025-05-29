const Component = ({ name, age }: { name: string; age: number }) => {
  return (
    <div>
      <strong>Name : </strong> {name}
      and <strong>Age : </strong> {age}
    </div>
  )
}
export default Component
