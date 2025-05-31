'use client'

import { useState } from 'react'

const StateAndEvents = () => {
  const [email, setEmail] = useState<string>('')
  return (
    <section>
      <div className="border rounded p-4 my-5">Email: {email}</div>
      <button
        className="px-4 py-2 border border-amber-600 rounded"
        onClick={() => setEmail('Mr. Rouf')}>
        update email
      </button>
    </section>
  )
}
export default StateAndEvents
