<script setup>
const { $directusBaseUrl, $logout } = useNuxtApp();
const userState = useUserState();
</script>

<template>
    <PageStructure showHeader >
        <template #header>
            <h1 class="mainWidth">votre profil</h1>    
        </template>

        <template #scrollableContent>
            <div class="mainWidth">
                <ul>
                    <li>
                        <img :src="`${$directusBaseUrl}/assets/${userState.avatarId}`" alt="">
                    </li>
                    <li> {{ userState.firstName }}</li>
                    <li> {{ userState.lastName }}</li>
                    <li> {{ userState.email }}</li>
                    <li> {{ userState.role }}</li>
                </ul>

                <div class="button pointer" @click="$logout">
                    Se déconnecter
                </div>
            </div>
        </template>
    </PageStructure>
</template>

<style scoped>
img {
    width: min(100%, 200px);
}
</style>