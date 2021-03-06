import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueCompositionAPI from "@vue/composition-api";

// import ElementUI  from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//   使用 @vue/composition-api
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
