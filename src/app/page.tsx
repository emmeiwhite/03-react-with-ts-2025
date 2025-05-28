import Button from './components/Button'
import ButtonWrapper from './components/ButtonWrapper'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

export default function Home() {
  /** Serializable data can be sent from server to the client but not the functions, classes etc */
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
      {/* 1) Basic types */}
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

      {/* 2) Advanced Types */}
      <section className="border-1 border-gray-300 p-5 rounded-2xl">
        <h2 className="font-semibold text-2xl mb-2 py-3 text-green-700 mb-4">2) Advanced Types</h2>

        <Status status="loading" />

        <Heading>Placeholder text</Heading>

        <Oscar>
          <Heading>Imran will shine! O Yeah!🚀</Heading>
        </Oscar>

        <Greet
          name="test"
          isLoggedIn={true}
        />
      </section>

      {/* 3) Event Props: Typing the event props in Button and Input fields */}
      <ButtonWrapper />
    </main>
  )
}
