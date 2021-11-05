<template>
  <div class="main">
    <h1 class="main__title">Добро пожаловать</h1>
    <p class="main__text">Вы находитесь в приложении для ведения записей.</p>
    <p class="main__text">
      Для начала работы выберите список слева или создайте новый.
    </p>
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
    AddAndClearInput(mutationName) {
      if (this.inputValue !== "") {
        let indexTo = this.idx;
        let valueTo = this.inputValue;
        mutationName({ indexTo, valueTo });
        this.inputValue = "";
      }
    },
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
  &__text {
    text-align: center;
  }}
</style>
