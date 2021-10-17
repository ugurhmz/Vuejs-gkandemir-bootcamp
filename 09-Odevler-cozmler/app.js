const app = Vue.createApp({
    data () {
        return {
            myval :""
        }
    },
    methods : {
        alertBas() {
          alert('Hee');
        },
        changeValue(event){
            console.log(event.target.value)
            this.myval = event.target.value
        }
    },
    computed : {
        
    }


}).mount("#app");