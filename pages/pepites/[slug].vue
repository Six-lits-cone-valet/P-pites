<script setup>
const { $directusBaseUrl, $directus, $readItems } = useNuxtApp();

const route = useRoute();

const requestParams = {
    fields: [
        '*', 
        "photos.id", 
        "photos.directus_files_id",
        'category.text', 
        'business.*', 
        'business.city.*',
        'Likes.*',
        'comments.*',
        'comments.user.first_name',
        'comments.user.avatar',
    ],
    filter: {
        slug: route.params.slug
    }
}

const { data: pepite, refresh } = await useAsyncData(
    route.params.slug,
    async () => {
        const items = await $directus.request($readItems('Pepites', requestParams));

        return items[0];
    },
    { server: true }
);

</script>

<template>
    <PageStructure showHeader v-if="pepite">
        <template #header>
            <h1 class="mainWidth">
                {{ pepite.title }}
            </h1>
        </template>

        <template #scrollableContent>
            <div class="container flex marTop100">
                <div class="images">
                    <img 
                        :src="`${$directusBaseUrl}/assets/${pepite.image}`" 
                        alt="photo" 
                    />

                    <img 
                        v-for="photo in pepite.photos" :key="photo.id" 
                        :src="`${$directusBaseUrl}/assets/${photo.directus_files_id}`" 
                        alt="photo" 
                    />
                </div>

                <div class="box marTop50 grow">
                    <CardContentPepite :item="pepite" landscape fullText />

                    <div class="commentBox">
                        <SectionComments 
                            :pepiteId="pepite.id"
                        />
                    </div>
                </div>
            </div>  
        </template>
    </PageStructure>
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