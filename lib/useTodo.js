import useSWR from "swr";

export default function useTodo() {
  const { data, error, mutate } = useSWR("/api/todo", (url) =>
    fetch(url).then((res) => res.json())
  );

  const createTodo = async (body) => {
    const todo = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());

    mutate();
    return todo;
  };

  const updateTodo = async (id, body) => {
    const todo = await fetch(`/api/todo?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());

    mutate();
    return todo;
  };

  const deleteTodo = async (id) => {
    await fetch(`/api/todo?id=${id}`, {
      method: "DELETE",
    });
    mutate();
  };

  return {
    loading: !data && !error,
    list: data,
    error: error,
    createTodo,
    updateTodo,
    deleteTodo,
  };
}
