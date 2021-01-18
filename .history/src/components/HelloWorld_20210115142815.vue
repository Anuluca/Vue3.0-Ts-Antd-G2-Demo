<template>
  <div>
    {{ msg }}
    <div class="into">
      <a-button type="primary" block size="large">
        进入子流程
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<style scoped>
.into {
  width: 500px;
  margin-left: calc(50% - 250px);
  margin-top: 100px;
}
</style>
