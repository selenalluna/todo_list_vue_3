import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: "List 1",
        tasks: ["Купить молока", "Уничтожить мир", "Погладить котика"],
        dates: ["21.07.2018, 13:55", "19.05.2018, 23:25", "19.05.2018, 23:25"],
        checked: [false, false, true],
        important: [false, true, false],
        done: 1,
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
        checked: [true, true, true],
        important: [false, false, false],
        done: 2,
      },
      {
        id: 3,
        title: "List 3",
        tasks: [],
        dates: [],
        checked: [],
        important: [],
        done: 0,
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
        checked: [],
        important: [],
        done: 0,
      };
      state.todos.push(newTodo);
      console.log(state.todos);
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
      state.todos[payload.index].important.push(payload.imp);
      if (state.todos[payload.index].tasks.length > 0)
        state.todos[payload.index].done = 1;
    },
    removeTask(state, payload) {
      state.todos[payload.indexList].tasks.splice(payload.indexTask, 1);
      state.todos[payload.indexList].dates.splice(payload.indexTask, 1);
      state.todos[payload.indexList].checked.splice(payload.indexTask, 1);
      if (state.todos[payload.indexList].tasks.length === 0)
        state.todos[payload.indexList].done = 0;
    },
    changeChecked(state, payload) {
      state.todos[payload.indexList].checked[payload.indexTask] =
        !state.todos[payload.indexList].checked[payload.indexTask];
      let countCheck = 0;
      for (let i = 0; i < state.todos[payload.indexList].tasks.length; i++)
        if (state.todos[payload.indexList].checked[i]) countCheck++;
      if (countCheck === state.todos[payload.indexList].tasks.length) state.todos[payload.indexList].done = 2;
      else state.todos[payload.indexList].done = 1;
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
