<template>
   <div class="container">

    
        <router-link  class="nav-link" active-class="myactive"   to="/">
            Anasayfaya gider...
        </router-link>


        <router-link class="nav-link" active-class="myactive" to="/hakkimda">
            Go Hakkımda
        </router-link>
    

        <router-link class="nav-link" active-class="myactive" to="/detay/12312">
            Detay 
        </router-link>

        <router-view></router-view>

   </div>
</template> 


<style scoped>

.nav-link {
    padding : 10px 10px;
    text-decoration : none;
    border :1px solid #fa6558;
    color: #fa6558;
    display : inline-block; 
    margin:15px 5px 10px 0;
}

.myactive {
    background-color:#fa6558;
    color:#fff;

}


</style>