import Todo from "../../models/todoModel";

import dbConnect from "./../../lib/dbConnect";
export default async function handler(req, res) {
  await dbConnect();

  const { method, query, body } = req;

  if (method === "POST") {
    const todo = await createTodo(body);
    return res.status(201).json(todo);
  } else if (method === "PUT") {
    const todo = await updateTodo(query.id, body);
    return res.status(200).json(todo);
  } else if (method === "DELETE") {
    await deletTodo(query.id);
    res.status(200).json({
      message: "Todo Item succefully deleted",
    });
  }

  const todos = await getAllTodos();
  res.status(200).json(todos);
}

async function getAllTodos() {
  const todos = await Todo.find({});
  return todos;
}

async function createTodo(body) {
  const newTodo = await Todo.create(body);
  return newTodo;
}

async function updateTodo(id, body) {
  const updatedTodo = await Todo.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedTodo;
}
async function deletTodo(id) {
  await Todo.findByIdAndDelete(id);
}
