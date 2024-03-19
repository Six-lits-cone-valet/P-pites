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
    <main class="grow">
        <div v-if="items">
            <section :class="{ 'landscape' : landscape }">
                <CardMain v-for="item in items" :key="item.key" :item="item" :landscape="landscape" class="card">

                    <component v-if="contentComponent" :is="contentComponent" :item="item" :landscape="landscape" />
                </CardMain>
            </section>
        </div>
    </main>
</template>

<style scoped>
section {
    overflow-x: scroll;
    display: flex;
    gap: 20px;
    margin-bottom: min(50px, 4vw);
}
section.landscape {
    flex-direction: column;
    overflow-x: hidden;
    margin-bottom: min(50px, 4vw);
}
.card {
    flex-shrink: 0;
}
</style>
