

<template>

  <div class="container text-center">
    <h3>{{ mycounter }}</h3>
    <button @click="mycounter++" class="green">+</button>
    <button @click="mycounter--"  class="red">-</button>
  </div>

</template>

<script>

export default {
  data(){
    return {
      mycounter :0
    }
  }
}

</script>