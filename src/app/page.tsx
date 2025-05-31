import Component from './components2/Component'
import StateAndEvents from './components3/StateAndEvents'

const LandingPage = () => {
  return (
    <div className="max-w-6xl px-6 mx-auto">
      {/* Basic Types */}
      <Component
        name="John Doe"
        age={45}
      />

      <Component
        name="Rafia"
        age={30}>
        We are here!
      </Component>

      {/* State & Events */}

      <StateAndEvents />
    </div>
  )
}
export default LandingPage
