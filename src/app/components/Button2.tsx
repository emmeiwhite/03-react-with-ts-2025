interface Button2Props {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button2 = (props: Button2Props) => {
  return (
    <button
      onClick={props.handleClick}
      className="rounded px-2 py-1 bg-green-400 hover:bg-green-500 text-white transition">
      Button2
    </button>
  )
}
export default Button2
