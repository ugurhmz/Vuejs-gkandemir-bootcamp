<template>
    <header>
        {{ myheader }}
    </header>
</template>


<script>
  export default {
    data() {
      return {
        myheader : "Ugur hmz Vue.js@",
      }
    }
  }
</script>


<style>
  header {
    background-color:rebeccapurple;
    color:#fff;
    display : flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:50px;
    border-bottom:2px solid  rgb(5,5,5);
    position: absolute;
    top:0;
    left:0;

  }

</style>