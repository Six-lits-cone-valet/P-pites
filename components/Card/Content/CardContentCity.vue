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
    <h1 class="box title cardTitle">
        {{ item.name }},
        <span class="grow" v-if="item.country">{{ item.country }}</span>
    </h1>     

    <div class="portraitContent">
        <ul class=" icons grow flex column">
            <div class="box flex alignCenter gap10">

                <li class="box business flex alignCenter gap20 overflowHidden" v-if="item.Population"> 
                    <svg viewBox="0 -960 960 960" class="cardIcon shrink0">
                        <path :d="icons.groups.path" />
                    </svg>

                    <span class="grow">{{ item.Population }}</span> 
                </li>
            </div>

            <li class="box business ellipsis flex alignCenter gap20 overflowHidden" v-if="item.business"> 
                <svg viewBox="0 -960 960 960" class="cardIcon shrink0">
                    <path :d="icons.storeFront.path" />
                </svg>

                <span class="infoText grow">{{ item.business.length }}</span> 
            </li>
        </ul>            
    </div>

    <div class="landscapeContent">
        <p v-if="landscape"
            class="box description">
            {{ item.description.slice(0,400) }}
            <span class="italic text-14"> ... lire la suite</span>
        </p>
    </div>
</div>
    
  
  </template>
  
  <style scoped>
  /*css defined in CardContentPepite.vue*/
  </style>
  