<template>
  <div class="container">
    <Sidebar />
    <div class="empty"></div>
    <MainHello />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import MainHello from "../components/MainHello.vue";
export default {
  name: "home",
  components: {
    Sidebar,
    MainHello,
  },
};
</script>

<style lang="scss">
body {
  background-color: rgb(65, 65, 65);
}
.container {
  max-width: 1200px;
  min-height: 94vh;
  margin: 20px auto;
  display: flex;
}
.empty {
  flex: 0 0 10px;
}
</style>
