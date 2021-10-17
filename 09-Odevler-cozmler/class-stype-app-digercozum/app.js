
const app = Vue.createApp({

    data () {
        return {
            allstyles : {
                backGroundColor:false,
                border : false,
                borderRadius : false,
                fontbold:false,
                color : false,
                fontItalic : false,

            },
        }
    },

    computed : {
        textAreaClass() {
            return {
                backgroundColor : this.allstyles.backGroundColor,
                border : this.allstyles.border,
                borderRadius : this.allstyles.borderRadius,
                fontBold : this.allstyles.fontbold,
                color : this.allstyles.color,
                fontItalic:  this.allstyles.fontItalic
            }
        }

    }


}).mount("#app");