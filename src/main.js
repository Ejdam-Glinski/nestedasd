import Vue from "vue";
import App from "./App.vue";
import "@babel/polyfill";
import Generic from "@/components/Generic.vue";

Vue.config.productionTip = false;

Vue.component("generic", Generic);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
