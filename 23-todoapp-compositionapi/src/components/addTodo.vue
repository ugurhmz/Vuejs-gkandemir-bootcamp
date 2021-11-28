<template>
  <section class="my-4">


    <input @keydown.enter="newItem"
           type="text"
           placeholder="Todo Ekleyiniz..."
           class="w-full p-2
                 text-black border-[1px]
                 bg-gray-100 rounded
                 border-green-800
                 outline-none border
                 shadow-2xl
                 focus:outline-none focus:ring-2
                 focus:ring-purple-600
                 focus:border-transparent">
  </section>
</template>

<script>
export default {
  props : {
    AddTodoFunc: Function,
  },

  setup(props) {
      const newItem = (event) => {
        props.AddTodoFunc(event.target.value)
        event.target.value = "";
      }

      return { newItem }
  }




}
</script>