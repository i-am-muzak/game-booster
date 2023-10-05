import "./assets/main.less";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./assets/tailwind.css";

import VueApexCharts from "vue3-apexcharts";
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'


app.use(createPinia());
app.use(router);
app.use(Antd);
app.use(VueApexCharts);
app.use(VuePlyr);

app.mount("#app");
