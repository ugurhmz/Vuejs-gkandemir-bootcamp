import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("../views/Home")

    },

    {
        name: "LoginPage",
        path: "/login",
        component: () => import("@/views/Login")

    },

    {
        name: "RegisterPage",
        path: "/register",
        component: () => import("@/views/Register")
    },

    {
        name:"NewBookmarkPage",
        path:"/new-bookmark",
        component : () => import("@/views/NewBookMark")
    }

];


export default createRouter({
    routes,
    history: createWebHashHistory()
})