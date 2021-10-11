
const app = Vue.createApp({

    data() {
        return {
            showContainer : false,
            mycounter : 0,

        }
    },

    computed : {
        mycounterClasses() {
            return {
                "bg-success text-white" : this.mycounter >0,
                "bg-danger text-white" : this.mycounter < 0,
                "bg-dark text-white" : this.mycounter === 0
            }
        }
    }


}).mount("#app")