import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

export default function Home() {
  const personName = {
    first: 'bruce',
    last: 'wayne'
  }

  const personList = [
    {
      first: 'bruce',
      last: 'wayne'
    },
    {
      first: 'immi',
      last: 'fimmi'
    },
    {
      first: 'roufi',
      last: 'groofy'
    }
  ]

  return (
    <section className="max-w-6xl mx-auto">
      <Greet
        name="Imran"
        messageCount={10}
        isLoggedIn={false}
      />

      <Person name={personName} />

      <PersonList people={personList} />
    </section>
  )
}
