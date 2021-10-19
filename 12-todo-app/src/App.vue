

<template>

  <div class="container" style="width: 800px !important;">
        <h3 class="text-green text-center bg-black py-4">Todo App</h3>
    <hr class="my-2">

      <AddInputSection  @add-todo-event="todoAdd" />

      <ListTodo   :myData = "todoList" />

    <small v-if="todoList.length !== 0" class="text-right d-flex justify-content-center mt-2 text-green">{{ todoList.length }} adet todo vardır</small>
rs
  </div>

</template>


<script>

import AddInputSection  from "@/components/AddInputSection";
import ListTodo from "@/components/ListTodo";


  export default{
      components : {
        ListTodo,
        AddInputSection
      },

      data() {
        return {
          todoList : [
            {id : 1, text:"Work Spring Boot Security"},
            {id : 2, text:"Go to Gym"},
            {id : 3, text:"Muay Thai"},

          ],
          todoVal : ""
        }
      },

      methods : {

        deleteItem(incomingItem) {

          this.todoList = this.todoList.filter( (item) => item !== incomingItem);
        },


        todoAdd(todo) {

             if( todo  !== ""){

                 this.todoList.push({
                   id : this.todoList.length === 0 ? 1 : this.todoList.slice(-1)[0].id + 1 ,
                   text : todo.trim(),
                 });

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