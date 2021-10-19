<template>



    <hr v-if="itemCount !== 0">
    <small v-if="itemCount !== 0" class="mt-2 d-flex justify-content-center text-green">
         {{ itemCount }} Adet todo vardır.
    </small>

</template>


<script>
    export default {
        props : ["itemCount"]
    }


</script>