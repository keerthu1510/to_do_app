import React, { useState } from "react";
import "./App.css"; // Import custom CSS file for styling

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  // Set a user input value
  const updateInput = (value) => {
    setUserInput(value);
  };

  // Add item if user input is not empty
  const addItem = () => {
    if (userInput.trim() !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
      };

      // Update list
      const updatedList = [...list, newItem];
      setList(updatedList);

      // Reset userInput
      setUserInput("");
    }
  };

  // Function to delete item from list using id
  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
  };

  // Function to edit item in the list
  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...list];
      updatedTodos[index].value = editedTodo;
      setList(updatedTodos);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">TODO LIST</h1>
      <hr />
      <div className="input-container">
        <input
          type="text"
          placeholder="Add item..."
          value={userInput}
          onChange={(e) => updateInput(e.target.value)}
        />
        <button className="add-button" onClick={addItem}>
          Add
        </button>
      </div>
      <div className="list-container">
        <ul className="todo-list">
          {/* map over and print items */}
          {list.map((item, index) => (
            <li key={item.id} className="todo-item">
              {item.value}
              <div className="button-container">
                <button className="delete-button" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
                <button className="edit-button" onClick={() => editItem(index)}>
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
