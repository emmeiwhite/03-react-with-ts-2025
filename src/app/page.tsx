import Component from './components2/Component'

export default function LandingPage() {
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-5">
        <h1>TypeScript + React</h1>

        <Component
          name="John"
          age={20}
        />
      </section>
    </div>
  )
}
