<script setup>
import { directusGetItems } from '@/directus/directus.config';
const { $diretusBaseUrl } = useNuxtApp();

const props = defineProps({
    pepiteId: String,
})

const requestParams = {
    fields: [
        '*', 
        'user_created.first_name',
        'user_created.avatar',
    ],
    filter: {
        pepite: {
            _eq: props.pepiteId
        }
    },
    sort: '-date_created'
}

const { data: comments, refresh } = await useAsyncData(
    `comments-${props.pepiteId}`,
    async () => {
        const items = await directusGetItems('Comments', requestParams);

        return items;
    }
);

</script>

<template>
    <section class="container flex column gap20">
        <div class="comment" v-for="comment in comments" :key="comment.id">

            <div class="intro flex alignCenter gap10">
                <img class="avatar" :src="`${$directusBaseUrl}/assets/${comment.user_created.avatar}`" alt="avatar" />

                <p class="name"> {{ comment.user_created.first_name }} </p>

                <p class="date"> {{ new Date(comment.date_created).toLocaleDateString () }} </p>
            </div>
            
            
            <p class="marTop20">
                {{ comment.text }}
            </p>
        </div>

        <div class="invitation" v-if="!comments.length">
            Postez un premier commentaire !
        </div>

        <SectionCommentsCreateComment :pepiteId="pepiteId" @refresh="refresh" />
    </section>
</template>

<style scoped>
.container {
    width: min(100%, 600px);
    padding: 30px;
}
.comment,
.invitation {
    background-color: var(--gray-dimmed);
    padding: 20px;
}
.invitation {
    font-weight: 700;
}
.avatar {
    width: 35px;
    border-radius: 50%;
    border: 1px solid var(--gray-dimmed);
}
.name {
    font-size: 0.9rem;
    font-weight: 700;
}
.date {
    font-size: 0.8rem;
    font-weight: 600;
}
</style>