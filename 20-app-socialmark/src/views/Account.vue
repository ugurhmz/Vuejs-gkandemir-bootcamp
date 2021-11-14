<template>

  <app-header />

  <div class="flex flex-row">

    <side-bar />
    <component :is="$route.meta.componentName"  :items="bookmarkList"/>


<!--  {{ $log($route) }}-->
<!--    <app-bookmark-list v-if="bookmarkList.length > 0"  :items="bookmarkList"/>-->
<!--    <div v-else>-->
<!--      <h2>Gösterilcek BookMark Yok!</h2>-->
<!--    </div>-->

  </div>

</template>

<script>
import SideBar from "@/components/Account/sideBar";
export default {
  components: {SideBar},

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

}
</script>