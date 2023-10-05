<template>
  <div>
    <div class="mt-1">
      <div class="flex items-center justify-between p-2.5">
        <h1 class="text-[16px]">Trend Analysis</h1>
        <div class="flex items-center gap-2.5">
          <div>
            <a-select
              v-model:value="selectedMetric"
              size="small"
              style="width: 140px"
              placeholder="Metrice"
            >
              <a-select-option value="costs">Costs</a-select-option>
              <a-select-option value="impressions">Impressions</a-select-option>
              <a-select-option value="conversions">Conversions</a-select-option>
              <a-select-option value="clicks">Clicks</a-select-option>
            </a-select>
          </div>
          <div>
            <a-range-picker
              :placeholder="['Start Date', 'End Date']"
              v-model:value="date"
              size="small"
            />
          </div>
          <div>
            <a-select
              v-model:value="selectedCampaigns"
              size="small"
              style="width: 220px"
              placeholder="Campaigns"
              mode="multiple"
              :maxTagTextLength="10"
              :options="campaigns"
              maxTagCount="responsive"
              show-search
              :filterOption="campaignFilterOption"
            >
            </a-select>
          </div>
        </div>
      </div>
      <apexchart
        type="area"
        height="470"
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
          height: 470,
          type: "area",
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
      date: null,
      selectedCampaigns: [],
      campaigns: [
        {
          label: "Test GAME - T1 - iOS - CPI - Scale",
          value: "123123",
        },
        {
          label: "Test GAME - T1 - Android - Purchase",
          value: "1231232",
        },
        {
          label: "Test GAME - T1 - iOS - Purchase",
          value: "1231123",
        },
        {
          label: "Test GAME - CPI - Android - US, GB",
          value: "1123123",
        },
        {
          label: "Test GAME - ROAS - iOS - TR, DE",
          value: "13223123",
        },
        {
          label: "Test GAME - ROAS - Android - TR, DE",
          value: "12314523",
        },
      ],
    };
  },
  methods: {
    campaignFilterOption(input, option) {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
