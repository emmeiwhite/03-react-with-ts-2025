'use client'
import type { Tour } from './FetchData'

const ToursList = ({ tours }: { tours: Tour[] }) => {
  return (
    <div>
      {tours.length > 0
        ? tours.map(tour => {
            return <p key={tour.id}>{tour.name}</p>
          })
        : ''}
    </div>
  )
}
export default ToursList
