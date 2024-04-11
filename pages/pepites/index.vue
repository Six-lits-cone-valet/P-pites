<script setup>
import { directusGetItems } from '@/directus/directus.config.js';

const requestParamsPepites = {
    fields: [
        '*', 'category.text', 'business.*', 'business.city.*', 'likes.*'
    ],
    sort: '-date_created',
    limit: 25,
}

const { data: pepites, refresh } = await useAsyncData(
    "pepites",
    async () => {
        const items = await directusGetItems('Pepites', requestParamsPepites);

        return items;
    },
    { server: true }
);
</script>


<template>

    <h1 class="marTop50">Les pépites</h1>

    <section class="pepites flex marTop50 w100">
        <div class="filterBox">
            <p class="r">filter 1</p>

            <p class="r">filter 2</p>
        </div>

        <div class="cards flex wrap justifyEvenly">
            <CardMain 
            v-for="pepite in pepites" :key="pepite.id"
            class="Pepites card"
            :item="pepite" 
            likeButton
            @refresh="refresh()"
        >
                <CardContentPepite :item="pepite" />
            </CardMain>
        </div>
    </section>

</template>

<style scoped>
.filterBox {
    align-self: flex-start;
    flex-shrink: 0;
    padding: 10px;
    width: 200px;
    background-color: var(--darker);
}
section {
    row-gap: 50px;
}
.cards {
    flex-grow: 1;
    max-width: 100%;
    row-gap: 50px;
    border-left: 2px solid var(--gray-dimmed);
}
.card {
    margin: 5px;
    
}

@media (max-width: 930px) {
    .filterBox {
        position: fixed;
        top: 0;
        left: 0;
    }
}
@media (max-width: 350px) {
    .filterBox {
        width: 100vw;
    }
}
</style>