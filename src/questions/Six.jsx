import { useEffect } from "react"
import { useState } from "react"


const Six = () => {
  const API = "https://jsonplaceholder.typicode.com/posts"
  const [value, setValue] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API)
      const data = await response.json()
      setValue(data)
    }
    fetchData()
  }, [])
  console.log(value);
  
  return (
    <div className="h-full w-full">
      {
    value.map((d) => {
          return (
            <div key={d.id}>
              <h1>{d.title}</h1>
              <p>{d.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Six    