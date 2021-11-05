<template>
  <div class="container">
    <Sidebar />
    <div class="empty"></div>
    <MainField />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import MainField from "../components/MainField.vue";
export default {
  name: "home",
  components: {
    Sidebar, MainField
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
