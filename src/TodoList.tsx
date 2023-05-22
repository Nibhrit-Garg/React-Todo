import React, { useState } from "react";
import TodoRow from "./TodoRow";
import "./styles/TodoRow.css";
import "./styles/TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { label: inputValue, id: Date.now() }]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setSelectedTodos(selectedTodos.filter((todoId) => todoId !== id));
  };

  const toggleTodoSelection = (id) => {
    if (selectedTodos.includes(id)) {
      setSelectedTodos(selectedTodos.filter((todoId) => todoId !== id));
    } else {
      setSelectedTodos([...selectedTodos, id]);
    }
  };

  const deleteSelectedTodos = () => {
    const updatedTodos = todos.filter(
      (todo) => !selectedTodos.includes(todo.id)
    );
    setTodos(updatedTodos);
    setSelectedTodos([]);
  };

  const deleteAllTodos = () => {
    setTodos([]);
    setSelectedTodos([]);
  };

  return (
    <div className="TodoList">
      <div className="ButtonContainer">
        <button className="DeleteButton" onClick={deleteSelectedTodos}>
          Delete Selected
        </button>
        <button className="DeleteButton" onClick={deleteAllTodos}>
          Delete All
        </button>
      </div>
      <div className="TodoRows">
        {todos.map((todo) => (
          <TodoRow
            key={todo.id}
            label={todo.label}
            isSelected={selectedTodos.includes(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onToggleSelection={() => toggleTodoSelection(todo.id)}
          />
        ))}
      </div>
      <div className="AddTodo">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default TodoList;
