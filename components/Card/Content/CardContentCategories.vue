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
    <div class="cardContentBox portrait grow">
        <h1 class="box title cardTitle">
            {{ item.cardTitle }}
        </h1>

        <div class="portraitContent">
            <p class="box short">
                {{ item.short }}
            </p>
        </div>
    </div>
  </template>
  
  <style scoped>
  

  </style>
  