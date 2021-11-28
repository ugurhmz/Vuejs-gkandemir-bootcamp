<template>

  <section class="mt-8">
    <todo-item v-for="todo in myTodoList" :key="todo.id" :todo="todo"/>
    <small>{{ todoLength }} adet todo vardır</small>
    <todo-infos />

  </section>

</template>

<script>

import TodoItem from "./todoItem.vue"
import TodoInfos from "./todoInfos.vue"
import {  computed } from "vue"


export default {
  components : {
    TodoItem,
    TodoInfos
  },

  props : {
    myTodoList : Array,
  },

  setup(props) {
    const todoLength =  computed(() => props.myTodoList.length);
    return {todoLength}
  }

}
</script>