<template>
  <div class="hello-world">
    {{ msg }}
    <div class="into">
      <a-button type="primary" block size="large" @Click="toApprove">
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

  toApprove(){
   this.$router.push({
     path:'reviewPage',
     query:{
       params:''
     }
   }) 
  }
}
</script>

<style scoped>
.hello-world{
  position: relative;
}
.into {
  width: 500px;
  position: absolute;
  right: 10px;
}
</style>
