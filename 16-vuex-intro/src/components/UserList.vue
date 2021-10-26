<template>
    <ul>
            <li v-for="(item, index) in mywoods " :key="index">
            {{ index+1 }}     {{ item }}
            </li>
    </ul>
       

</template>


<script>

import { mapGetters } from "vuex";


export default {

    data(){
        return  {

        }
    },
    computed : {
       // ... mapGetters(["myElectronicItems","activeUser"]),   -> 1. yöntem
       //customComputed() {

        //}

        //2. yöntem mapGetters için
        ... mapGetters({
            mywoods : "myElectronicItems",
            myActiveusers :  "activeUser"
        })
    }
    

}
</script>