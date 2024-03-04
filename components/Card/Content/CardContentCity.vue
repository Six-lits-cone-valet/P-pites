<script setup>

const props = defineProps({
  item: Object,
  landscape: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
    <div class="contentBox flex grow justifyEnd">
      <div class="grow flex column justifyBetween">
        <h1>{{ item.name }}</h1>
  
        <p>{{ item.description }}</p>
  
        <div class="flex gap5">
          <p v-for="option in item.options" :key="option.id">{{ option }}</p>
        </div>
      </div>
  
      <div class="iconBox flex column gap10">
        
        <p class="iconExample"></p>
  
        <p class="iconExample"></p>
  
        <p class="iconExample"></p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .iconBox {
    padding: 5px;
  }
  .iconExample {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
  }
  </style>
  