import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoActions from './components/Todos/TodoActions';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (idElem) => {
    setTodos(todos.filter((todo) => todo.id !== idElem));
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          completedTodoExist={!!completedTodoCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodo={deleteCompletedTodoHandler}
        />
      )}
      {todos.length > 0 ? (
        <TodoList
          toggleTodo={toggleTodoHandler}
          deleteTodo={deleteTodoHandler}
          todos={todos}
        />
      ) : (
        <h2>Todo list is empty</h2>
      )}
      {completedTodoCount > 0 && (
        <h2>{`You have completed ${completedTodoCount} ${
          completedTodoCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}
export default App;
