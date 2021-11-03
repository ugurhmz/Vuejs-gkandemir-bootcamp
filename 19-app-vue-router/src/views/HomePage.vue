<template>


   <div v-if="deleteMsg" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{{ deleteMsg }}</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

    <h2 class="text-warning bg-secondary text-center">Home Page</h2>

    <div>
        <button class="btn btn-success mb-2 mt-2  float-right" @click="$router.push({name:'NewBookMark'})">
            + Add New
        </button>
     </div>

     <table class="table table-striped table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">TITLE</th>
            <th scope="col">URL</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">DELETE</th>
            </tr>
        </thead>
        <tbody>

            <tr v-for="item in bookmarkList" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.title }}</td>
            <td>
                <a :href="item.url" target="_blank"> {{ item.url }}</a>
            </td>
            <td>{{  item.description }}</td>
            <td class="float-right">
                <button @click="deleteBookMark(item)"    
                        class="btn btn-sm btn-danger">Delete</button>
            </td>
            </tr>
            
        </tbody>
        </table>
    
</template>

<script>

export default {

    data() {
        return {
             bookmarkList : [],
             deleteMsg : null,
        }
    },

    created() {
        this.$appAxios.get("/bookmarks").then(bookmark_response => {
            this.bookmarkList = bookmark_response.data;
        })
    },

    methods : {
        deleteBookMark(item) {
            this.$appAxios.delete(`/bookmarks/${item.id}`).then( delete_response => {
                
                // silme başarılıysa
                if(delete_response.status == 200){
                    this.bookmarkList = this.bookmarkList.filter( i => i.id !== item.id );
                     this.deleteMsg = `${item.id} başarıyla silindi!`;
                }
            })
           
        }
    }
}

</script>
