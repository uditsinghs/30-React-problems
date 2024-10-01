import { useState } from "react"

const Two = () => {
  const [value, setValue] = useState(0)
  const handleDecrement = () => {
    if (value > 0) {
      setValue(() => value - 1)
    }
  }
  return (
    <div>
      <p className="text-center mb-7 text-2xl font-bold">Counter</p>
      <button onClick={() => setValue(value + 1)} className="py-2 px-8 mr-5 bg-blue-500 rounded-lg hover:bg-blue-700 duration-300 cursor-pointer ">+</button>
      <span className="text-2xl">{value}</span>
      <button onClick={handleDecrement} className="py-2 px-8 ml-4  bg-blue-500 rounded-lg hover:bg-blue-700 duration-300 cursor-pointer ">-</button>
    </div>
  )
}

export default Two