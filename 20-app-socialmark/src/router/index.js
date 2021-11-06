import {createRouter, createWebHashHistory} from "vue-router";
import store from "../store";


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


const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
   const authRequiredRoutes = ["HomePage"];
   const _isAuthenticated = store.getters._isUserAuthenticated;
   const authNotRequiredRoutes = ["LoginPage","RegisterPage"];

   //auth olmuşssa bir daha login ve register sayfasında işi yok, giremesin.
    if(authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);



   //rotasının içinde varsa ve auth'sa nextle
   if(authRequiredRoutes.indexOf(to.name) > -1){
        if(_isAuthenticated) next();
        else next({name : "LoginPage"});

   } else {
       next();
   }

});


export default router;


