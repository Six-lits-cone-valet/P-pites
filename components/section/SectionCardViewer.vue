<script setup>
import { directusGetItems } from '@/directus/directus.config.js';

const props = defineProps({
    requestId: String,
    collection: String,
    requestParams: Object,
    contentComponent: Object,
    landscape: {
        type: Boolean,
        default: false
    }
});

const { data: items } = await useAsyncData(
    props.requestId,
    async () => {
        const items = await directusGetItems(props.collection, props.requestParams);

        return items;
    },
    { server: true }
);

</script>

<template>
    <section v-if="items"
            class="flex gap20"
            :class="{ 'landscapeCards' : landscape }">
            <CardMain v-for="item in items" :key="item.key" :item="item" :landscape="landscape">

                <component v-if="contentComponent" :is="contentComponent" :item="item" :landscape="landscape" />
            </CardMain>
        </section>

</template>

<style scoped>
section {
    padding: 20px;
    margin-bottom: min(50px, 4vw);
    overflow-x: scroll;    
}
section.landscapeCards {
    flex-direction: column;
    overflow-x: hidden;
}

</style>
