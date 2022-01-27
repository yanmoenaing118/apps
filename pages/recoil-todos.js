import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  filteredTodoListState,
  todoListFilterState,
  todoListState,
  todoListStatsState,
} from "../lib/recoil/state/todos";
import { useState } from "react";

export default function RecoilTodosPage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <TodoListStats />
      <TodoFilter />
      <TodoItemCreator />
      <TodoList />
    </div>
  );
}

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return todoList.map((todoItem) => (
    <TodoItem key={todoItem.id} item={todoItem} />
  ));
}

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className="shadow-sm mt-3 mb-3 flex p-1.5 items-center gap-3">
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <input
        type="text"
        className="flex-1"
        value={item.text}
        onChange={editItemText}
      />

      <button onClick={deleteItem}>X</button>
    </div>
  );
}

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUnCompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUnCompletedNum}</li>
      <li>Percent completed: {percentCompleted}</li>
    </ul>
  );
}

function TodoFilter() {
  const setFilter = useSetRecoilState(todoListFilterState);

  function handleChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div className="mb-3">
      Filter:
      <select
        className="shadow-sm p-2"
        name="todos"
        id="todos"
        onChange={handleChange}
      >
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  function addItem() {
    setTodoList((oldTodoList) => {
      return [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ];
    });
    setInputValue("");
  }
  return (
    <form
      className="shadow-md mb-6"
      onSubmit={(e) => {
        e.preventDefault();
        addItem();
      }}
    >
      <input
        className="w-full px-2 py-3"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

let id = 0;
function getId() {
  return id++;
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
