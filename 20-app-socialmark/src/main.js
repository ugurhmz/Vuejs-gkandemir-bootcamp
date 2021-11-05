import { createApp } from "vue"
import App from './App.vue'
import router from "./router"
import {appAxios} from "@/utils/appAxios"

import "@/assets/style.css"
import appHeader from "@/components/partials/appHeader";
import appBookmarkList from "@/components/partials/appBookmarkList"

const app = createApp(App);
app.component("appBookmarkList",appBookmarkList);
app.component("appHeader",appHeader);
app.use(router);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
