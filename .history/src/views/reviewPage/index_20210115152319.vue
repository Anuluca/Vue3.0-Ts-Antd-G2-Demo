<template src="./index.html"></template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    // msg: String,
  },
})
export default class ReviewPage extends Vue {
  backHome (){
    this.$router.push({
     path:'Home'
   }) 
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
