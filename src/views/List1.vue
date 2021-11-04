<template>
  <div class="main">
    <div class="main__title">Список дел на отпуск</div>

    <ul class="main__list">
      <li v-for="(task, idx) in tasks" :key="task[idx]" class="main__item">
        <input class="main__checkbox" type="checkbox" />
        <p class="main__task">{{ tasks[idx] }}</p>
        <!-- <p class="main__datetime">{{ dates[idx] }}</p> -->
        <p class="delete" v-on:click="removeTask(idx)">x</p>
      </li>
    </ul>

    <div class="main__add">
      <input
        class="main__input input"
        type="text"
        placeholder="Введите название дела"
        v-bind:value="inputValue"
        v-on:input="inputChangeHandler"
        v-on:keypress.enter="addNewTask"
      />
      <input class="main__checkbox" type="checkbox" />
      <p class="main__important">Срочное</p>
      <button v-on:click="addNewTask" class="main__btn btn">
        Добавить дело
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tasks: ["Купить молока", "Уничтожить мир", "Погладить котика"],
    dates: ["21.07.2018 13:55", "19.05.2018 23:25", "19.05.2018 23:25"],
    dateNow: new Date(),
  }),
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewTask() {
      if (this.inputValue !== "") {
        this.tasks.push(this.inputValue);
        // this.dates.push(this.dateNow | date(this.dateNow));
        this.inputValue = "";
      }
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
      this.dates.splice(idx, 1);
    },
  },
  // mounted() {
  //   setInterval(() => {
  //     this.dateNow = new Date();
  //   })
  // }
};
</script>
