import React, { useState } from "react";

function Problem_6() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleDelete = (index) => {
    setTodos(
      todos.filter((todo, i) => {
        return i !== index;
      })
    );
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}

            <button onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Problem_6;