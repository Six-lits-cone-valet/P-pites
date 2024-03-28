<script setup>
import icons from '@/assets/icons.json'

const props = defineProps({
    item: Object,
    landscape: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <div class="cardContentBox" :class="[landscape ? 'landscape' : 'portrait']" v-if="item">
        <h1 class="box title cardTitle">
            {{ item.title }}
        </h1>

        <div class="portraitContent">
            <ul class=" icons grow flex column">
                <div class="box flex alignCenter gap10">
                    <li v-if="item.category" class="category textTag">
                        <span> {{ item.category.text }} </span>
                    </li>

                    <li class="" v-for="option in item.options" :key="option.id">
                        <svg viewBox="0 -960 960 960" class="cardIcon centered">
                            <path :d="icons[option].path" />
                        </svg>
                    </li>
                </div>

                <li class="box business ellipsis flex alignCenter gap20 overflowHidden" v-if="item.business"> 
                    <svg viewBox="0 -960 960 960" class="cardIcon shrink0">
                        <path :d="icons.storeFront.path" />
                    </svg>

                    <span class="grow">{{ item.business.name }}</span> 
                </li>

                <li class="box city ellipsis flex alignCenter  gap20" v-if="item.business"> 
                    <svg viewBox="0 -960 960 960" class="cardIcon">
                        <path :d="icons.city.path" />
                    </svg>

                    <span>{{ item.business.city.name }}</span> 
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

/* 
    Styles are defined in '@/css/components/cards' 
*/

</style>