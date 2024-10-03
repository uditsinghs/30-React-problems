import { useReducer } from "react"


const Eighteen = () => {
  const initialState = {
    count: 0
  }

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 }
      case "DECREMENT":
        return { count: state.count - 1 }
      case "RESET":
        return { count: 0 }
      default: return state
    }

  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-3">
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })} className="py-1 px-2 bg-yellow-500 rounded-lg hover:bg-yellow-700 duration-300 cursor-pointer">INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} className="py-1 px-2 bg-yellow-500 rounded-lg hover:bg-yellow-700 duration-300 cursor-pointer">DECREMENT</button>
      <button onClick={() => dispatch({ type: "RESET" })} className="py-1 px-2 bg-yellow-500 rounded-lg hover:bg-yellow-700 duration-300 cursor-pointer">RESET</button>
    </div>

  )
}

export default Eighteen