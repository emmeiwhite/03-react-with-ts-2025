interface Button3Props {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button3 = (props: Button3Props) => {
  return (
    <button
      onClick={event => props.handleClick(event, 23)}
      className="rounded px-2 py-1 bg-teal-400 hover:bg-teal-500 text-white transition">
      Button3
    </button>
  )
}
export default Button3
