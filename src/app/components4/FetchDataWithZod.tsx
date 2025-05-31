import { z } from 'zod'
import ToursList from './ToursList'

// Create zod schema & inferred type

// ✅ 1. Define Zod schema
const TourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string()
})

// ✅ 2. Inferred Type
type Tour = z.infer<typeof TourSchema>

// ✅ 3. API URL
const url = 'https://www.course-api.com/react-tours-project'

// ✅ 4. Fetch + Validate
const fetchTours = async (url: string): Promise<Tour[]> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // This is the rawData now
    const rawData: unknown = await response.json()

    const result = z.array(TourSchema).safeParse(rawData)

    if (!result.success) {
      console.error('❌ Zod Validation Error:', result.error)
      return []
    }

    console.log(result)

    // ✅ Safe to use
    return result.data
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
