
const app = Vue.createApp({

    data() {
        return {
            showBorder:false,
            redBg : false,
            boxClass:"myborder red",
        }
    },

    computed : {
      boxClasses(){
          return {
                myborder: this.showBorder,
                red : this.redBg
          }
      }
    }

}).mount("#app");