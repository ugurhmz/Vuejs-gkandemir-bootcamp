<template>
    <div class="container">
        
        <ul>
            <li v-for="(item, index) in $store.getters.myElectronicItems" :key="index">
            {{ index+1 }}     {{ item }}
            </li>
        </ul>
        <br><hr>
        <button @click="fullNameChangeFunc">name Degis</button>
      

        <pre>
            {{ $store.getters.myElectronicItems }}
        </pre>
    </div>
</template>



<script>
export default {
    
    created () {
       console.log(this.$store.state.person);
       console.log(this.$store.state.permissions);
       console.log( this.$store.getters.activeUser);
       
    },
    methods : {
        fullNameChangeFunc() {
            this.$store.state.fullName = new Date();
            this.$store.state.itemList.push({id:15, name:"Yekma", cate:"elektronik"},)
        }
    }

}
</script>