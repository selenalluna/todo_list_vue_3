<template>
  <div class="container">
    <Sidebar />

    <div class="empty"></div>

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: "main",
  components: { Sidebar },
};
</script>
