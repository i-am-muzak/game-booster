<template>
  <div>
    <div
      class="p-3 rounded-[3px]"
      :class="{
        'bg-[#1a1a1a]': getDarkMode,
        'bg-[#fff]': !getDarkMode,
      }"
    >
      <div class="flex items-center">
        <div class="w-full">
          <div
            class="w-full flex items-center justify-between font-semibold text-[11px]"
            :class="{
              'text-[#9f9f9f]': getDarkMode,
              'text-[#6e6e6e]': !getDarkMode,
            }"
          >
            <div>Impressions</div>

            <div class="text-[10px]">14D</div>
          </div>

          <div class="mt-3 flex items-center justify-between">
            <div class="font-semibold text-[22px] number-font-family">
              {{ (234.543).toLocaleString("de-DE") }}
            </div>
            <div class="flex items-center text-[#05a36c]">
              <span class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-trending-up"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  stroke-width="1.25"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 17l6 -6l4 4l8 -8"></path>
                  <path d="M14 7l7 0l0 7"></path>
                </svg>
              </span>
              <span> 58.32% </span>
            </div>
          </div>
          <div class="mt-1">
            <apexchart
              type="area"
              height="100"
              :options="computedOptions"
              :series="computedSeries"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from "@/stores/global";
import { mapState } from "pinia";

export default {
  methods: {
    printInfo() {
      console.log("clicked");
    },
  },
  computed: {
    ...mapState(useGlobalStore, ["getDarkMode"]),
    computedSeries() {
      return [
        {
          name: "STOCK ABC",
          data: Array.from({ length: 14 }, () =>
            Math.floor(Math.random() * 10)
          ),
        },
      ];
    },
    computedOptions() {
      return {
        chart: {
          height: 100,
          type: "area",
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 1,
        },
        tooltip: {
          enabled: false
        },
        colors: ["#1677ff"],
        xaxis: {
          categories: Array.from({ length: 14 }, () =>
            String(Math.floor(Math.random() * 40))
          ),
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
};
</script>

<style lang="scss" scoped></style>
