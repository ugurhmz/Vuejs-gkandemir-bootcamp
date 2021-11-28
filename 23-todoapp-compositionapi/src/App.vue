<template>

  <div class="w-screen h-screen bg-gray-400 pt-4">
    <div class="bg-gray-700 rounded-md  shadow-lg text-white w-1/2 mx-auto p-4">
      <h3 class="text-2xl text-center">Todo List</h3>
      <AddTodo :AddTodoFunc="AddTodoFunc"/>
      <TodoList :myTodoList="myTodoList" /> <!-- TODO TodoList componenti içine :myTodoList i yolla. -->

    </div>
  </div>

</template>

<script>

import AddTodo from "./components/addTodo.vue"
import TodoList from "./components/todoList.vue";
import {ref} from "vue";

export default {

  components : {
    AddTodo,
    TodoList
  },
  setup() {

    const myTodoList = ref([]);
    const AddTodoFunc = (todoText) => {

      myTodoList.value.push({
        id  :new Date(),
        title : todoText
      });
    }

    return {myTodoList, AddTodoFunc}
  },



}

</script>