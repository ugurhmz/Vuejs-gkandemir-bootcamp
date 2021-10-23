<template>
    <ul>
        <li v-for="user in usersList" :key="user"> {{ user }}</li>
    </ul>
</template>

<script>
    export default {
        inject : ["usersList"]
    }

</script>