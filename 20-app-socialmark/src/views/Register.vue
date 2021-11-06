<template>

    <div class="login_register_container">
        <h3 class="text-2xl text-center mb-3">Register</h3>
        <input v-model="userData.fullname" type="text" placeholder="Tam Ad" class="input mb-3" />
        <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
        <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
        <button @click="onSave"  class="default-button">Kayıt ol</button>
        <span class="text-center mt-3 text-sm">
        Zaten Üyeyim,

          <router-link :to="{ name : 'LoginPage'}" class="text-red-900 hover:text-black">
                Giriş Yap!
          </router-link>

      </span>
    </div>


</template>

<script>

import CryptoJs from "crypto-js";

    export default {

      data() {
          return {
            userData : {
              username: null,
              fullname : null,
              password : null,
            }
          }
      },
      methods : {
        onSave() {
          const password = this.userData.password;
          const cryptedPassword = CryptoJs.HmacSHA1(password,this.$store.getters._mykey).toString();


          //tüm userData nesnesini al ve içindeki password property'sini -> cryptedPassword olarak ez.
          this.$appAxios.post("/users", {... this.userData, password: cryptedPassword})
              .then(registered_user_response => {
                console.log("registered user : ",registered_user_response);
                this.$router.push({ name : "HomePage"})
          })

        }
      }
    }
</script>

<style scoped>

</style>