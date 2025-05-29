'use client'

type ButtonProps = {
  handleClick: () => void
}

const Button = ({ handleClick }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="rounded px-2 py-1 bg-orange-400 hover:bg-orange-500 text-white transition">
      Button
    </button>
  )
}
export default Button
