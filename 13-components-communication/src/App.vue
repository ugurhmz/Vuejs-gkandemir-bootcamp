<template>

    <UserSection />

</template>


<script>
    import UserSection from "./components/UserSection";
    export default {
        components: {UserSection},

        data() {
            return  {
               provideData: {
                   usersList : ["Osman","Fatma","Ayşe","Melda","Ugur"]
               }
            }
        },

        methods : {
            newItem(myitem) {
                this.provideData.usersList.push(myitem);
            }
        },

        provide(){
            return {
                usersList : this.provideData.usersList,
                newItem: this.newItem
            }
        }


    }
</script>