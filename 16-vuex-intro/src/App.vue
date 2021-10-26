<template>
    <div class="container">
        

        <UserList />
        <NewUser />
        
     
    </div>
</template>



<script>

import NewUser from "@/components/NewUser"
import UserList from "@/components/UserList"



export default {
    
    components : {
        NewUser,
        UserList
    },
   
}
</script>