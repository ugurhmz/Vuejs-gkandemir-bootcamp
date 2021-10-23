<template>
    <div class="container">
        <ListSection />
        <AddDataSection />

    </div>

</template>

<script>
    import AddDataSection from "@/components/AddDataSection"
    import ListSection from "@/components/ListSection"

    export default  {
        components : {
            ListSection,
            AddDataSection,

        },

    }

</script>