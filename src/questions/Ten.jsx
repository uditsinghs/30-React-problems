import { useState } from "react"

const Ten = () => {
  const [file, setFile] = useState(null)

  const handleImage = (e) => {
    setFile(e.target.files[0])
  }
  return (
    <div>
      <input type="file" onChange={handleImage} />
      {file && <img className="w-[200px]" src={URL.createObjectURL(file)} alt="selected_image"></img>}
    </div>
  )
}

export default Ten