<template>

  <app-header />

  <div class="flex flex-row">

    <side-bar />
<!--    <component :is="$route.meta.componentName"  :items="bookmarkList"/>-->

    <div class="socket">
      <input style="border:1px solid orangered" type="text" @keydown.enter="SEND_MESSAGE">
    </div>


<!--  {{ $log($route) }}-->
<!--    <app-bookmark-list v-if="bookmarkList.length > 0"  :items="bookmarkList"/>-->
<!--    <div v-else>-->
<!--      <h2>Gösterilcek BookMark Yok!</h2>-->
<!--    </div>-->

  </div>

</template>

<script>
import SideBar from "@/components/Account/sideBar";
import io from "socket.io-client";

export default {
  components: {SideBar},

  data() {
    return {
      bookmarkList : [],
      socket : {}
    }
  },

  created () {
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_response => {
      console.log("res : ",bookmark_response)
      this.bookmarkList = bookmark_response?.data || [];
    })
  },

  mounted() {
    this.socket = io("http://localhost:8085"); // socket sunucusuna bağlan.
    this.socket.on("WELCOME_MESSAGE",this.WELCOME_MESSAGE);
  },

  methods : {
    WELCOME_MESSAGE(data) {
      console.log("data : ",data);
    },

    SEND_MESSAGE(e) {
      this.socket.emit("SEND_MESSAGE", e.target.value);
    }
  }

}
</script>