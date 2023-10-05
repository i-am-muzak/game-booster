<template>
  <div class="p-4">
    <div>
      <div class="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
      <div class="my-5">
        <div class="flex items-center justify-between">
          <h1 class="text-[20px]">Overview</h1>
          <div>
            <a-range-picker v-model:value="date" />
          </div>
        </div>

        <div
          class="p-3 rounded-[3px] mt-3"
          :class="{
            'bg-[#1a1a1a]': getDarkMode,
            'bg-[#fff]': !getDarkMode,
          }"
        >
          <Metrices />
        </div>
      </div>
      <div class="my-5 flex gap-3">
        <div
          class="p-3 rounded-[3px] w-8/12"
          :class="{
            'bg-[#1a1a1a]': getDarkMode,
            'bg-[#fff]': !getDarkMode,
          }"
        >
          <CostsChart />
        </div>
        <div
          class="p-3 rounded-[3px] w-4/12"
          :class="{
            'bg-[#1a1a1a]': getDarkMode,
            'bg-[#fff]': !getDarkMode,
          }"
        >
          <PlatformChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from "../stores/global";
import { mapState } from "pinia";
import GridItem from "@/components/HomeView/GridItem.vue";
import Metrices from "../components/HomeView/Metrices.vue";
import CostsChart from "../components/HomeView/CostsChart.vue";
import PlatformChart from "../components/HomeView/PlatformChart.vue";

export default {
  data() {
    return {
      date: null,
    };
  },
  components: {
    GridItem,
    Metrices,
    CostsChart,
    PlatformChart,
},
  computed: {
    ...mapState(useGlobalStore, ["getDarkMode"]),
  },
};
</script>

<style lang="scss" scoped></style>
