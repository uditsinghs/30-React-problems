

const Four = () => {
  // const items = ['item1', 'item2', "item2"]
  const items = [
    {
      name: "udit",
      age: 21,
      course: "BCA",

    },
    {
      name: "udit",
      age: 21,
      course: "BCA",

    },

    {
      name: "udit",
      age: 21,
      course: "BCA",

    },

    {
      name: "udit",
      age: 21,
      course: "BCA",

    },


  ]
  return (
    <ul>
      {items.map((item, index) => (
        <div key={index} className="flex gap-5">
          <li>Name: {item.name}</li>
          <li>age: {item.age}</li>
          <li>Course: {item.course}</li>
        </div>
      ))}
    </ul>
  )
}

export default Four