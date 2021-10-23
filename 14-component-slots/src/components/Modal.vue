<template>
    <div class="container" style="padding:10px 10px !important;">
        <header>
            <slot name="title" />
        </header>
        <hr>

        <main>
           <div class="mt-2">
               <slot name="content"/>
           </div>

        </main>

        <hr>
            <slot />
        <hr>

        <footer class="text-right">
            <button class="mr-2">Kapat</button>
            <button class="green" @click="onSave">Kaydet</button>
        </footer>
    </div>


</template>

<script>
    export default {

        props : ["onSave","title","mycontent"]

    }

</script>