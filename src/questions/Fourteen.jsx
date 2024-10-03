import { useState } from "react"


const Fourteen = () => {
  const [selectColor, setSelectColor] = useState("#000")
  return (
    <div>
      <input type="color" onChange={(e) => setSelectColor(e.target.value)} />
      <h1>Select Color</h1>
      <div style={{
        backgroundColor: selectColor,
        width: "500px",
        height: "500px"
      }}></div>
    </div>
  )
}

export default Fourteen