type GreetProps = {
  name: string
  messageCount: number
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <div className="text-center">
      {props.isLoggedIn ? (
        <p>
          Welcome <span className="font-semibold">{props.name}</span>. You have {props.messageCount}{' '}
          unread messages
        </p>
      ) : (
        <p className="font-bold">Welcome Guest</p>
      )}
    </div>
  )
}
export default Greet
