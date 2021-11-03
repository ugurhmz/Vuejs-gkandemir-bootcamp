import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers';
import axios from "axios";
import {appAxios} from "./utils/appAxios";

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$appAxios = appAxios;
app.use(routers);
app.mount("#app");