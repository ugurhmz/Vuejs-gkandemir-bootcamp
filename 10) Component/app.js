
const app = Vue.createApp({

    data(){
        return {}
    },
});


app.component("mycounter-item",{
    data(){
        return {
            mycounter : 0,
        }
    },

    template : `
        <div class="container text-center">
            <h3 class="mb-2"
                :class="{'text-success' : mycounter > 0,'text-danger' : mycounter < 0 }">
                {{ mycounter }}
            </h3>
            <button  @click="mycounter++" class="green mr-2 ">+</button>
            <button @click="mycounter--" class="red ">-</button>
        </div>
    `
});
app.mount("#app")