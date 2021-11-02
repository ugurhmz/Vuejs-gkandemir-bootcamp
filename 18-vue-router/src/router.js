import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {   
        name:"HomePage",
        path : "/",
        component: () => import ("@/views/Home")
    },

    {   name:"HakkimdaPage",
        path : "/hakkimda",
        component : () => import("@/views/About")
        
    },

    {   
        name:"DetayPage",
        path:"/detay/:userId",
        component : () => import("@/views/Details")
        
    }
]



const router = createRouter({
    routes,
    history : createWebHistory()
});


export default router;
