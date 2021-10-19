<template>
  <label for="todoInput"></label>

  <input
      v-model="todoText"
      @keypress.enter = "addNewTodo(todoText)"
      type="text"
      id="todoInput"
      placeholder="Todo giriniz...">

</template>



<script>

  export default {


    props: {
      addNewTodo : {
         type: Function,
         required: true
      }
    },



    data() {
      return {
        todoText : null
      }
    },

  }

</script>