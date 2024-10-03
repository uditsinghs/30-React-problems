
const Seventeen = () => {
  const products = [
    {
      id: "1",
      name: "product1"
    },
    {
      id: "2",
      name: "product2"
    },
    {
      id: "3",
      name: "product3"
    },
    {
      id: "4",
      name: "product4"
    },
    {
      id: "5",
      name: "product5 "
    },
  ]
  return (
    <div className="w-full h-full flex justify-center items-center bg-zinc-800 text-white">
      <ul>
        {products.map((p) => {
          return (
            <div key={p.id} className="flex gap-4 mb-3">
              <li>{p.name}</li>
              <button className="py-1 px-2 bg-green-500 rounded-lg hover:bg-green-700 duration-300">Add to Cart</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Seventeen