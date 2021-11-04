<template>

    <div>
        <div class="p-2 grid grid-cols-8 gap-4">
            <book-mark-list-item />
        </div>
    </div>


</template>


<script>
    import BookMarkListItem from "./BookMarkListItem";

    export default {
        components : {
            BookMarkListItem
        }
    }


</script>