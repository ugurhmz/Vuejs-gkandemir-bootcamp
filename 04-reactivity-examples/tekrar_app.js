const app = Vue.createApp({

    data() {
        return {
            counter : 0,
            counter_two : 0,

        }
    },

    computed : {
        getResult(){

            console.log("counter 1 çalıştı")
            return  this.counter > 0
                    ? "Pozitif"
                    : this.counter < 0
                    ? "Negatif" : "Sıfır";
        },

        getResult_two(){
            console.log("counter 2 çalıştı")
            return this.counter_two  > 0 ? "pozitif" : this.counter_two  < 0 ? "negatif" : "Sıfırdır";
        }
    },


}).mount("#app");