import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue';  //引入AntDesign
import 'ant-design-vue/dist/antd.css';  //引入AntDesign样式
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons-vue';

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .mount("#app");

  export default {
    components: {
      HomeOutlined,
      SettingFilled,
      SmileOutlined,
      SyncOutlined,
      LoadingOutlined,
    },
  };