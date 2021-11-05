<template>
  <div class="main">
    <h1 class="main__title">{{ allTodos[$route.params.id].title }}</h1>

    <ul class="main__list">
      <li
        v-for="(task, idx) in allTodos[$route.params.id].tasks"
        :key="idx"
        class="main__item"
      >
        <input type="checkbox" class="filled-in" checked="checked" />
        <p class="main__task">
          {{ allTodos[$route.params.id].tasks[idx] }}
        </p>
        <p class="main__datetime">{{ allTodos[$route.params.id].dates[idx] }}</p>
        <button v-on:click="removeThisTask(removeTask, idx)" class="btn delete">
          x
        </button>
      </li>
    </ul>

    <div class="main__add">
      <input
        class="main__input input"
        type="text"
        placeholder="Введите название дела"
        v-bind:value="inputValue"
        v-on:input="inputChangeHandler"
        v-on:keypress.enter="addAndClearInput(addNewTask)"
      />
      <input class="main__checkbox" type="checkbox" />
      <p class="main__important">Срочное</p>
      <div v-on:click="addAndClearInput(addNewTask), addThisDate(addDate, date)" class="main__btn btn">
        Добавить дело
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    inputValue: "",
  }),
  computed: {
    allTodos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    ...mapMutations(["addNewTask", "removeTask"]),

    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addAndClearInput(mutationName) {
      if (this.inputValue !== "") {
        let idxList = this.$route.params.id;
        let value = this.inputValue;
        mutationName({
          index: idxList,
          value: value,
        });
        this.inputValue = "";
      }
    },
    removeThisTask(mutationName, idxTask) {
      let idxList = this.$route.params.id;
      mutationName({
        indexTask: idxTask,
        indexList: idxList,
      });
    },
    // formatDate() {
    //   let options = {
    //     day: "2-digit",
    //     month: "2-digit",
    //     year: "2-digit",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //   };
    //   let date = new Date();
    //   return new Intl.DateTimeFormat("ru-RU", options).format(date);
    // },
    // addThisDate(mutationName, date) {
    //   let idxList = this.$route.params.id;
    //   // mutationName({
    //   //   index: idxList,
    //   //   value: date,
    //   // });
    //   console.log("component: ", idxList, date);
    // },
  },
};
</script>

<style lang="scss">
.main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  &__title {
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    margin: 10px 0;
  }
  &__list {
    flex: 1 1 auto;
  }
  &__checkbox {
    margin-right: 10px;
  }
  &__item {
    margin: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item:not(:last-child) {
    margin-bottom: 10px;
  }
  &__task {
    justify-self: start;
    flex: 1 1 auto;
  }
  &__datetime {
    margin-right: 10px;
  }
  &__add {
    background-color: #9bb6bd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    border-radius: 0 0 10px 10px;
  }
  &__input {
    flex: 1 1 30%;
    margin-right: 20px;
  }
  &__important {
    margin-right: 20px;
  }
}
</style>
