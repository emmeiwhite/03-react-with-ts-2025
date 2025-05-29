interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const Input = ({ handleChange, value }: InputProps) => {
  return (
    <input
      type="text"
      onChange={handleChange}
      value={value}
      className="border border-amber-600 p-2"
    />
  )
}
export default Input
