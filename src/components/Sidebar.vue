<template>
  <div class="sidebar">
    <select class="sidebar__select">
      <option>Все</option>
      <option>Несполненные</option>
      <option>Исполненные</option>
    </select>

    <ul class="sidebar__list">
      <router-link
        v-for="(title, idx) in titles"
        :key="urls[idx]"
        :to="urls[idx]"
        tag="li"
        active-class="active"
        class="sidebar__item"
      >
        <a class="sidebar__title">{{ titles[idx] }}</a>
        <p class="delete" v-on:click="removeList(idx)">x</p>
      </router-link>
    </ul>

    <div class="sidebar__add">
      <input
        class="sidebar__input input"
        type="text"
        placeholder="Введите название списка"
        v-bind:value="inputValue"
        v-on:input="inputChangeHandler"
        v-on:keypress.enter="addNewList"
      />
      <button class="sidebar__btn btn" v-on:click="addNewList">
        Добавить список
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    titles: ["List 1", "List 2"],
    urls: ["/list1", "/list2"],
    inputValue: "",
    lists: [],
  }),
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewList() {
      if (this.inputValue !== "") {
        this.titles.push(this.inputValue);
        this.urls.push("/list" + this.titles.length);
        this.inputValue = "";
      }
    },
    removeList(idx) {
      this.titles.splice(idx, 1);
      this.urls.splice(idx, 1);
    },
  },
};
</script>
