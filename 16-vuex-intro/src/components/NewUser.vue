<template>
    

    <button @click="fullNameChangeFunc">change name</button>

</template>



<script>
export default {
      
    data(){
        return {
                myid : 3

        }
    },
     methods : {
        
        fullNameChangeFunc() {
            const userData = {
                    id:this.myid++, 
                    name:"Ugur", 
                    cate:"elektronik"
            };

            //this.$store.commit("newItem",userData);
            this.$store.dispatch("addNewItem",userData);
           
        }
    },

}
</script>