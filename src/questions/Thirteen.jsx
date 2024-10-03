/* eslint-disable react/prop-types */
import { useState } from "react"


const Thirteen = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage
  const currentItems = items.slice(indexOfFirstPage, indexOfLastPage)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div>
      <h1>Pagination</h1>
      <ul>
        {currentItems.map((p, i) => {
          return (
            <li key={i}>{p}</li>
          )
        })}
      </ul>
      <div className="flex  gap-3">
        {pageNumbers.map((num) => {
          return (
            <button className="py-1 px-2 bg-yellow-500 rounded-lg cursor-pointer text-black " onClick={() => setCurrentPage(num)} key={num}>{num}</button>
          )
        })}
      </div>
    </div>
  )
}

export default Thirteen