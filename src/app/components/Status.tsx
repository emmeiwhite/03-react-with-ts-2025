type StatusProps = {
  status: string
}

const Status = (props: StatusProps) => {
  let message = ''
  if (props.status === 'loading') {
    message = 'Loading ...'
  } else if (props.status === 'error') {
    message = 'Error Fetching data'
  } else {
    message = 'Data Fetched Successfully!'
  }
  return (
    <div>
      {/* <h2>Loading ...</h2>
      <h2>Data Fetched Successfully!</h2>
      <h2>Error Fetching data</h2> */}

      <h2>{message}</h2>
    </div>
  )
}
export default Status
