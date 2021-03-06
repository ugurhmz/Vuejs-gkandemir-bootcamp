import { createStore } from "vuex"



const store = createStore({

    state : {
    
        user : {
            name : "Ugur",
            lname : "Hmz",
            age : 33,
            address : {},
            password : 12312312312,
            tc : 1111111
        },

        theme :"dark",
        permissions : [1,2,3,4,5,6],
        fullName : "Ugur hmz",
        itemList : [
            {id:1, name:"Phone", cate:"elektronik"},
            {id:2, name:"TV", cate:"elektronik"},
            {id:3, name:"MOUSE", cate:"ayakkabı"},
            {id:4, name:"LCD", cate:"mobilya"},
            {id:5, name:"RADIO", cate:"küpeler"},
            {id:6, name:"Speaker", cate:"elektronikx"}

        ]

    },


    mutations : {
        newItem(state, item){
            console.log("state infos : ",state);
            state.itemList.push(item);
        }
    },

    actions : {

     addNewItem( { commit }, item){
               
           
            setTimeout(() => {
                //    context.commit("newItem",item); // contextin içinde mutations var ben oraya göndericem diyoruz bu şekilde.
                commit("newItem",item);
            }, 2000);
        }
    },

    getters : {
        myElectronicItems : state => state.itemList.filter(i => i.cate == "elektronik"),
        activeUser(state) {
            const myuser = {
                ... state.user
            };

            delete myuser.password;
            return myuser;
        }

    },


})


export default store;