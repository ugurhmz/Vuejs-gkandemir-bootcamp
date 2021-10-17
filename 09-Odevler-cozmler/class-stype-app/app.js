
const app = Vue.createApp({
    data () {
        return {
            addClass: [],
            check : false,
            checkmy_border : false,
            radius_check : false,
            bcolor : 'bg-primary',
            myborder : "myborder",
            borderradius : 'myradius'

        }
    },

    methods : {
        addClassFunc(){

            this.addClass.push('bg-dark')
        }
    }


}).mount("#app");