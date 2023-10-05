<template>
  <div>
    <div class="mt-1">
      <div class="flex items-center justify-between p-2.5">
        <h1 class="text-[16px]">Video Insights</h1>
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
        </div>
      </div>
      <div>
        <a-table
          :columns="columns"
          :data-source="data"
          :pagination="{ pageSize: 15 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <div class="flex items-center">
                <a-tooltip placement="bottom">
                  <template #title>
                    <div class="text-center">
                      Play video creative <br />
                      (Royal Match's creative used for demo)
                    </div>
                  </template>
                  <div
                    class="video-thumbnail-section cursor-pointer"
                    @click="showVideoPreviewDialog"
                  >
                    <img
                      src="https://storage.googleapis.com/game_booster/demo/RoyalMatch_101_thumbnail.png"
                      width="48"
                      class="rounded-[3px] video-thumbnail"
                    />
                    <span
                      class="play-icon p-1.5 rounded-full flex items-center justify-center"
                      :class="{
                        'bg-gray-900/50': getDarkMode,
                        'bg-[#fff]/50': !getDarkMode,
                      }"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-player-play-filled"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                          stroke-width="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a-tooltip>

                <span class="ml-3">
                  {{ record.name }}
                </span>
              </div>
            </template>

            <template v-else-if="column.key === 'spend'">
              <span> $ {{ record.spend }} </span>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <VideoPreview
      :poster="creativePoster"
      :source="creativeSource"
      :visible="visible"
      @closed="handlePreviewDialogOnClose"
    />
  </div>
</template>

<script>
import { useGlobalStore } from "@/stores/global";
import { mapState } from "pinia";
import VideoPreview from "./VideoPreview.vue";

export default {
  computed: {
    ...mapState(useGlobalStore, ["getDarkMode"]),
  },
  data() {
    return {
      selectedMetric: "costs",
      date: null,
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Tiktok ID",
          dataIndex: "tiktok_id",
          key: "tiktok_id",
        },
        {
          title: "Total Cost ($)",
          dataIndex: "total_cost",
          key: "total_cost",
          sorter: (a, b) => a.channel.length - b.channel.length,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "CPC",
          key: "cpc",
          dataIndex: "cpc",
          sorter: (a, b) => a.cpc - b.cpc,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "CPM",
          key: "cpm",
          dataIndex: "cpm",
          sorter: (a, b) => a.cpm - b.cpm,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Impressions",
          key: "impressions",
          dataIndex: "impressions",
          sorter: (a, b) => a.impressions - b.impressions,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Clicks",
          key: "clicks",
          dataIndex: "clicks",
          sorter: (a, b) => a.clicks - b.clicks,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "CTR",
          key: "ctr",
          dataIndex: "ctr",
          sorter: (a, b) => a.ctr - b.ctr,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Conversions",
          key: "conversions",
          dataIndex: "conversions",
          sorter: (a, b) => a.conversions - b.conversions,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Created At",
          key: "created_at",
          dataIndex: "created_at",
          sorter: (a, b) => a.created_at - b.created_at,
          sortDirections: ["descend", "ascend"],
        },
      ],
      data: Array.from({ length: 15 }, () => {
        const key = Math.floor(Math.random() * 40000);
        return {
          key,
          name: `Video ${key}`,
          spend: Math.floor(Math.random() * 400 * 100) / 100,
          impressions: Math.floor(Math.random() * 2000 * 100) / 100,
          total_cost: Math.floor(Math.random() * 2000 * 100) / 100,
          cpc: Math.floor(Math.random() * 1 * 100) / 100,
          cpm: Math.floor(Math.random() * 20 * 100) / 100,
          ctr: Math.floor(Math.random() * 100 * 100) / 100,
          conversions: Math.floor(Math.random() * 100000),
          clicks: Math.floor(Math.random() * 1000),
          tiktok_id: (Math.random() + 1).toString(36).substring(2, 12),
          created_at: 1696458546,
        };
      }),
      visible: false,
      creativePoster: null,
      creativeSource: null,
    };
  },
  components: { VideoPreview },
  methods: {
    showVideoPreviewDialog() {
      this.creativePoster =
        "https://storage.googleapis.com/game_booster/demo/RoyalMatch_101.png";
      this.creativeSource =
        "https://storage.googleapis.com/game_booster/demo/RoyalMatch_101.mp4";
      this.visible = true;
    },
    handlePreviewDialogOnClose() {
      this.creativePoster = null;
      this.creativeSource = null;
      this.visible = false;
    },
  },
};
</script>

<style lang="less" scoped>
.video-thumbnail-section {
  position: relative;
  .play-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
