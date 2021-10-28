import { createApp } from 'vue'
import App from './App.vue'
import "../../custom_style.css"
import router from "./router"


const app = createApp(App);

app.use(router);
app.mount("#app");
