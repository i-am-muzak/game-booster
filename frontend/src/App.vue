<template>
  <ConfigProvider
    class="dark"
    :theme="{
      algorithm: computedAlgorithms,
      token: {
        borderRadius: 3,
        controlHeight: 42,
      },
    }"
  >
    <a-layout style="background: inherit">
      <a-layout-sider
        v-if="pageWidth >= 768"
        :style="{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
        }"
        ><Sidebar
      /></a-layout-sider>
      <a-layout style="background: inherit">
        <a-layout-header
          :style="{
            position: 'fixed',
            zIndex: 2,
            width: '100%',
            paddingInline: '25px',
            height: '52px',
            lineHeight: '52px',
          }"
        >
          <Header
            @toggleTheme="handleToggleTheme"
            :pageWidth="pageWidth"
            @menuBtnClicked="handleMenuButtonClick"
          />
        </a-layout-header>
        <a-layout-content style="background-color: inherit"
          ><RouterView
        /></a-layout-content>
      </a-layout>
    </a-layout>

    <DrawerSidebar :visible="showDrawerSidebar" @closed="handleDrawerClose" />
  </ConfigProvider>
</template>

<script>
import { RouterView } from "vue-router";
import { ConfigProvider, theme } from "ant-design-vue";
import { useDark, useDebounceFn } from "@vueuse/core";
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "./stores/global";

import Sidebar from "./components/common/Sidebar.vue";
import Header from "./components/common/Header.vue";
import DrawerSidebar from "./components/common/DrawerSidebar.vue";

export default {
  components: {
    RouterView,
    ConfigProvider,
    Sidebar,
    Header,
    DrawerSidebar,
  },
  computed: {
    ...mapState(useGlobalStore, ["getDarkMode"]),
    constantTheme() {
      return theme;
    },
    computedAlgorithms() {
      if (this.darkMode)
        return [
          this.constantTheme.compactAlgorithm,
          this.constantTheme.darkAlgorithm,
        ];

      return [this.constantTheme.compactAlgorithm];
    },
  },
  data() {
    return {
      darkMode: useDark({
        selector: "body",
        attribute: "color-scheme",
        valueDark: "dark",
        valueLight: "light",
      }),
      pageWidth: window.innerWidth,
      showDrawerSidebar: false,
    };
  },
  created() {
    this.changeDarkMode(this.darkMode);
  },
  methods: {
    // Import Pinia stuff.
    ...mapActions(useGlobalStore, ["changeDarkMode"]),

    // Change theme of the app. Used debounce for performance.
    // Ex: If user clicks to toggle theme repeatedly, it will would tire the system.
    // Debounce will block repeated clicks before 250 ms.
    handleToggleTheme: useDebounceFn(function () {
      this.darkMode = !this.darkMode;
      this.changeDarkMode(this.darkMode);
    }, 250),

    // Listen window resize change. Set pageWidth with the current window value.
    onResize() {
      this.pageWidth = window.innerWidth;
    },

    // If the page width is smaller than 768px, the menu button will be clickable in Header component. This function handles that menu button click event.
    // Show drawer.
    handleMenuButtonClick() {
      this.showDrawerSidebar = true;
    },

    // Handle the event emitted from DrawerSidebar to change value the showDrawerSidebar to False.
    handleDrawerClose() {
      this.showDrawerSidebar = false;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
  watch: {

    // Listen pageWidth changes to make app responsive.
    pageWidth(newValue) {
      // Hide drawer if width >= 768
      if(newValue >= 768) {
        this.showDrawerSidebar = false;
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
