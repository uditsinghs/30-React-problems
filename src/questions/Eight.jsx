import { useState } from "react"


const Eight = () => {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <input type="text" placeholder="Enter Todo" value={text} onChange={handleChange} 
      className="text-black"/>
    </div>
  )
}

export default Eight