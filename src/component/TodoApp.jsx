import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Vazifa qo'shish funksiyasi
  function handleAddTodo(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: inputValue }]); // ID string formatida
      setInputValue("");
    }
  }

  // Drag and Drop funksiyasi
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const reorderedTodos = Array.from(todos);
    const [removed] = reorderedTodos.splice(result.source.index, 1);
    reorderedTodos.splice(result.destination.index, 0, removed);

    setTodos(reorderedTodos);
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Todo App
      </h1>

      {/* Input Form */}
      <form className="flex mb-4" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Todo qo'shish..."
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
        >
          Qo'shish
        </button>
      </form>

      {/* Drag and Drop Context */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="space-y-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center text-gray-800"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {todo.text}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TodoApp;
