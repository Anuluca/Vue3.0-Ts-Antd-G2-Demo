import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue';  //引入AntDesign
import 'ant-design-vue/dist/antd.css';  //引入AntDesign样式

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
