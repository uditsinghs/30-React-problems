import { useState } from "react"


const Nine = () => {
  const quates = [
    "When you forgive you win.",

    "Forgiveness is the power to choose how things affect you.",

    " Forgiveness is choosing to be happy.",

    "Forgiveness is simply freeing ourselves from wanting to punish.",

    "We experience what we intend for others.",

    "Fear is wisdom as a child.",

    "Forgiveness is always possible, but reconciliation is not always possible.",

    "Forgiveness gives us the freedom to stay and the freedom to walk away.",
  ]
  const randomQuates = Math.floor(Math.random() * quates.length)
  const [randomquates, setRandomQuates] = useState('')
  const handleQuate = () => {
    const quate = quates[randomQuates]
    setRandomQuates(quate)
  }
  return (
    <div className="flex flex-col gap-5">
      <div>
        {randomquates}
      </div>
      <button onClick={handleQuate} className="py-2 bg-blue-500 rounded-md">Generate Random Quates</button>
    </div>
  )
}

export default Nine