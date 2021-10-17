

<template>
  <div class="container p-3">
    <h3>İlk CLI uygulaması</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, natus nisi obcaecati quibusdam quod similique sunt vitae voluptatum. Consequatur cupiditate itaque minus nam necessitatibus numquam, qui ratione tempore voluptate voluptatem.</p>

  </div>

  <CounterItem/>
  <counter-item />
  <counterItem />



</template>

<script>


import CounterItem from "@/components/CounterItem";

  export default {
    components : {
      CounterItem,
    }
  }

</script>