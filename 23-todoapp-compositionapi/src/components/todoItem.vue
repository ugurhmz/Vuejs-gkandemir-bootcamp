<template>
  <div class="flex justify-between even:bg-gray-600 mb-4">
    <label :for="`todo_${todo.id}_completed`" class="text-xl">
      <input v-model="todo.completed"
             type="checkbox"
             :id="`todo_${todo.id}_completed`"
             class="ml-5">
    {{ todo.title }}
    </label>
    <button class="bg-red-400 px-4
            py-2 rounded-md
            hover:bg-red-600 active:bg-red-900 transform hover:scale-110
            motion-reduce:transform-none">Sil</button>
  </div>

</template>


<script>
export default {

  props : {
    todo : Object,
  },

}
</script>