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
    <PageStructure showHeader>
        <template #header>
            <h1 class="mainWidth">Votre profil</h1>    
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

                <div class="button logout pointer" @click="$logout">
                    <div class="flex column gap5 alignCenter">
                        <svg viewBox="0 -960 960 960" class="icon shrink0">
                            <path :d="icons.logout.path" />
                        </svg>   
                        <span>Se déconnecter</span>
                    </div>
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
.button.logout {
    background-color: var(--theme-color-account);
}
.icon {
    width: 20px;
    height: 20px;
    fill: white;
}
.flex {
    display: flex;
}
.column {
    flex-direction: column;
}
.gap5 {
    gap: 5px;
}
.alignCenter {
    align-items: center;
}
.pointer {
    cursor: pointer;
}
img {
    width: min(100%, 200px);
}
</style>
