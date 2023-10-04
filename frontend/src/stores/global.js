import { defineStore } from "pinia";

export const useGlobalStore = defineStore("globalStore", {
  state: () => ({
    darkMode: false,
  }),
  getters: {
    getDarkMode() {
      return this.darkMode;
    },
  },
  actions: {
    changeDarkMode(value) {
      this.darkMode = value;
    },
  },
});
