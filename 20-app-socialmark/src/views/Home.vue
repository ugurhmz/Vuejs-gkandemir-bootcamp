<template>

    <app-header/>

    <div class="flex flex-row">
        <left-side-bar/>
        <app-bookmark-list :items="bookmarkList"/>

    </div>

</template>

<script>

    import LeftSideBar from "@/components/Home/LeftSideBar.vue";

    export default {
        name: "Home",
        components: {
          LeftSideBar,
        },
        data() {
          return {
            bookmarkList : []
          }
        },
      ///comments?_expand=post
        created () {
          this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_response => {
            console.log("res : ",bookmark_response)
            this.bookmarkList = bookmark_response?.data || [];
          })
        },

    }
</script>

<style scoped>

</style>