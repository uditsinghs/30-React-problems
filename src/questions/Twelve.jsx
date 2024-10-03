/* eslint-disable react/prop-types */
import { useState } from "react"

const Twelve = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('')

  // Corrected: toLowerCase() and includes()
  const filteredItems = items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search Items</h1>
      {/* Input to update the search term */}
      <input
        className="outline-none text-black rounded-lg"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="search.."
      />

      {/* Displaying the filtered items */}
      <ul>
        {filteredItems.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Twelve
