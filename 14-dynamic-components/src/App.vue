<template>
    <div class="container" style="padding:15px 15px;">

        <div class="my-3 d-flex justify-content-between align-items-center">

            <button class="red"   @click="activeComponent = 'Red'">Red</button>
            <button class="green"  @click="activeComponent = 'Green'">Green</button>
            <button class="blue"  @click="activeComponent = 'Blue'">Blue</button>

        </div>


<!--        <Red v-if="activeComponent == 'Red'" class="mb-2" />-->
<!--        <Green v-if="activeComponent == 'Green'"  class="mb-2"/>-->
<!--        <Blue v-if="activeComponent == 'Blue'" class="mb-2" />-->

        {{  activeComponent }}

        <keep-alive>
            <component :is="activeComponent" msg="Red Component 2">
                <h3 class="bg-green text-white">Green Component</h3>
            </component>
        </keep-alive>

    </div>
</template>
<script>

  import Red from "@/components/Red"
  import Green from "@/components/Green"
  import Blue from "@/components/Blue"

    export default  {
        components : {
            Red,
            Green,
            Blue
        },

        data () {
            return {
                activeComponent : "Red"
            }
        }
    }

</script>