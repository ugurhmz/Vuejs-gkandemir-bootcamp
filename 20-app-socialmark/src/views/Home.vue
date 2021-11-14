<template>

    <app-header/>

    <div class="flex flex-row">
        <left-side-bar  @category-changed="updateBookMarkListToCategory"/>

        <app-bookmark-list v-if="bookmarkList.length > 0"  :items="bookmarkList"/>
        <div v-else>
          <h2>Gösterilcek BookMark Yok!</h2>
        </div>
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

        created () {
          this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_response => {
            console.log("res : ",bookmark_response)
            this.bookmarkList = bookmark_response?.data || [];
          })
        },

        methods : {
          updateBookMarkListToCategory(categoryId){
            const  url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`;

            this.$appAxios.get(url).then(update_response => {
              this.bookmarkList = update_response?.data || [];
            })
          }
        }

    }
</script>

<style scoped>

</style>