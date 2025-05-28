type PersonProps = {
  name: {
    first: string
    last: string
  }
}

const Person = (props: PersonProps) => {
  return (
    <div>
      <h2>FirstName: {props.name.first}</h2>
      <h2>LastName: {props.name.last}</h2>
    </div>
  )
}
export default Person
