<script setup>
import icons from '@/assets/icons.json'

const props = defineProps({
  item: Object,
  landscape: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
    <div class="cardContentBox portrait">
    <h1 class="cardTitle boxLevel1">
        {{ item.name }},
        <span class="grow" v-if="item.country">{{ item.country }}</span>
    </h1>     

    <p class="box business flex alignCenter gap20 overflowHidden" v-if="item.business.length"> 
        <svg viewBox="0 -960 960 960" class="cardIcon shrink0">
            <path :d="icons.storeFront.path" />
        </svg>

        <span class="grow">{{ item.business.length }} entreprises</span> 
    </p>

    <p class="box business flex alignCenter gap20 overflowHidden" v-if="item.Population"> 
        <svg viewBox="0 -960 960 960" class="cardIcon shrink0">
            <path :d="icons.groups.path" />
        </svg>

        <span class="grow">{{ item.Population }}</span> 
    </p>

    <p v-if="landscape"
        class="description">
        {{ item.description.slice(0,400) }}
        <span class="italic text-14"> ... lire la suite</span>
    </p>
</div>
    
  
  </template>
  
  <style scoped>
  /*css defined in CardContentPepite.vue*/
  </style>
  