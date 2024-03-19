<script setup>
import { directusGetItems } from '@/directus/directus.config.js'

const props = defineProps({
    collection: String,
    requestParams: Object,
    contentComponent: Object
})

const { data: items } = await useAsyncData(
    `items-${props.collection}`,
    async () => {
        const items = await directusGetItems(props.collection, props.requestParams);

        return items;
    }
)

const showLandscapeCards = ref(false);

</script>

<template>
    <main class="grow" v-if="items.length">
        <!-- temporary button for testing -->
        <button @click.stop.prevent="showLandscapeCards = !showLandscapeCards" v-if="props.collection === 'Pepites'">
            click to change card format
        </button>
        <section :class="{ 'landscape' : showLandscapeCards && props.collection === 'Pepites' }"> 
            <CardMain
                v-for="item in items" :key="item.key" 
                :item="item" 
                :landscape="showLandscapeCards"
                class="card">

                <component :is="contentComponent" :item="item" :landscape="showLandscapeCards" />
            </CardMain>
        </section> 
    </main>
</template>
       
<style scoped>
section {
    overflow-X: scroll;
    display: flex;
    gap: 20px;
}
section.landscape {
    flex-direction: column;
    overflow-X: hidden;
}
.card {
    flex-shrink: 0;
}
</style>

