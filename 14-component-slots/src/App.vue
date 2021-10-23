<template>
<!--    <Modal :onSave="onSave" :title="'Modal Title'" :mycontent="mycontent" />-->

    <Modal>

        <template #title>
            <h3>Slot ile gelen  Title lorem ipsum</h3>
        </template>

        <template #content>
            <p class="text-green">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at dolores illum non odio quam velit voluptate? Accusantium doloremque ea earum facilis, itaque magnam minima, neque nihil non pariatur quod!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad aliquid asperiores commodi, culpa cumque delectus deserunt distinctio eius esse excepturi ipsa maiores non quas quo repellat temporibus voluptas!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita facere, iure. Consectetur eius, enim facere, facilis incidunt laborum maiores officia omnis optio recusandae soluta suscipit tempora ut. Harum, nemo placeat.

            </p>
        </template>

        <template #default>
            DEFAULT dolor sit amet, consectetur adipisicing elit. Ex, quas!
        </template>

    </Modal>





</template>


<script>
    import Modal from "@/components/Modal"

    export default {
        components : {
            Modal
        },

        data () {
            return {
                mycontent: `<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet animi explicabo impedit maxime non porro tempore? Ab asperiores eveniet ipsam natus nihil non, suscipit. Cupiditate expedita ipsam nesciunt quas!</h3>`
             }
        },

        methods : {
            onSave(){
                alert("saved!")
            }
        }
    }

</script>