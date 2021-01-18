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
    alert(1)
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
