<script setup>
import icons from '@/assets/icons.json';
const { $diretusBaseUrl, $directus, $readItems } = useNuxtApp();

const userState = useUserState();
const appState = useAppState();

const props = defineProps({
    pepiteId: Number,
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
        const items = await $directus.request($readItems('Comments', requestParams));

        return items;
    }
);

</script>

<template>
    <section class="container flex column gap20">
        <div v-if="comments.length" class="comment" v-for="comment in comments" :key="comment.id">

            <div class="intro flex alignCenter gap10">
                <img class="avatar" :src="`${$directusBaseUrl}/assets/${comment.user_created.avatar}`" alt="avatar" />

                <p class="name"> {{ comment.user_created.first_name }} </p>

                <p class="date"> {{ new Date(comment.date_created).toLocaleDateString () }} </p>
            </div>
            
            
            <p class="marTop20">
                {{ comment.text }}
            </p>
        </div>

        <div v-if="!comments.length">
            <div class="invitation" v-if="userState.userLoggedIn">
                Postez un premier commentaire !
            </div>

            <div class="invitation flex alignCenter gap20" v-else>
                <span>
                    Connectez-vous pour poster un commentaire !
                </span>

                <button @click="appState.showConnectionForm = true">
                    <div class="flex column gap5 alignCenter" v-if="!appState.userLoggedIn">
                        <svg viewBox="0 -960 960 960" class="icon shrink0">
                            <path :d="icons.login.path" />
                        </svg>

                        <span>
                            se connecter
                        </span>
                    </div>
                </button>
            </div>
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
button {
    font-size: 0.8rem;
    background-color: var(--theme-color-account);
    padding: 10px;
    border-radius: 5px;
}
button svg {
    width: 20px;
    height: 20px;
    fill: white;
}
</style>