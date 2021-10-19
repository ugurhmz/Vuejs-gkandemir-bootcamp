<template>
  <label for="todoInput"></label>

  <input
      v-model="todoText"
      @keypress.enter = "addNewTodo"
      type="text"
      id="todoInput"
      placeholder="Todo giriniz...">

</template>


<script>

  export default {

    data() {
      return {
        todoText : null
      }
    },


    methods: {
      addNewTodo(){
        this.$emit("add-todo-event",this.todoText);
        this.todoText = null;
      }
    }
  }

</script>