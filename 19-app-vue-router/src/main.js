import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers';
import axios from "axios";


const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(routers);
app.mount("#app");