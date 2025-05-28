'use client'
import Button from './Button'

const ButtonWrapper = () => {
  function handleClick() {
    console.log('button clicked!')
  }
  return (
    <section className="border-1 border-gray-300 p-5 rounded-2xl">
      <h2 className="font-semibold text-2xl mb-2 py-3 text-green-700 mb-4">3) Event Props</h2>

      <Button handleClick={handleClick} />
    </section>
  )
}
export default ButtonWrapper
