<template>
  <div>
    <div class="mt-1">
      <div class="flex items-center justify-between p-2.5">
        <h1 class="text-[16px]">Top 5 Campaigns</h1>
        <div>
          <a-select v-model:value="selectedMetric" style="width: 140px">
            <a-select-option value="costs">Costs</a-select-option>
            <a-select-option value="impressions">Impressions</a-select-option>
            <a-select-option value="conversions">Conversions</a-select-option>
            <a-select-option value="clicks">Clicks</a-select-option>
          </a-select>
        </div>
      </div>
      <apexchart
        type="line"
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
          name: "DnC - CPI Camp. - US, UK",
          data: Array.from({ length: 9 }, () => Math.floor(Math.random() * 40)),
        },
        {
          name: "DnC - CPI Camp. - DE, AU",
          data: Array.from({ length: 9 }, () => Math.floor(Math.random() * 40)),
        },
        {
          name: "DnC - ROAS - US, UK",
          data: Array.from({ length: 9 }, () => Math.floor(Math.random() * 40)),
        },
        {
          name: "DnC - TEST - US, UK",
          data: Array.from({ length: 9 }, () => Math.floor(Math.random() * 40)),
        },
        {
          name: "DnC - HAHAH - US, UK",
          data: Array.from({ length: 9 }, () => Math.floor(Math.random() * 40)),
        },
      ];
    },
    computedOptions() {
      return {
        chart: {
          zoom: {
            enabled: false,
          },
          height: 350,
          type: "line",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },

        grid: {
          show: false,
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.02,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          axisBorder: {
            color: "#4c4c4c",
          },
          axisTicks: {
            color: "#4c4c4c",
          },
        },
      };
    },
  },
  data() {
    return {
      selectedMetric: "costs",
    };
  },
};
</script>

<style lang="scss" scoped></style>
