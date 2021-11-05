import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: "List 1",
        tasks: ["Купить молока", "Уничтожить мир", "Погладить котика"],
        dates: ["21.07.2018, 13:55", "19.05.2018, 23:25", "19.05.2018, 23:25"],
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
        dates: ["22.02.2021, 22:22", "25.02.2021, 09:25", "27.02.2021, 14:15"],
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
    addNewTask(state, payload) {
      state.todos[payload.index].tasks.push(payload.value);
      let options = {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        };
        let date = Intl.DateTimeFormat("ru-RU", options).format(new Date());
        state.todos[payload.index].dates.push(date);
    },
    removeTask(state, payload) {
      state.todos[payload.indexList].tasks.splice(payload.indexTask, 1);
      state.todos[payload.indexList].dates.splice(payload.indexTask, 1);
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
