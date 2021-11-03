<template>
    <router-link to="/"> 
        HomePage
    </router-link>

    <h2>BookMark</h2>

    <div class="form-area card border p-2">

        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="userDatas.title" class="form-control" id="title">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">URL</label>
                <input type="text" v-model ="userDatas.url" class="form-control" id="formGroupExampleInput2">
            </div>

           <div class="form-group">
               <label for="description">Description</label>
               <textarea class="form-control" v-model="userDatas.description"  id="description" cols="30" rows="10"></textarea>
           </div>
        </form>

        <div class="d-flex justify-content-center align-items-center">
                <button  @click="$router.push({ name : 'HomePage'})"
                class="btn btn-secondary mr-2">Cancel</button>
                <button class="btn btn-success" @click="onSave">Save</button>
        </div>

    </div>


</template>

<script>

export default {
    data () {
        return {
            userDatas : {
                title : null,
                url : null,
                description : null
            }
        }
    },

    methods : {
        onSave() {
            console.log(this.userDatas);

            this.$appAxios.post("/bookmarks", this.userDatas)
                .then(save_response => {
                    console.log("response : ", save_response);
                    this.resetData();
                    this.$router.push("/")
                })
        },

        resetData() {
            Object.keys(this.userDatas).forEach( key => ( this.userDatas[key] = null) );    // $axios.post'tan sonra  Bu fieldlerin valuesini temizler.
        }
    }
}

</script>


