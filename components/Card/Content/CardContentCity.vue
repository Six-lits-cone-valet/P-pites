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
  <div class="contentBox cardContentBox" :class="[landscape ? 'landscape' : 'portrait']" v-if="item">
    
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
  /*.iconBox {
    padding: 5px;
  }
  .iconExample {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
  }*/

  .contentBox {
    --box-side-padding: 7px;
}
.portrait .contentBox {
    padding: 15px 8px 0px 8px;
}
.landscape .contentBox {
    padding: 25px 30px 25px 25px;
}


/* TITLE */
.cardTitle {
    padding: 0 var(--box-side-padding);
}
.portrait .cardTitle {
    font-weight: 600;
    font-size: 17px;
}
.landscape .cardTitle {
    font-size: 23px;
    font-weight: 600;
}
/*  */
.cardIcon {
    width: 26px;
    fill: var(--gray-light);
}

.options .box {
    padding: 7px var(--box-side-padding);
}
.options {
    margin: 15px 0;
}
.box:first-child,
.box:last-child {
    border-top: 1px solid var(--gray-dimmed);
    border-bottom: 1px solid var(--gray-dimmed);
}
.portrait .box:last-child {
    border-bottom: none;
}
.category {
    font-size: 12px;
    font-weight: 600;
    color: var(--gray-light);
    border: 1px solid var(--gray-dimmed);
    padding: 4px 10px;
    border-radius: 100px;
}
.iconBox {
    padding: 5px;
    
}
.iconExample {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    
}
/* Description */

.description {
    font-size: 18px;
    line-height: 1.4em;
    color: var(--gray-light);
    padding: 0px 7px;
}
.business span{
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
  </style>
  