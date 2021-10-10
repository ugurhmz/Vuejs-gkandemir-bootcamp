

const app = Vue.createApp({

    // DATA
        data() {
            return {
                title:"Hoş geldiniz",
                description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias beatae deserunt facilis fugiat illo laudantium libero magni minus molestiae nam nobis optio, quia quibusdam reiciendis, sit suscipit veniam voluptatem!",
                eduflow: {
                    title:"Google Gider",
                    target:"_blank",
                    url:"http://www.google.com",
                    alt:"google-git"
                },

                mycoords : {
                    x:0,
                    y:0
                }
            };
        },

    // METHODS
    methods : {
            changeTitle(mytitle) {
                this.title = mytitle;
            },

            updateCoords(event, message){
               this.changeTitle(`${event.x}, ${event.y}`)

              this.mycoords = {
                  x : event.x,
                  y : event.y
                }

            }
    }


}).mount("#app");