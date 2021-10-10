

const app = Vue.createApp({

    data(){
        return {
            search:"",
            itemList:["Elma","Armut","Kiraz","Çilek"],
           // newFilteredList : []
        };
    },
    /* Bunun yerine computed aynısın yapıyor.
   methods : {
        searchList(){
         // this.newFilteredList = this.itemList.filter( (item) => item.toLowerCase().includes(this.search) );

        }
    },*/

    computed : {
        newFilteredList(){
           return this.itemList.filter( (item) => item.toLowerCase().includes(this.search) );
        }
    }


}).mount("#app");