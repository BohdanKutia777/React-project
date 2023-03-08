import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo, index) => (
        <Todo
          index={index}
          deleteTodo={deleteTodo}
          todo={todo}
          key={index}
        />
      ))}
    </div>
  );
}

export default TodoList;
