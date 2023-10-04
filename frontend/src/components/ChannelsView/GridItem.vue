<template>
  <div>
    <a-statistic :value="value" :suffix="suffix" :value-style="valueStyle">
      <template #title>
        <div class="flex items-center">
          <span>
            {{ title }}
          </span>
          <span class="ml-2" v-if="hasTooltip">
            <a-tooltip placement="bottom">
              <template #title>{{ tooltipText }}</template>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-info-circle"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
            </a-tooltip>
          </span>
        </div>
      </template>
    </a-statistic>
  </div>
</template>

<script>
import { useGlobalStore } from "@/stores/global";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useGlobalStore, ["getDarkMode"]),
  },
  props: [
    "title",
    "value",
    "suffix",
    "valueStyle",
    "hasTooltip",
    "tooltipText",
  ],
};
</script>

<style lang="scss" scoped></style>
