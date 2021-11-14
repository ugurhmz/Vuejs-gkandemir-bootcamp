import { createApp } from "vue"
import App from './App.vue'
import router from "./router"
import store from "./store"
import {appAxios} from "@/utils/appAxios"
import moment from 'moment'

import "@/assets/style.css"
import appHeader from "@/components/partials/appHeader";
import appBookmarkList from "@/components/partials/appBookmarkList"


const app = createApp(App);

app.config.globalProperties.$moment = {
    timeAgo(date) {
        return moment(date).fromNow()
    },
}
app.component("appBookmarkList",appBookmarkList);
app.component("appHeader",appHeader);
app.use(router);
app.use(store)
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$log = console.log;
app.mount("#app");
