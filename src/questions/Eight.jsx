import { useState } from "react";

const Eight = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleAddToDo = () => {
    if (text.trim() !== "") {
      setTodos((pre) => [...pre, text]);
      setText('')
    }
  };
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)
  };

  return (
    <div className="w-[400px]">
      <h1 className="text-center mb-5 font-bold">ToDo App</h1>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Enter Todo"
          value={text}
          onChange={handleChange}
          className="text-black"
        />
        <button
          className="py-1 bg-green-500 px-3 mb-3 "
          onClick={handleAddToDo}
        >
          Add
        </button>
      </div>{" "}
      {todos.map((todo, index) => {
        return (
          <ul key={index} className="flex justify-between">
            <li>{todo}</li>
            <button
              onClick={() => handleDelete(index)}
              className="py-1 bg-red-500 mb-2"
            >
              Delete
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default Eight;
