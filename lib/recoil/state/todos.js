import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    return filterTodos(list, filter);
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const list = get(todoListState);
    const totalNum = list.length;

    const totalCompletedNum = list.filter((item) => item.isComplete).length;
    const totalUnCompletedNum = totalNum - totalCompletedNum;

    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUnCompletedNum,
      percentCompleted,
    };
  },
});

function filterTodos(list, filter) {
  switch (filter) {
    case "Show Completed":
      return list.filter((item) => item.isComplete);
    case "Show Uncompleted":
      return list.filter((item) => !item.isComplete);
    default:
      return list;
  }
}
