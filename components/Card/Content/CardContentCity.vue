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
<div class="cardContentBox portrait grow">
    <h1 class="box title cardTitle">
        {{ item.name }},
        <span class="grow" v-if="item.country">{{ item.country }}</span>
    </h1>     

    <div class="portraitContent">
        <ul class=" icons grow flex column">
            <li class="box business flex alignCenter gap20 overflowHidden"> 
                <svg viewBox="0 -960 960 960" class="cardIcon shrink0">
                    <path :d="icons.groups.path" />
                </svg>

                <span class="grow" v-if="item.Population">{{ item.Population }}</span> 
            </li>

            <li class="box business ellipsis flex alignCenter gap20 overflowHidden" v-if="item.business"> 
                <svg viewBox="0 -960 960 960" class="cardIcon shrink0">
                    <path :d="icons.storeFront.path" />
                </svg>

                <span class="infoText grow">{{ item.business.length }}</span> 
            </li>
        </ul>            
    </div>
</div>
    
  
  </template>
  
  <style scoped>
  /*css defined in CardContentPepite.vue*/
  </style>
  