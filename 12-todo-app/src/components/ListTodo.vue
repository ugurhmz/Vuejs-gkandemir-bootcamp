<template>

  <ul style="padding:1rem;" class="myul">
      <ListItemTodo

              @delete-todo-item="$emit('delete-my-item', $event)"
              v-for="todoItem in myData"
              :key="todoItem.id"
              :item="todoItem"/>
  </ul>


</template>

<script>

import ListItemTodo from "@/components/ListItemTodo";

  export default {

    props:["myData"],

    components: {
      ListItemTodo
    }
  }


</script>