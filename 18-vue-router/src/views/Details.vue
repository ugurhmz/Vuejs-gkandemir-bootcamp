<template>
    
    <div>
       
         <h1> {{ this.$route.params.userId }}</h1>

       

        <button @click="goHome">Geri Dön</button>
    </div>
</template>

<script >

export default {

    created() {
      //  console.log(this.$route);
        
    },

    methods : {
        goHome(){
            this.$router.push("/")
            
        }
    }

}


</script>