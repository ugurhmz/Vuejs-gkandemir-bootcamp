<template>

  <ul style="padding:1rem;" class="myul">
      <ListItemTodo
              v-for="todoItem in provideData.todoList"
              :key="todoItem.id"
              :item="todoItem"/>
  </ul>


</template>

<script>

import ListItemTodo from "@/components/ListItemTodo";

  export default {

    inject : ["provideData"],
    components: {
      ListItemTodo
    }

  }


</script>













