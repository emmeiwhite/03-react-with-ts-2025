type PersonListProps = {
  people: {
    first: string
    last: string
  }[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.people.map(person => {
        return (
          <h2 key={person.last}>
            {person.first} {person.last}
          </h2>
        )
      })}
    </div>
  )
}
export default PersonList
