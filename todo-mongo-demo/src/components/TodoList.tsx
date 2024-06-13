import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        <TodoListItem />
      </ul>
    </>
  );
};
export default TodoList;
