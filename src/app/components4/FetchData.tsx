const url: string = 'https://www.course-api.com/react-tours-project'

const FetchData = async () => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'there was an error while fetching data ...'
    console.log(errorMessage)
  }

  return <div>FetchData</div>
}
export default FetchData
