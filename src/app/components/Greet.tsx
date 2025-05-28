type GreetProps = {
  name: string
}
const Greet = (props: GreetProps) => {
  return (
    <div>
      <p>
        Welcome <span className="font-semibold">{props.name}</span> into the world of true coding
      </p>
    </div>
  )
}
export default Greet
