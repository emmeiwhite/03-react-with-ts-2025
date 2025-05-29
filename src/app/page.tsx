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

        <Component>
          <h3>There is no way I will quit!</h3>
        </Component>
      </section>
    </div>
  )
}
