import { createRouter, createWebHistory } from "vue-router";

// Views
import HomeView from "../views/HomeView.vue";
import ChannelsView from "../views/ChannelsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/channels",
      name: "channels",
      component: ChannelsView,
    },
  ],
});

export default router;
