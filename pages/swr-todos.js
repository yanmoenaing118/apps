import { useRef, useState } from "react";
import LineLoading from "../components/LineLoading";
import useTodo from "../lib/useTodo";

export default function SWRTodosPage() {
  const { list, loading, createTodo, updateTodo, deleteTodo } = useTodo();
  const [createLoading, setCreateLoading] = useState(false);

  async function handleSubmit(value) {
    setCreateLoading(true);
    const body = {
      text: value,
    };
    const todo = await createTodo(body);
    setCreateLoading(false);
  }

  async function handleUpdateTodo(body) {
    const todo = await updateTodo(body._id, body);

    console.log("updated ", todo);
  }

  async function handleDeleteTodo(id) {
    await deleteTodo(id);
  }

  return (
    <div className="max-w-md mx-auto mt-6">
      <h1 className="uppercase mb-4">Todo list</h1>
      <CreateTodoForm onSubmit={handleSubmit} loading={createLoading} />
      <TodoList
        list={list}
        loading={loading}
        onUpdate={handleUpdateTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

function TodoList({ list, loading, onUpdate, onDelete }) {
  if (loading) return <LineLoading />;
  return list.map((todoItem) => (
    <TodoItem
      key={todoItem._id}
      item={todoItem}
      onUpdate={onUpdate}
      onDelete={onDelete}
    />
  ));
}

function TodoItem({ item, onUpdate, onDelete }) {
  const oldText = item.text;
  const [body, setBody] = useState(item);

  function handleChange(name, value) {
    setBody((oldBody) => {
      return { ...oldBody, [name]: value };
    });
  }

  function handleFocusout() {
    console.log(body);
    return oldText === body.text ? "" : onUpdate(body);
  }

  function handleChecked(value) {
    onUpdate({ ...body, isComplete: value });
  }

  function handleDelete() {
    onDelete(item._id);
  }

  return (
    <div className="shadow-sm mt-3 mb-3 flex p-1.5 items-center gap-3">
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={(e) => handleChecked(e.target.checked)}
      />
      <input
        type="text"
        className="flex-1"
        value={body.text}
        onChange={(e) => handleChange("text", e.target.value)}
        onBlur={handleFocusout}
      />

      <button onClick={handleDelete}>X</button>
    </div>
  );
}

function CreateTodoForm({ onSubmit, loading }) {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef();

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInputValue("");
    if (!inputValue) return;
    onSubmit(inputValue);
    ref.current.focus();
  }

  return (
    <form className="shadow mb-6" onSubmit={handleSubmit}>
      <input
        className="w-full px-2 py-3"
        type="text"
        placeholder="enter your task"
        value={inputValue}
        onChange={handleChange}
        disabled={loading}
        ref={ref}
      />
      {loading && <div>Loading...</div>}

      <style jsx>{`
        form {
          position: relative;
        }
        div {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </form>
  );
}
