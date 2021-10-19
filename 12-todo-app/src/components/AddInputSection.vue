<template>
  <label for="todoInput"></label>

  <input
      @keypress.enter = "todoAdd"
      type="text"
      id="todoInput"
      :value="todoVal"
      placeholder="Todo giriniz...">
</template>