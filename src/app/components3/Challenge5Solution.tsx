type Basic = {
  type: 'basic'
  name: string
}

type Advanced = {
  type: 'advanced'
  name: string
  email: string
}

type ComponentProps = Basic | Advanced

const Component = (props: ComponentProps) => {
  const output =
    props.type === 'advanced' ? (
      <h1 className="bg-green-300 p-4 rounded">
        Name:{props.name} & Email: {props.email}
      </h1>
    ) : (
      <h1 className="bg-orange-400 p-4 rounded">Name: {props.name}</h1>
    )
  return <div>{output}</div>
}
export default Component
