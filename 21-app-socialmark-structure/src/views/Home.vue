<template>

    <app-header/>

    <div class="flex flex-row">
        <left-side-bar/>
        <app-bookmark-list/>

    </div>

</template>

<script>

    import LeftSideBar from "@/components/Home/LeftSideBar.vue";

    export default {
        name: "Home",
        components: {
            LeftSideBar,
        }
    }
</script>

<style scoped>

</style>