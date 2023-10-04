<template>
  <div>
    <div class="mt-1 w-full">
      <div class="flex items-center justify-between p-2.5">
        <h1 class="text-[16px]">Metrices by Platform</h1>
        <div>
          <a-range-picker v-model:value="date" />
        </div>
      </div>
      <div class="pt-[20px]">
        <apexchart
        type="donut"
        height="350"
        :options="computedOptions"
        :series="computedSeries"
      ></apexchart>
      </div>
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
      return Array.from({ length: 2 }, () => Math.floor(Math.random() * 4000));
    },
    computedOptions() {
      return {
        chart: {
          type: "donut",
          fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'`,
          foreColor: "#fff",
          toolbar: {
            show: false,
          },
        },
        fill: {
          opacity: 0.75,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },

        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {},
                value: {},
                total: {
                  show: true,
                  fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'`,
                  fontSize: "12px"
                }
              },
            },
          },
        },
        grid: {
          show: false,
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.02,
          },
        },
        labels: ["Android", "iOS"],
        stroke: {
          show: false
        }
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
