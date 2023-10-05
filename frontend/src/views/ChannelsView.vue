<template>
  <div class="p-4">
    <div>
      <div
        class="grid xl:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-5 p-5 rounded-[3px]"
        :class="{
          'bg-[#1a1a1a]': getDarkMode,
          'bg-[#fff]': !getDarkMode,
        }"
      >
        <GridItem title="Total Campaigns" :value="24" />
        <GridItem title="Active Campaigns" :value="9" />
        <GridItem title="Spend (7 Days)" suffix="$" :value="439.54" />
        <GridItem title="Impressions" :value="30245" />
        <GridItem title="Clicks" :value="3594" />
        <GridItem
          title="Performance"
          suffix="%"
          :value="12.54"
          :valueStyle="{ color: '#3f8600' }"
          :hasTooltip="true"
          :tooltipText="`Your stats are better than 12.54% of gaming companies.`"
        />
      </div>
      <!-- <div class="my-5">
        <div class="flex items-center justify-between">
          <h1 class="text-[20px]">Trend</h1>
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
      </div> -->
      <div class="my-5 ">
        <div
          class="p-3 rounded-[3px]"
          :class="{
            'bg-[#1a1a1a]': getDarkMode,
            'bg-[#fff]': !getDarkMode,
          }"
        >
          <TrendAnalysis />
        </div>
      </div>

      <div class="my-5 ">
        <div
          class="p-3 rounded-[3px]"
          :class="{
            'bg-[#1a1a1a]': getDarkMode,
            'bg-[#fff]': !getDarkMode,
          }"
        >
          <VideoInsights />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from "../stores/global";
import { mapState } from "pinia";
import GridItem from "@/components/ChannelsView/GridItem.vue";
import TrendAnalysis from "../components/ChannelsView/TrendAnalysis.vue";
import VideoInsights from "../components/ChannelsView/VideoInsights.vue";

export default {
  data() {
    return {
      date: null,
    };
  },
  components: {
    GridItem,
    TrendAnalysis,
    VideoInsights
  },
  computed: {
    ...mapState(useGlobalStore, ["getDarkMode"]),
  },
};
</script>

<style lang="scss" scoped></style>
