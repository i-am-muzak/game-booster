<template>
  <div>
    <div class="pt-[52px]">
      <div>
        <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          :mode="mode"
          :items="items"
          :theme="theme"
        ></a-menu>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from "vue";
import CustomSidebarIcon from "./CustomSidebarIcon.vue";

export default {
  data() {
    return {
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
        {
          key: "configuration",
          label: "Configuration",
          title: "Configuration",
          icon: () =>
            h(CustomSidebarIcon, {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
   <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
</svg>`,
            }),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.bottom-collapse-button {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
