

const app = Vue.createApp({

    // DATA
        data() {
            return {
                title:"HOş geldiniz",
                description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias beatae deserunt facilis fugiat illo laudantium libero magni minus molestiae nam nobis optio, quia quibusdam reiciendis, sit suscipit veniam voluptatem!",
                eduflow: {
                    title:"Google Gider",
                    target:"_blank",
                    url:"http://www.google.com",
                    alt:"google-git"
                }
            };
        },

    // METHODS
    methods : {
            changeTitle(mytitle) {
                this.title = mytitle;
            }
    }


}).mount("#app");