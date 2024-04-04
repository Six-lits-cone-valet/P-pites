<script setup>
import { directusGetItems, directusBaseUrl } from '@/directus/directus.config.js';

const route = useRoute();

const requestParams = {
    fields: [
        '*', 
        "photos.id", 
        "photos.directus_files_id",
        'category.text', 
        'business.*', 
        'business.city.*'
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
    <div v-if="pepite" class="container flex">
        <div class="images">
            <img 
                :src="`${directusBaseUrl}assets/${pepite.image}`" 
                alt="photo" 
            />

            <img 
                v-for="photo in pepite.photos" :key="photo.id" 
                :src="`${directusBaseUrl}assets/${photo.directus_files_id}`" 
                alt="photo" 
            />
        </div>

        <div class="box">
            <CardContentPepite :item="pepite" landscape fullText />
        </div>
    </div>
</template>

<style scoped>
.images {
    flex-shrink: 0;
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

img {
    width: 350px;
}

@media (max-width: 949px) {
    .container {
        flex-direction: column;
    }

    .images {
        flex-direction: row;
    }

    img {
        width: auto;
        height: 350px;
    }
}
</style>