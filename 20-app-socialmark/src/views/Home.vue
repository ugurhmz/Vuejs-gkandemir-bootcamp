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

        mounted() {
          //!  Yeni bir bookmark olduğunda, fethDatayı çağır.
          this.$socket.on("NEW_BOOKMARK_ADDED",this.fetchData);
        },

        created () {
          this.fetchData();
        },
        methods : {
          fetchData() {
            this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_response => {
              console.log("res : ",bookmark_response)
              this.bookmarkList = bookmark_response?.data || [];
            });

            //TODO Bookmark olarak  eklediklerimizi çekmek için user_bookmarks üzerinden
            this.$appAxios.get("/user_bookmarks/?_expand=bookmark&_expand=user").then(user_bookmarks_response => {
              this.$store.commit("setBookmarks",user_bookmarks_response?.data);
            });

            //TODO Like olarak  eklediklerimizi çekmek için user_bookmarks üzerinden
            this.$appAxios.get("/user_likes/?_expand=bookmark?_expand=user").then(user_likes_response => {
              this.$store.commit("setLikes", user_likes_response?.data);
            })
          },

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