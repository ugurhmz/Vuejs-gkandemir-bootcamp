<template>

  <app-header />

  <div class="flex flex-row">

    <side-bar />
<!--    <component :is="$route.meta.componentName"  :items="bookmarkList"/>-->

    <div class="socket">
      <input style="border:1px solid orangered" type="text" @keydown.enter="SEND_MESSAGE">
    </div>
  </div>

</template>

<script>
import SideBar from "@/components/Account/sideBar";


export default {
  components: {SideBar},

  data() {
    return {
      bookmarkList : [],
    }
  },

  created () {
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_response => {
      console.log("res : ",bookmark_response)
      this.bookmarkList = bookmark_response?.data || [];
    })
  },

  mounted() {
    this.$socket.on("WELCOME_MESSAGE",this.WELCOME_MESSAGE);
  },


}
</script>