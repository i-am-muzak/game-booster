<template>
  <div>
    <div class="flex items-center justify-between custom-header">
      <div
        class="logo flex items-center select-none cursor-pointer logo-font-family"
      >
        <img src="@/assets/images/logo.png" class="w-[24px] mr-3" />
        <span class="font-medium text-[14px] tracking-wide">Game</span>
        <span class="font-medium text-[14px] tracking-wide">Booster</span>
      </div>
      <div class="" v-if="pageWidth >= 768">
        <a-input
          v-model:value="search"
          placeholder="Search page, campaign, creative..."
          class="md:w-[280px] lg:w-[370px]"
        >
          <template #prefix>
            <SearchOutlined />
          </template>
        </a-input>
      </div>
      <div class="flex items-center" v-if="pageWidth >= 768">
        <div
          class="flex items-center cursor-pointer rounded-full p-[8px] header-right-item mr-2.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-github"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
            ></path>
          </svg>
        </div>
        <div
          class="flex items-center cursor-pointer rounded-full p-[8px] header-right-item mr-2.5"
          @click="toggleTheme"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-moon"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-if="!isDarkMode"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
            ></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-sun"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
            <path
              d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
            ></path>
          </svg>
        </div>
        <div
          class="flex items-center cursor-pointer rounded-full p-[8px] mr-2.5"
        >
          <a-badge dot>
            <icon class="">
              <template #component>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bell"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="1.25"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                  ></path>
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                </svg>
              </template>
            </icon>
          </a-badge>
        </div>
        <div
          class="flex items-center cursor-pointer px-[12px] header-right-item"
        >
          <a-avatar
            :size="32"
            src="https://media.licdn.com/dms/image/D4D03AQGNFnNWgMEQuw/profile-displayphoto-shrink_400_400/0/1695718225896?e=1701302400&v=beta&t=Z6bxb_DxMG1tClSEK9kV8JAPYsHHwLgMdVu5QrEwFpU"
          >
          </a-avatar>
          <span class="ml-2"> Hasan M. </span>
        </div>
      </div>

      <div v-if="pageWidth < 768" class="flex items-center">
        <div
          class="flex items-center cursor-pointer rounded-full p-[8px] header-right-item mr-2.5"
          @click="toggleTheme"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-moon"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-if="!isDarkMode"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
            ></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-sun"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.25"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
            <path
              d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
            ></path>
          </svg>
        </div>
        <div
          class="flex items-center cursor-pointer rounded-full p-[8px] header-right-item"
          @click="menuBtnClicked"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-deep"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6h16"></path>
            <path d="M7 12h13"></path>
            <path d="M10 18h10"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@ant-design/icons-vue";
import { SearchOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    Icon,
    SearchOutlined,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    // Create toggleTheme event to change theme in App.vue
    toggleTheme() {
      this.$emit("toggleTheme");
    },

    // Create menuBtnClicked event to show/hide drawer in App.vue.
    menuBtnClicked() {
      this.$emit("menuBtnClicked");
    },
  },
  props: {
    isDarkMode: {
      type: Boolean,
      default: false,
    },
    pageWidth: {
      type: Number,
      default: window.innerWidth,
    },
  },
};
</script>

<style lang="less" scoped></style>
