<template>
  <div class="hello-world">
    {{ msg }}
    <g2-table></g2-table>
    <div class="into">
      <a-button type="primary" block size="large" @Click="toApprove">
        进入子流程
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import G2Table from "@/components/HelloWorld.vue"; 
@Options({
  components: {
    G2Table
  },
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;

  toApprove() {
    this.$router.push({
      path: "reviewPage",
      query: {
        params: "",
      },
    });
  }
}
</script>

<style scoped>
.hello-world {
  position: relative;
  height: 100%;
}
.into {
  width: 500px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
