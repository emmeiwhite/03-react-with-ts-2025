import { z } from 'zod'
import ToursList from './ToursList'

// Create zod schema & inferred type

const TourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string()
})

type Tour = z.infer<typeof TourSchema>

const fetchTours = async (url: string): Promise<Tour[]> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // This is the rawData now
    const rawData: Tour[] = await response.json()

    const result = TourSchema.array().safeParse(rawData)
    console.log(result)
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'there was an error while fetching data ...'
    console.log(errorMessage)
  }
  return []
}
const FetchDataWithZod = async () => {
  const tours = await fetchTours(url)

  return (
    <div>
      <ToursList tours={tours} />
    </div>
  )
}
export default FetchDataWithZod
