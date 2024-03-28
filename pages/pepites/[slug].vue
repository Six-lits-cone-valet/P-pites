<script setup>
import { directusGetItems } from '@/directus/directus.config.js';

const route = useRoute();

const requestParams = {
    fields: [
        '*', 'category.text', 'business.*', 'business.city.*'
    ],
    filter: {
        slug: route.params.slug
    }
}

const { data: pepite } = await useAsyncData(
    route.params.slug,
    async () => {
        const items = await directusGetItems('Pepites', requestParams);

        return items[0];
    },
    { server: true }
);
</script>

<template>
    <div v-if="pepite">
        <h1>{{ pepite.title }}</h1>

        <p>{{ pepite.business.name }}</p>

        <p>{{ pepite.business.city.name }}</p>

        <p>{{  pepite.description }}</p>
    </div>
</template>