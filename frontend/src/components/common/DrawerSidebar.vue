<template>
  <div>
    <a-drawer
      placement="left"
      :closable="false"
      :open="open"
      @close="onClose"
      width="270"
    >
      <div class="h-full">
        <div class="flex flex-col h-full justify-between">
          <div>
            <div
              class="logo flex items-center justify-center select-none cursor-pointer logo-font-family p-6"
            >
              <img src="@/assets/images/logo.png" class="w-[24px] mr-3" />
              <span class="font-semibold text-[14px] tracking-wide">Game</span>
              <span class="font-semibold text-[14px] tracking-wide"
                >Booster</span
              >
            </div>
            <div>
              <a-menu
                v-model:openKeys="openKeys"
                v-model:selectedKeys="selectedKeys"
                :mode="mode"
                :items="items"
                :theme="theme"
                class="w-full"
                style="border: none"
              ></a-menu>
            </div>
          </div>
          <div class="border-t p-4"
            :class="{
                'border-[#ffffff20]': getDarkMode
            }"
          >
            <div class="flex items-center">
              <a-avatar
                src="https://media.licdn.com/dms/image/D4D03AQGNFnNWgMEQuw/profile-displayphoto-shrink_400_400/0/1695718225896?e=1701302400&v=beta&t=Z6bxb_DxMG1tClSEK9kV8JAPYsHHwLgMdVu5QrEwFpU"
                :size="48"
              >
                <template #icon><UserOutlined /></template>
              </a-avatar>
              <div class="flex flex-col pl-2">
                <span
                  :class="{
                    'text-gray-100': getDarkMode,
                    'text-gray-800': !getDarkMode,
                  }"
                  >Hasan Muzak</span
                >
                <span class="text-[10px] text-gray-400"
                  >hasanmuzak@yahoo.com</span
                >
              </div>
            </div>
            <div class="flex items-center justify-evenly mt-3">
              <div
                class="text-[10px] text-gray-500 hover:text-sky-500 cursor-pointer flex items-center"
              >
                <span class="mr-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-settings"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                    ></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  </svg>
                </span>
                <span> Settings </span>
              </div>
              <div
                class="text-[10px] text-gray-500 hover:text-sky-500 cursor-pointer flex items-center"
              >
                <span class="mr-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-logout"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                    ></path>
                    <path d="M9 12h12l-3 -3"></path>
                    <path d="M18 15l3 -3"></path>
                  </svg>
                </span>
                <span> Logout </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import { h } from "vue";
import CustomSidebarIcon from "./CustomSidebarIcon.vue";
import { mapState } from "pinia";
import { useGlobalStore } from "@/stores/global";

export default {
  data() {
    return {
      open: false,
      mode: "inline",
      theme: "light",
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      items: [
        {
          key: "dashboard",
          label: "Dashboard",
          title: "Dashboard",
          icon: () =>
            h(CustomSidebarIcon, {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
</svg>`,
            }),
        },
        {
          key: "channels",
          label: "Channels",
          title: "Channels",
          icon: () =>
            h(CustomSidebarIcon, {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-topology-star" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path>
   <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path>
   <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path>
   <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path>
   <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path>
   <path d="M7.5 7.5l3 3"></path>
   <path d="M7.5 16.5l3 -3"></path>
   <path d="M13.5 13.5l3 3"></path>
   <path d="M16.5 7.5l-3 3"></path>
</svg>`,
            }),
          children: [
            {
              key: "3",
              label: "Facebook",
              title: "Facebook",
            },
            {
              key: "4",
              label: "TikTok",
              title: "TikTok",
            },
            {
              key: "sub1-2",
              label: "Unity",
              title: "Unity",
            },
            {
              key: "sub1-3",
              label: "Google Ads",
              title: "Google Ads",
            },
          ],
        },
        {
          key: "media-library",
          label: "Media Library",
          title: "Media Library",
          icon: () =>
            h(CustomSidebarIcon, {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-folders" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
   <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2"></path>
</svg>`,
            }),
        },
        {
          key: "creatives",
          label: "Creative Insights",
          title: "Creative Insights",
          icon: () =>
            h(CustomSidebarIcon, {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-video" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 15h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3"></path>
   <path d="M9 9m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z"></path>
   <path d="M3 12l2.296 -2.296a2.41 2.41 0 0 1 3.408 0l.296 .296"></path>
   <path d="M14 13.5v3l2.5 -1.5z"></path>
   <path d="M7 6v.01"></path>
</svg>`,
            }),
        },
        {
          key: "store-analysis",
          label: "Store Analysis",
          title: "Store Analysis",
          icon: () =>
            h(CustomSidebarIcon, {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-appgallery" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
   <path d="M9 8a3 3 0 0 0 6 0"></path>
</svg>`,
            }),

          children: [
            {
              key: "play-store",
              label: "Play Store",
              title: "Play Store",
            },
            {
              key: "app-store",
              label: "App Store",
              title: "App Store",
            },
          ],
        },
      ],
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visible(newValue) {
      this.open = newValue;
    },
  },
  methods: {
    onClose() {
      this.$emit("closed");
    },
  },
  computed: {
    ...mapState(useGlobalStore, ["getDarkMode"]),
  },
};
</script>

<style lang="scss" scoped></style>
