import Greet from './components/Greet'
import Heading from './components/Heading'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

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
    <main className="max-w-6xl mx-auto py-3">
      <section className="border-1 border-gray-300 p-5 rounded-2xl mb-4">
        <h2 className="font-semibold text-2xl mb-2 py-3 text-green-700 ">1) Basic Types</h2>

        <h3 className="font-semibold text-xl mt-3">Greet:</h3>
        <Greet
          name="Imran"
          messageCount={10}
          isLoggedIn={false}
        />

        <h3 className="font-semibold text-xl mt-3">Person:</h3>
        <Person name={personName} />

        <h3 className="font-semibold text-xl mt-3">PersonList:</h3>
        <PersonList people={personList} />
      </section>

      <section className="border-1 border-gray-300 p-5 rounded-2xl">
        <h2 className="font-semibold text-2xl mb-2 py-3 text-green-700 mb-4">2) Advanced Types</h2>

        <Status status="loading" />

        <Heading>Placeholder text</Heading>
      </section>
    </main>
  )
}
