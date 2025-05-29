'use client'
import Button from './Button'
import Button2 from './Button2'
import Button3 from './Button3'

const ButtonWrapper = () => {
  function handleClick() {
    console.log('button clicked!')
  }

  function handleClick2(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e.target)
  }

  function handleClick3(e: React.MouseEvent<HTMLButtonElement>, id: number) {
    console.log('event is', e)
    console.log('id is', id)
  }
  return (
    <section className="border-1 border-gray-300 p-5 rounded-2xl">
      <h2 className="font-semibold text-2xl mb-2 py-3 text-green-700 mb-4">3) Event Props</h2>

      <div>
        <Button handleClick={handleClick} />
      </div>

      <div className="my-4">
        <Button2 handleClick={handleClick2} />
      </div>

      <div className="my-4">
        <Button3 handleClick={handleClick3} />
      </div>
    </section>
  )
}
export default ButtonWrapper
