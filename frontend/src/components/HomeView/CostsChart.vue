<template>
  <div>
    <div class="mt-1">
      <div class="p-2.5">
        <h1 class="text-[16px]">Campaigns</h1>
      </div>
      <div>
        <a-table
          :columns="columns"
          :data-source="data"
          :pagination="{ pageSize: 6 }"
          bordered
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <router-link to="" class="text-sky-500 hover:text-sky-400">
                {{ record.name }}
              </router-link>
            </template>

            <template v-else-if="column.key === 'spend'">
              <span> $ {{ record.spend }} </span>
            </template>

            <template v-else-if="column.key === 'channel'">
              <a-tag :color="channelToColor(record.channel.toLowerCase())">{{
                record.channel
              }}</a-tag>
            </template>
          </template>
        </a-table>
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
  },
  data() {
    return {
      date: null,
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Spend",
          dataIndex: "spend",
          key: "spend",
          sorter: (a, b) => a.spend - b.spend,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Channel",
          dataIndex: "channel",
          key: "channel",
          sorter: (a, b) => a.channel.length - b.channel.length,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Impressions",
          key: "impressions",
          dataIndex: "impressions",
          sorter: (a, b) => a.impressions - b.impressions,
          sortDirections: ["descend", "ascend"],
          defaultSortOrder: "descend",
        },
        {
          title: "Clicks",
          key: "clicks",
          dataIndex: "clicks",
          sorter: (a, b) => a.clicks - b.clicks,
          sortDirections: ["descend", "ascend"],
        },
      ],
      data: Array.from({ length: 15 }, () => {
        const key = Math.floor(Math.random() * 40000);
        const channels = ["Facebook", "Tiktok", "Unity", "Google Ads"];
        return {
          key,
          name: `Campaign ${key}`,
          spend: Math.floor(Math.random() * 400 * 100) / 100,
          channel: channels[Math.floor(Math.random() * 4)],
          impressions: Math.floor(Math.random() * 2000 * 100) / 100,
          clicks: Math.floor(Math.random() * 1000),
        };
      }),
    };
  },
  methods: {
    // Get prop based on the channel
    channelToColor(channel) {
      if (channel === "facebook") return "blue";
      if (channel === "tiktok") return "green";
      if (channel === "google ads") return "orange";
      if (channel === "unity") return "default";
    },
  },
};
</script>

<style lang="less" scoped>
// :deep(.apexcharts-legend-series) {
//   display: flex;
//   margin-bottom: 4px !important;
//   align-items: center;

//   .apexcharts-legend-marker {
//     margin-right: 6px !important;
//   }
// }
</style>
