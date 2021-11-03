<template>
    <router-link to="/"> 
        HomePage
    </router-link>

    <h2>BookMark</h2>

    <div class="form-area card border p-2">

        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">URL</label>
                <input type="text" class="form-control" id="formGroupExampleInput2">
            </div>

           <div class="form-group">
               <label for="description">Description</label>
               <textarea class="form-control"  id="description" cols="30" rows="10"></textarea>
           </div>
        </form>

        <div class="d-flex justify-content-center align-items-center">
                <button  @click="$router.push({ name : 'HomePage'})"
                class="btn btn-secondary mr-2">Cancel</button>
                <button class="btn btn-success">Save</button>
        </div>

    </div>


</template>