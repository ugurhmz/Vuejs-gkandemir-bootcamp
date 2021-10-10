
const myapp = Vue.createApp({

    data () {
        return {
            counter:0,
            counter2:0
        }
    },
    methods:{},
    // METHODS
    /*  methods : {
          increase(event) {
               this.counter++;
               if(this.counter < 0){
                   this.counter = 0
               }
          },
          decrease() {
              this.counter--;
              if(this.counter < 0){
                  this.counter = 0
              }
          }
      }*/

    computed : {
        getCounterResult(){
            console.log("counter 1 çalıştı")
            return this.counter > 5 ? "Büyük" : "Küçük";
        },
        getCounterResult2(){
            console.log("counter 2 çalıştı")
            return this.counter2 > 5 ? "Büyük" : "Küçük";
        }
    },

    watch : {
        counter(newValue, oldValue) {
            console.log("newValue : "+newValue)
            console.log("oldValue : "+oldValue)
        }
    }


}).mount("#app");   // -> Kontrol edilcek template burda belirtiyoruz.