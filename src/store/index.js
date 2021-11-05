import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: "List 1",
        tasks: ["Купить молока", "Уничтожить мир", "Погладить котика"],
        dates: ["21.07.2018 13:55", "19.05.2018 23:25", "19.05.2018 23:25"],
        done: false,
      },
      {
        id: 2,
        title: "List 2",
        tasks: [
          "Покормить кота",
          "Перебрать вещи в шкафу",
          "Убрать пыль с поверхностей",
        ],
        dates: ["22.02.2021 22:22", "25.02.2021 09:25", "27.02.2021 14:15"],
        done: false,
      },
    ],
  },
  mutations: {
    addNewList(state, value) {
      let newTodo = {
        id: state.todos.length + 1,
        title: value,
        tasks: [],
        dates: [],
        done: false,
      };
      state.todos.push(newTodo);
    },
    removeList(state, idx) {
      state.todos.splice(idx, 1);
    },
    addNewTask(state, { idx, value }) {
      localStorage.setItem("idx", idx);
      localStorage.setItem("value", value);
      state.todos[idx].tasks.push(value);
    },
    removeTask(state, idx) {
      state.todos[idx].tasks.splice(idx, 1);
    },
  },
  actions: {},
  modules: {},
  getters: {
    todos(state) {
      return state.todos;
    },
  },
});
