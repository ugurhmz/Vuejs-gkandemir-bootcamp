<template>

   
        <h1>Home page</h1>

        <p>
            <input type="text" @keydown.enter="goToDetailsPage">
        </p>
 
    
</template>

<script>
export default {
    
    methods : {
        goToDetailsPage(e){
            console.log(this.$router);

            this.$router.push({
                name:"DetayPage",
                params : {
                    userId : e.target.value
                },
                query : {
                    type : "DetailhAuth",
                    user : "Ugurhmz"
                }

            })
        }
    }

}
</script>