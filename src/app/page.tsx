import Greet from './components/Greet'
import Person from './components/Person'

export default function Home() {
  const personName = {
    first: 'bruce',
    last: 'wayne'
  }

  return (
    <section className="max-w-6xl mx-auto">
      <Greet
        name="Imran"
        messageCount={10}
        isLoggedIn={false}
      />

      <Person name={personName} />
    </section>
  )
}
