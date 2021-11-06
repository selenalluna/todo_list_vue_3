<template>
  <div class="sidebar">
    <!-- <div class="input-field col s12">
      <select>
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Все</option>
        <option value="2">Несполненные</option>
        <option value="3">Исполненные</option>
      </select>
    </div> -->

    <ul class="sidebar__list">
      <router-link
        v-for="(title, idx) in allTodos"
        :key="idx"
        tag="li"
        :to="'/list/' + idx"
        :class="(allTodos[idx].done === 2) ? 'sidebar__item sidebar__item_grey' : (allTodos[idx].done === 1) ? 'sidebar__item sidebar__item_green' : 'sidebar__item'"
      >
        <a class="sidebar__title">{{ allTodos[idx].title }}</a>
        <button v-on:click="this.removeList(idx)" class="btn delete">x</button>
      </router-link>
    </ul>

    <div class="sidebar__add">
      <input
        class="sidebar__input input"
        type="text"
        placeholder="Введите название списка"
        v-bind:value="inputValue"
        v-on:input="inputChangeHandler"
        v-on:keypress.enter="AddAndClearInput(addNewList)"
      />
      <button
        v-on:click="AddAndClearInput(addNewList)"
        class="sidebar__btn btn"
      >
        Добавить список
      </button>
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
    ...mapMutations(["addNewList", "removeList"]),

    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    AddAndClearInput(mutationName) {
      if (this.inputValue !== "") {
        mutationName(this.inputValue);
        this.inputValue = "";
      }
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  flex: 0 1 30%;
  background-color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  &__select {
    margin: 20px;
  }
  &__list {
    flex: 1 1 auto;
  }
  &__item {
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item_green {
    background-color: #e1fff5;
  }
  &__item_grey {
    background-color: #e9e9e9;
  }
  &__item:hover {
    background-color: #e7c8ab;
    transition: 0.3s;
  }
  &__item:not(:hover) {
    transition: 0.3s;
  }
  &__title {
    flex: 1 1 auto;
    justify-self: center;
  }
  &__add {
    background-color: #a07955;
    padding: 20px 10px;
    border-radius: 0 0 10px 10px;
  }
}</style>
