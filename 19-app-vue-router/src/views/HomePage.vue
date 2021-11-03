<template>
    <h2 class="text-warning bg-dark text-center">Home Page</h2>

    <div>
        <button class="btn btn-success mb-2 float-right" @click="$router.push({name:'NewBookMark'})">
            + Add New
        </button>
     </div>

     <table class="table table-striped table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">TITLE</th>
            <th scope="col">URL</th>
            <th scope="col">DELETE</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 10" :key="i">
            <th scope="row">{{ i }}</th>
            <td>Vue 3 </td>
            <td>http://www.google.com</td>
            <td class="float-right">
                <button class="btn btn-sm btn-danger">Delete</button>
            </td>
            </tr>
            
        </tbody>
        </table>
    
</template>