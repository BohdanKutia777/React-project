import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo) => (
        <Todo
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
