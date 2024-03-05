<script setup>
import { directusGetItems } from '@/directus/directus.config.js';

const props = defineProps({
    collection: String,
    requestParams: Object,
    contentComponent: Object,
});

const { data: items } = useAsyncData(
    `items-${props.collection}`,
    async () => {
        return directusGetItems(props.collection, props.requestParams);
    }
);

const showLandscapeCards = false;

const getLastPepite = (pepites) => {
    if (pepites && pepites.length > 0) {
        return pepites[0];
    }
    return null; 
};

let lastPepite = null;

const { data: pepites } = useAsyncData('Pepites', async () => {
    const pepitesData = await directusGetItems('Pepites', {
        fields: ['title', 'description', 'image', 'date_created'],
        sort: '-date_created',
        limit: 1
    });
    lastPepite = getLastPepite(pepitesData);
});
</script>

<template>
    <main class="grow">
        <div v-if="props.collection === 'Pepites' && !showLandscapeCards && lastPepite">
            <CardMain 
                :item="lastPepite"
                :landscape="showLandscapeCards"
                class="card"
            />
        </div>

        <div v-else-if="items && items.length > 0">
            <section :class="{ 'landscape' : showLandscapeCards }"> 
                <CardMain
                    v-for="item in items" 
                    :key="item.key" 
                    :item="item" 
                    :landscape="showLandscapeCards"
                    class="card">

                    <component :is="contentComponent" :item="item" :landscape="showLandscapeCards" />
                </CardMain>
            </section>
        </div>
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
