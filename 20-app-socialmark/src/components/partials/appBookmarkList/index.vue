<template>

    <div>
        <div class="p-2 grid grid-cols-8 gap-4">
            <BookMarkListItem v-for="item in items" :key="item.id" :item="item"/>
        </div>
    </div>


</template>


<script>
    import BookMarkListItem from "./BookMarkListItem";

    export default {
        components : {
            BookMarkListItem
        },

      props : {
          items : {
            type : Array,
            required : true,
            default : () => []
          }
      }
    }


</script>