<template>

  <div class="w-screen h-screen bg-gray-400 pt-4">
    <div class="bg-gray-700 rounded-md  shadow-lg text-white w-1/2 mx-auto p-4">
        <h3 class="text-2xl text-center">Todo List</h3>


        <section class="my-4">
          <input type="text"
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


        <section class="mt-8">
          <div class="flex justify-between even:bg-gray-600">
            <label for="completed" class="text-xl">
              <input type="checkbox" id="completed" class="ml-5">
              Todo 1
            </label>
            <button class="bg-red-400 px-4
            py-2 rounded-md
            hover:bg-red-600 active:bg-red-900 transform hover:scale-110 motion-reduce:transform-none">Sil</button>
          </div>

          <div class="flex justify-between even:bg-gray-600 mt-2">
            <label for="completed2" class="my-auto text-xl">
              <input type="checkbox" id="completed2" class="ml-5">
              Todo 2
            </label>

            <button class="bg-red-400 px-4 py-2 rounded-md hover:bg-red-600 active:bg-red-900">Sil</button>
          </div>

          <div class="flex justify-between even:bg-gray-600  mt-2">
            <label for="completed3" class="my-auto text-xl">
              <input type="checkbox" id="completed3" class="ml-5">
              Todo 3
            </label>

            <button class="bg-red-400 px-4 py-2 rounded-md hover:bg-red-600 active:bg-red-900">Sil</button>
          </div>

          <div class="flex justify-between even:bg-gray-600 mt-2">
            <label for="completed4" class="my-auto text-xl">
              <input type="checkbox" id="completed4" class="ml-5">
              Todo 4
            </label>

            <button class="bg-red-400 px-4 py-2 rounded-md hover:bg-red-600 active:bg-red-900">Sil</button>
          </div>
        </section>

      <div class=" mt-10 w-full flex">
        <span class="text-green-500 mx-auto">Tamamlanmışlar</span>
        <span class="text-red-500 mx-auto"> Tamamlanmamışlar</span>
      </div>

    </div>
  </div>

</template>
