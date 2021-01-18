<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">Logo</div>
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys"  v-model:openKeys="openKeys" mode="inline">
        <a-menu-item key="1">
          <router-link to="/">
            <pie-chart-outlined />
            <span>主页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">
            <desktop-outlined />
            <span>菜单1</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span><user-outlined /><span>菜单2</span></span>
          </template>
          <a-menu-item key="3">子菜单1</a-menu-item>
          <a-menu-item key="4">子菜单2</a-menu-item>
          <a-menu-item key="5">子菜单3</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span><team-outlined /><span>菜单3</span></span>
          </template>
          <a-menu-item key="6">子菜单1</a-menu-item>
          <a-menu-item key="8">子菜单2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <div
          :style="{
            padding: '24px',
            background: '#fff',
            minHeight: '360px',
            marginTop: '16px',
            height: 'calc(100vh - 149px)'
          }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";

@Options({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
})
export default class Home extends Vue {
  collapsed = false;
  selectedKeys: Array<string> = ["1"];
  openKeys:Array<string>= ['sub1','sub2']
}
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.logo{
  text-align: center;
  font-size: 16px;
  line-height: 32px;
  color: white;
  font-style: italic;
  font-weight: bold;
}
</style>
