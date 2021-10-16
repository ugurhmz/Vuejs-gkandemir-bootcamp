
const app = Vue.createApp({

    data () {
        return {
            my_new_class : "text-green",
            counter : 0
        }
    },
    created() {
        setInterval(() => {
            this.counter++;
        
            console.log('object :>> ', this.counter);
        }, 1500);    
    },
    
    computed : {

        textClassChange(){
            return {
                
                "text-green" : this.counter == 0,
                "text-orange" : this.counter == 1,
                "text-default" : this.counter == 2,
                "text-blue" : this.counter == 3,
                "text-red" : this.counter === 4,
            }
        },

        pTextChange(){
            return {
                "text-green" : this.counter == 4,
                "text-orange" : this.counter == 3,
                "text-default" : this.counter == 1,
                "text-blue" : this.counter == 2,
                "text-red" : this.counter === 0,
            }
        },
        showBox(){
            return {
                "specialBox" : this.counter ==3,
                "specialBox" : this.counter ==4,
                "specialBox" : this.counter ==1,
            }
        }


    },

    watch : {
        textClassChange(){
            this.counter ===4 ? this.counter = 0 : '';
        }
    }


}).mount("#app")