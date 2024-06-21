<script setup>
import icons from '@/assets/icons.json'
const { $directusBaseUrl, $logout } = useNuxtApp();
const userState = useUserState();

const links = [
    {
        id: 1,
        text: "Accueil",
        href: "/",
        icon: "home"
    },
    {
        id: 0,
        text: "Nos pépites",
        href: "/pepites",
        icon: "eatIn"
    }
]
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
                    
                <svg viewBox="0 -960 960 960" class="icon shrink0">
                    <path :d="icons.login.path" />
                </svg>   
            Se déconnecter
                </div>
            </div>
        </template>
    </PageStructure>
</template>

<style scoped>
.button {
    padding: 10px 5px;
    border-radius: 5px;
}
.button.connection {
    background-color: var(--theme-color-account);
}
img {
    width: min(100%, 200px);
}
</style>