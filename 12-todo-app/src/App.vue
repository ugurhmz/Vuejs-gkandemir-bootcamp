

<template>

  <div class="container" style="width: 800px !important;">

      <h3 class="text-green text-center bg-black py-4">Todo App</h3>
       <hr class="my-2">

      <AddInputSection  :addNewTodo="todoAdd" />
      <ListTodo  />

      <ResultBar  :itemCount="provideData.todoList.length"/>
  </div>

</template>


<script>

import AddInputSection  from "@/components/AddInputSection";
import ListTodo from "@/components/ListTodo";
import ResultBar from "@/components/ResultBar"

  export default{
      components : {
        ListTodo,
        AddInputSection,
        ResultBar
      },

      data() {
        return {

          provideData : {
              todoList : [
                  {id : 1, text:"Work Spring Boot Security"},
                  {id : 2, text:"Go to Gym"},
                  {id : 3, text:"Muay Thai"},

              ],

          },


        }
      },

      provide () {
        return {
            provideData : this.provideData,
            deleteItem : this.deleteItem,
        }
      },


      methods : {

        deleteItem(incomingItem) {
        console.log(incomingItem);
          this.provideData.todoList = this.provideData.todoList.filter( (item) => item !== incomingItem);
        },


        todoAdd(todo) {


            if(todo !== null && todo.trim().length !== 0 ){
              let newTodo = todo.trim();

              if(newTodo !== "" || newTodo !== null || newTodo.length !== 0){

                this.provideData.todoList.push({
                  id : this.provideData.todoList.length === 0 ? 1 : this.provideData.todoList.slice(-1)[0].id + 1 ,
                  text : newTodo
                });


              }
            } else {
              alert("Boş Todo yazıyorsunuz!!");
            }


        }
      }
  }

</script>


<style>
  .container #todoInput {
    padding:1rem;
  }


  ul.myul  li {
    padding:1.2rem !important;
    margin-top:12px;
    font-weight: bolder;
  }

  .container ul li .todoId {
    border: 1px solid black;
    padding: 5px;
    border-radius: 2px;
    background-color: black;
    color: #f3bc1f;
    margin-right:1rem;
  }

</style>