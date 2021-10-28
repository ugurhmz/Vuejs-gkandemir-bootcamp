import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About"

const routes = [
    {
        path : "/",
        component : Home
    },

    {
        path : "/hakkimda",
        component : About
    }
]



const router = createRouter({
    routes,

    history : createWebHistory()
});


export default router;
