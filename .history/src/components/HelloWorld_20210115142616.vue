<template>
<div>
  {{msg}}
  <div class="into"><a-button type="primary" block>
    Primary
  </a-button></div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string;


}
</script>

<style scoped>
.into{
  width: 100px;
}
</style>
