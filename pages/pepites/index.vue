<script setup>
import { directusGetItems } from '@/directus/directus.config.js';

const requestParamsPepites = {
    fields: [
        '*', 'category.text', 'business.*', 'business.city.*'
    ],
    sort: '-date_created',
    limit: 25,
}

const { data: pepites } = await useAsyncData(
    "pepites",
    async () => {
        const items = await directusGetItems(props.collection, props.requestParams);

        return items;
    },
    { server: true }
);
</script>


<template>

    <h1>Les pépites</h1>

    <section class="pepites">
        <CardMain v-for="pepite in pepites" :item="pepite" />
    </section>

</template>

<style scoped>

</style>