<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">logo</div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <router-link to="/">
          <a-menu-item key="1">
            <user-outlined />
            <span>主页</span>
          </a-menu-item>
        </router-link>
        <router-link to="/about">
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>菜单1</span>
          </a-menu-item>
        </router-link>
        <a-menu-item key="3">
          <upload-outlined />
          <span>菜单2</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";

@Options({
  components: {
    "user-outlined": UserOutlined,
    "video-camera-outlined": VideoCameraOutlined,
    "upload-outlined": UploadOutlined,
    "menu-unfold-outlined": MenuUnfoldOutlined,
    "menu-fold-outlined": MenuFoldOutlined,
  },
})
export default class Home extends Vue {}
</script>

<style>
.ant-layout {
  height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: white;
  font-size: 21px;
  text-align: center;
  font-weight: bold;
  font-style: italic;
}
</style>
