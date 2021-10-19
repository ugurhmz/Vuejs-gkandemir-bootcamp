<template>
  {{ item }}
  <li v-for="todoItem in todoList" :key="todoItem.id"  class="d-flex mt-4 align-items-center justify-content-between " >
    <span><span class="todoId"> {{todoItem.id}} </span>  &nbsp; {{ todoItem.text }}</span>

    <button class="red" @click="deleteItem(todoItem)"  >Sil</button>
  </li>

</template>


<script>

  export default {
      props:["item"]
  }
</script>