<template>
  <div>
    <div class="mt-1">
      <div class="flex items-center justify-between p-2.5">
        <h1 class="text-[16px]">Dayparting</h1>
        <div>sad</div>
      </div>
      <apexchart
        type="heatmap"
        height="350"
        :options="computedOptions"
        :series="computedSeries"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from "@/stores/global";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useGlobalStore, ["getDarkMode"]),
    computedSeries() {
      return [
        {
          name: "Monday",
          data: Array.from({ length: 26 }, () =>
            Math.floor(Math.random() * 100)
          ),
        },
        {
          name: "Tuesday",
          data: Array.from({ length: 26 }, () =>
            Math.floor(Math.random() * 100)
          ),
        },
        {
          name: "Wednesday",
          data: Array.from({ length: 26 }, () =>
            Math.floor(Math.random() * 100)
          ),
        },
        {
          name: "Thursday",
          data: Array.from({ length: 26 }, () =>
            Math.floor(Math.random() * 100)
          ),
        },
        {
          name: "Friday",
          data: Array.from({ length: 26 }, () =>
            Math.floor(Math.random() * 100)
          ),
        },
        {
          name: "Saturday",
          data: Array.from({ length: 26 }, () =>
            Math.floor(Math.random() * 100)
          ),
        },
        {
          name: "Sunday",
          data: Array.from({ length: 26 }, () =>
            Math.floor(Math.random() * 100)
          ),
        },
      ];
    },
    computedOptions() {
      return {
        chart: {
          type: "heatmap",
          fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'`,
          foreColor: "#fff",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#93c5fd"],
        xaxis: {
          type: "category",
          categories: [
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 6",
            "Week 7",
            "Week 8",
            "Week 9",
            "Week 10",
            "Week 11",
            "Week 12",
            "Week 13",
            "Week 14",
            "Week 15",
            "Week 16",
            "Week 17",
            "Week 18",
            "Week 19",
            "Week 20",
            "Week 21",
            "Week 22",
            "Week 23",
            "Week 24",
            "Week 25",
            "Week 26",
          ],
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        fill: {
          opacity: 0.95,
        },
        stroke: {
          width: 2,
          colors: ["#1a1a1a"],
        },
      };
    },
  },
  data() {
    return {
      date: null,
    };
  },
};
</script>

<style lang="less" scoped>
:deep(.apexcharts-legend-series) {
  display: flex;
  margin-bottom: 4px !important;
  align-items: center;

  .apexcharts-legend-marker {
    margin-right: 6px !important;
  }
}
</style>
