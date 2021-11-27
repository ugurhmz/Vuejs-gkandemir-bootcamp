import { createApp } from "vue"
import App from './App.vue'
import router from "./router"
import store from "./store"
import {appAxios} from "@/utils/appAxios"
import moment from 'moment'
import io from "socket.io-client"

import "@/assets/style.css"
import appHeader from "@/components/partials/appHeader";
import appBookmarkList from "@/components/partials/appBookmarkList"


const app = createApp(App);
const socket = io("http://localhost:8085"); // socket sunucusuna bağlan.


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
app.config.globalProperties.$socket = socket;
app.mount("#app");
