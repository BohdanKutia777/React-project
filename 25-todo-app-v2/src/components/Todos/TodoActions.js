import Button from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodoActions.module.css';
function TodoActions({ resetTodos, deleteCompletedTodo, completedTodoExist }) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button
        title="Reset Todos"
        onClick={resetTodos}
      >
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodo}
        disabled={!completedTodoExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodoActions;
