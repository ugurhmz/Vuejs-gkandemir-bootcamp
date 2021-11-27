<template>

  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title">
  </div>

</template>
<script>

import {ref} from "vue";


export default {

   setup() {
      const title = ref("Bu bir değişen başlıktır.")
      return {
        title
      }
   }

}

</script>