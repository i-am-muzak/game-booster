<template>
  <div>
    <a-modal
      class="video-preview-section"
      v-model:open="show"
      @cancel="handleCancel"
      :footer="null"
    >
      <div v-if="show">
        <vue-plyr :options="options" style="height: 485px">
          <video controls playsinline :data-poster="poster">
            <source :src="source" type="video/mp4" />
          </video>
        </vue-plyr>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    poster: {
      type: String,
      default: "",
    },
    source: {
      type: String,
      default: "",
    },
  },
  watch: {
    visible(newValue) {
      this.show = newValue;
    },
  },
  data() {
    return {
      show: false,
      options: {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "fullscreen",
        ],
      },
    };
  },
  methods: {
    handleCancel() {
      this.$emit("closed");
      this.show = false;
    },
  },
};
</script>

<style lang="less" scoped>
:deep(.ant-modal-content) {
  padding: 0 !important;
}
</style>
