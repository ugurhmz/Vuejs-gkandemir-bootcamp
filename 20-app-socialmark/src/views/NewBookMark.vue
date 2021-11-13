<template>

  <div class="login_register_container ">
    <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>

    <input autofocus ref="mytitle" v-model="userData.title" type="text" placeholder="Başlık" class="input mb-3" />
    <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />

    <select v-model="userData.categoryId"  class="input mb-3">
      <option disabled value="" selected>Kategori</option>
      <option v-for="category in categoryList" :key="category.id" :value="category.id">
            {{ category.name }}
      </option>

    </select>

    <textarea v-model="userData.description"  placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
    <div class="flex items-center justify-end gap-x-1">
      <button @click="$router.push({ name : 'HomePage' })" class="secondary-button">İptal</button>
      <button @click="onSave" class="default-button">Kaydet</button>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
        categoryList : [],
        userData : {
            title: null,
            url : null,
            categoryId : null,
            description : null
        }
    }
  },

  mounted() {
    this.$appAxios.get("/categories").then(categories_response => {
      this.categoryList = categories_response?.data || [];
    })

    this.$nextTick(() => {
      console.log(this.$refs.mytitle);
    })

  },

  methods : {
    onSave() {

      const saveData = {
        ... this.userData,
        userId : this._getCurrentUser?.id,   // bu save işlemini yapan kullanıcının idsi.
        created_at : new Date() // save dediği anda tarih create olsun.
      };

      // /bookmarks'a post et, saveData objesiyle beraber post et.
      this.$appAxios.post("/bookmarks",saveData).then(save_bookmark_response => {
        console.log(save_bookmark_response)
        Object.keys(this.userData)?.forEach(item => this.userData[item] = null) ;// userData objesinin içindeki tüm fieldlerı null yapar.
        this.$router.push({name : "HomePage"});
      })

    }
  },

  computed : {
    ... mapGetters(["_getCurrentUser"])
  }

}
</script>

<style scoped>

</style>