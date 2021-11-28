<template>

  <div>
    <h1>{{ title }}</h1>
    <h2> {{  titleLengthMessage }}</h2>
    <input type="text" v-model="title">
    <button @click="toggleFunc">
      Show Me
    </button>

    <p v-if="show">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Blanditiis dolore doloribus error et excepturi exercitationem porro saepe s
      oluta unde voluptate. Adipisci assumenda harum illum, maiores necessitatibus
      sequi totam! Eaque, recusandae?
    </p>
    <br><br>
    <button @click="counter++">Artır</button>
    <p>
      {{ counter }} {{ oddOrEvenCounter }}
    </p>
    <hr>

    <input type="text" v-model="searchText">
    <p v-if="isTyping">Şuan yazıyor....</p>

  </div>

</template>
<script>
import Counter from "./composables/Counter";
import Header from "./composables/Header";
import Search from "./composables/Search"
import Toggle from "./composables/Toggle";

export default {
   setup() {

     const { counter, oddOrEvenCounter } = Counter();
     const { title, titleLengthMessage } = Header();
     const { searchText, isTyping } = Search();
     const { show, toggleFunc } = Toggle();


      return {
        title,
        show,
        toggleFunc,
        titleLengthMessage,
        counter,
        oddOrEvenCounter,
        searchText,
        isTyping
      }
   }

}
</script>