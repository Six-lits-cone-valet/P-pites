<script setup>
const { $directusBaseUrl, $directus, $readItems } = useNuxtApp();

const props = defineProps({
    activeAvatarId: Number
});

const { data: avatars, refresh } = await useAsyncData(
    "avatars",
    async () => {
        const items = await $directus.request($readItems('Avatars'));

        return items;
    },
    { server: true }
);

</script>

<template>
    <div class="frame flex w100 gap10 pad10 marTop20">
        <img 
        v-for="avatar in avatars" :key="avatar.id" 
        :class="{ 'active' : avatar.id === activeAvatarId }"
        :src="`${$directusBaseUrl}/assets/${avatar.image}`" 
        alt="" 
        @click="$emit('selection', avatar.id)">
    </div>
</template>

<style scoped>
.frame {
    overflow: scroll;
}
img {
    width: 50px;
}
.active {
    outline: 4px solid darkred;
}
</style>