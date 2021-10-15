const app = Vue.createApp({

    data() {
        return {
            counter : 0,
            counter_two : 0,
            myitemList : []
        }
    },

    methods : {
        addItem () {
            this.myitemList.push(new Date().getTime());
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

    watch : {
        counter_two (newVal, oldVal) {
            console.log("counter_two watching.....")
            console.log("yeni değer : ", newVal,"\n","eski değer : "+oldVal);
        },


        getResult(newvalue, oldvalue) {
            console.log(`watcher getResult : ${newvalue} => ${oldvalue}`);
        },

        // ARRAY'i izlemek için şu şekilde yapıyoruz :
        myitemList : {
            deep :true,
            handler(myitemList){
                console.log("itemList çalıştı : ",myitemList);
            }
        }

    }


}).mount("#app");