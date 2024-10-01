import { useEffect } from "react"
import { useState } from "react"

const Seven = () => {
  const [timer, settimer] = useState(60)
  useEffect(() => {
    if (timer > 0) {
      const time = setTimeout(() => {
        settimer(timer - 1)
      }, 1000)
      return () => clearTimeout(time)
    }
  }, [timer])
  return (
    <>

      <div className="flex flex-col items-center justify-center border w-[200px] h-[200px]">
        <p>Timer</p>
        <div>{timer}</div>
      </div>
    </>

  )
}

export default Seven