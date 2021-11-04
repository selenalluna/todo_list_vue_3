import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import dateFilter from "@/filters/date.filter"

// Vue.filter("upper", (name) => {
//   return name.toUpperCase();
// });

createApp(App).use(store).use(router).mount("#app");
