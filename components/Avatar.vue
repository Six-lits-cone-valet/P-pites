<script setup>
const { $directusBaseUrl, $directus, $readItem } = useNuxtApp();
const userState = useUserState();

const queryParams = {
    fields: [
        "id",
        "image"
    ]
};

const { data: avatar, refresh } = await useAsyncData(
    `avatar-${userState.value.id}`,
    async () => {
        const item = await $directus.request($readItem('Avatars', userState.value.avatarFileId, queryParams));

        return item;
    },
    { server: true }
);

</script>

<template>
    <img :src="`${$directusBaseUrl}/assets/${avatar.image}`" alt="avatar" >
</template>

<style scoped>

img {
    width: 100%;
}
</style>