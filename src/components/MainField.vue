<template>
  <div class="main">
    <h1 class="main__title">{{ allTodos[$route.params.id].title }}</h1>

    <ul class="main__list">
      <li
        v-for="(task, idx) in allTodos[$route.params.id].tasks"
        :key="idx"
        class="main__item"
      >
        <p>
          <label>
            <input type="checkbox" :checked="allTodos[$route.params.id].checked[idx]" v-on:click="changeThisChecked(changeChecked, idx)"/>
            <span style="font-size: 1px; color: white">Yellow</span>
          </label>
        </p>
        <div v-bind:class="allTodos[$route.params.id].important[idx] ? 'main__important-circle main__important-circle_red' : 'main__important-circle main__important-circle_white'"></div>
        <p class="main__task">
          {{ allTodos[$route.params.id].tasks[idx] }}
        </p>
        <p class="main__datetime">
          {{ allTodos[$route.params.id].dates[idx] }}
        </p>
        <button v-on:click="removeThisTask(removeTask, idx)" class="btn delete">
          x
        </button>
      </li>
    </ul>

    <div class="main__add">
      <input
        class="main__input input"
        type="text"
        placeholder="Введите текст дела"
        v-bind:value="inputValue"
        v-on:input="inputChangeHandler"
        v-on:keypress.enter="addAndClearInput(addNewTask)"
      />
      <p>
        <label>
          <input
            v-on:click="changeImportant"
            :checked="important"
            type="checkbox"
            class="filled-in"
          />
          <span style="font-size: 1px">Filled in</span>
        </label>
      </p>
      <p class="main__important">Срочное</p>
      <div
        v-on:click="addAndClearInput(addNewTask, important)"
        class="main__btn btn"
      >
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
    important: false,
  }),
  computed: {
    allTodos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    ...mapMutations(["addNewTask", "removeTask", "changeChecked"]),

    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addAndClearInput(mutationName, important) {
      if (this.inputValue !== "") {
        let idxList = this.$route.params.id;
        let value = this.inputValue;
        mutationName({
          index: idxList,
          value: value,
          imp: important,
        });
        this.inputValue = "";
        if (important) {this.important = !this.important};
      }
    },
    removeThisTask(mutationName, idxTask) {
      let idxList = this.$route.params.id;
      mutationName({
        indexTask: idxTask,
        indexList: idxList,
      });
    },
    changeImportant() {
      this.important = !this.important;
    },
    changeThisChecked(mutationName, idxTask) {
      let idxList = this.$route.params.id;
      mutationName({
        indexTask: idxTask,
        indexList: idxList,
      });
    },
    // changeThisImportant(mutationName, idxTask) {
    //   let idxList = this.$route.params.id;
    //   mutationName({
    //     indexTask: idxTask,
    //     indexList: idxList,
    //   });
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
  &__item {
    margin: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item:not(:last-child) {
    margin-bottom: 10px;
  }
  &__important-circle {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin-right: 10px;
  }
  &__important-circle_red {
    background-color: rgb(173, 28, 28);
  }
  &__important-circle_white {
    background-color: rgb(255, 255, 255);
  }
  &__task {
    justify-self: start;
    flex: 1 1 auto;
  }
  &__datetime {
    margin-right: 10px;
  }
  &__add {
    background-color: #a07955;
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
    color: white;
  }
}
</style>
