<template src="./index.html"></template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Chart } from "@antv/g2";

@Options({
  props: {
    // msg: String,
  },
})
export default class G2Table extends Vue {
  chartData: any = [
    { year: "1951 年", sales: 38 },
    { year: "1952 年", sales: 52 },
    { year: "1956 年", sales: 61 },
    { year: "1957 年", sales: 145 },
    { year: "1958 年", sales: 48 },
    { year: "1959 年", sales: 38 },
    { year: "1960 年", sales: 38 },
    { year: "1962 年", sales: 38 },
  ];
  chart: any = new Chart({
    container: "container",
    autoFit: true,
    height: 500,
  });

  // mounted() {
  //   this.chart.data(this.chartData);
  //   this.chart.scale("sales", {
  //     nice: true,
  //   });

  //   this.chart.tooltip({
  //     showMarkers: false,
  //   });
  //   this.chart.interaction("active-region");

  //   this.chart.interval().position("year*sales");

  //   this.chart.render();
  // }
}
</script>

<style lang="sass" src="./index.sass"></style>
