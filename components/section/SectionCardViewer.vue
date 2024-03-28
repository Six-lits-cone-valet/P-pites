<script setup>
import { directusGetItems } from '@/directus/directus.config.js';

const props = defineProps({
    title: String,
    requestId: String,
    collection: String,
    requestParams: Object,
    contentComponent: Object,
    landscape: {
        type: Boolean,
        default: false
    },
    borders: {
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
            class=""
            :class="[{ 'landscapeCards' : landscape }, collection, { 'showBorders' : borders } ]">

            <h1 class="sectionTitle">
                {{ title }}
            </h1>

            <div class="cards flex gap20 marTop20">
                <CardMain v-for="item in items" :key="item.key" :item="item" :landscape="landscape">

                <component v-if="contentComponent" :is="contentComponent" :item="item" :landscape="landscape" />
            </CardMain>
            </div>
        </section>

</template>

<style scoped>
.sectionTitle{
    padding: clamp(5px, 1.5vw, 20px);
}

section {
    margin-bottom: min(50px, 4vw);
    overflow-x: scroll;    
}
section.landscapeCards {
    flex-direction: column;
    overflow-x: hidden;
}


.Categories {
    --color: var(--theme-color-category);
}

.Cities {
    --color: var(--theme-color-city);
}

.Pepites {
    --color: var(--theme-color-pepite);
}
.cards {
    padding: clamp(5px, 1.5vw, 20px);
}
.showBorders .cards{
    border-width: 5px;
    border-style: dashed;
    border-color: var(--color);
}
</style>
