
const app = Vue.createApp({

    data () {
        return {
            todoList : [
                { id:1, text : "Gym", completed:false , count:1},
                { id:2, text : "Vue.js", completed:true , count:2},
                { id:3, text : "Kitap Oku", completed:false , count:3},
                { id:4, text : "Film", completed:true , count:4},
                { id:5, text : "Dizi", completed:false , count:5},
            ],

        }
    },
    methods : {
        addTodoFunc(event) {
            /*this.todoList.push(event.target.value)*/
            let mycount=1;

            if(this.todoList.length !== 0){
                mycount = this.todoList.slice(-1)[0].count +1 ; // Last Item
                console.log(mycount)
            }

            this.todoList.push({


                id : new Date().getTime(),
                text : event.target.value,
                completed :  false,
                count : mycount
            })

            event.target.value = "";
        },

        removeItemFunc(todoItem) {
            console.log(todoItem.id)
            this.todoList  = this.todoList.filter( i => i !== todoItem) // Filtrelenmiş arrayi, todoList'imin yeni hali olarak kaydet.
        }
    },

    computed : {

        // completed -> true olanların sayısı
        completedItemCount() {
            return this.todoList.filter( item => item.completed).length
        },


        // False olanların sayısı
        unCompletedItemCount() {
            return this.todoList.filter( item => !item.completed).length
        },
    }


}).mount("#app");