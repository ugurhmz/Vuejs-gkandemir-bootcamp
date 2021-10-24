<template>
        
        <div class="container">
            <h3>Alış veriş listesi</h3>
            <hr>

            <div class="my-2">
                <input  @keydown.enter="saveFunc"
                        type="text" 
                        placeholder="Alacaklarınızı girin...">
            </div>

            <ul v-if="itemsList.length > 0" >
                <li v-for="item in itemsList" :key="item.id"
                     class="d-flex justify-content-between align-items-center ">
                   <span> {{ item.id }} &nbsp; {{ item.title }}</span>
                  
                     <small> {{ item.completed  }} &nbsp; {{ item.created_at }} </small>
                 
                   <button class="sm red" @click="deleteFunc(item)">
                       Sil
                    </button>
                </li>

            </ul>

            <div v-else class=" my-4">
                    Herhangi bir ürün bulunmuyor...
            </div>

            <div style="margin-top:1.2rem;float:right;">
                <small class="text-blue" > {{ itemsList.length }} adet ürününüz var.</small>
            </div>

        </div>
</template>


<script>

import axios from "axios"

export default {
    
    data() {
        return {
            itemsList : []
        }
    },

    mounted() {
        axios.get("http://localhost:3000/items").then(item_response => {
            this.itemsList = item_response.data || [];
            console.log(this.itemsList);
        })
    },

    methods: {
        saveFunc(e){

            const saveObject = {
                title : e.target.value,
                created_at : new Date(),
                completed : false
            }     

            axios.post("http://localhost:3000/items", saveObject).then(save_response => {
                this.itemsList.push(save_response.data);
                console.log(save_response);
                e.target.value ="";
                e.target.focus();
            });
        },

        deleteFunc(item){
            axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response => {
                
                this.itemsList = this.itemsList.filter( i => i.id !== item.id)
                console.log(delete_response);
            })
        }
    },  
}
</script>