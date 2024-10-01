import { useState } from "react"


const Five = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleChecked = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className="flex text-center flex-col border w-[200px] h-[200px] justify-center">
      <span className="mb-6">Status:  {isChecked ? "check" :"not checked"}</span>
      <input type="checkbox" onChange={handleChecked} />
    </div>
  )
}

export default Five