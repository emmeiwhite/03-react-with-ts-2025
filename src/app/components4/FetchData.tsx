import ToursList from './ToursList'

const url: string = 'https://www.course-api.com/react-tours-project'

export type Tour = {
  id: string
  image: string
  name: string
  price: string
  info: string
}

// moving the fetch logic in its own function

const fetchTours = async (url: string): Promise<Tour[]> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: Tour[] = await response.json()
    console.log(data)
    return data
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'there was an error while fetching data ...'
    console.log(errorMessage)
  }
  return []
}
const FetchData = async () => {
  const tours = await fetchTours(url)

  return (
    <div>
      <ToursList tours={tours} />
    </div>
  )
}
export default FetchData
