import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

type T = {
  initialTodos: Todo[];
};

const TodoItem: React.FC<TodoProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

const App: React.FC<T> = ({ initialTodos }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo) {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      const newTodoItem: Todo = {
        id: newId,
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className="font-bold text-lg">Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="New Todo"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
