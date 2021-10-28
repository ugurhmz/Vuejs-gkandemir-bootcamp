<template>
    
    <p> {{ $store.state.mainName }}</p>


    <h1>
        {{ $store.state.musteri.contactName }}

    </h1>

    <pre>
        {{ musteriADI }}
    </pre>

</template>



<script>

import {    mapGetters  } from "vuex";

export default {
    name:"App",

    created(){
         console.log(this.$store.getters["musteri/_contactName"]);
    },

    computed : {
        ...mapGetters({
            musteriADI : "musteri/_contactName"
        })
    }
}
</script>