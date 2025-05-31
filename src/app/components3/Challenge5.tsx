type ComponentProps = {
  name: string
  email?: string
  type: string
}

const Component = ({ name, email, type }: ComponentProps) => {
  const output =
    type === 'basic' ? (
      <div className="bg-green-400 p-3 rounded">Name: {name}</div>
    ) : (
      <div className="bg-orange-400 p-3 rounded">
        Name: {name} & Email:{email}
      </div>
    )
  return <div>{output}</div>
}
export default Component
