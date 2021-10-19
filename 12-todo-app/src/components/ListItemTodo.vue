<template>



  <li class="d-flex mt-4 align-items-center justify-content-between " >

    <span><span class="todoId"> {{item.id}} </span>  &nbsp; {{ item.text }}</span>
    <button  @click="deleteItem(item)"  class="red">Sil</button>
  </li>

</template>


<script>

  export default {
      props : ["item"],
      inject : ["deleteItem"]
  }
</script>