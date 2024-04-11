<script setup>
import icons from '@/assets/icons.json'
const { $directusBaseUrl, $directus, $createUserAccount } = useNuxtApp();

const userState = useUserState();

const links = [
    {
        id: 0,
        text: "Nos pépites",
        href: "/pepites",
        icon: "eatIn"
    }
]

const props = defineProps({
    currentUser: Object
})

const appState = useAppState();

function showConnection() {
    appState.value.showConnectionForm = true;
}

</script>

<template>
    <div class="flex column gap20 marTop50">
        <li class="button flex column alignCenter gap5" v-for="link in links" :key="link.id" :class="link.icon">
            <svg viewBox="0 -960 960 960" class="icon shrink0">
                <path :d="icons[link.icon].path" />
            </svg>

            <NuxtLink :to="link.href">
                {{ link.text }}
            </NuxtLink>
        </li>

        <li class="button connection pointer" v-if="!userState.userLoggedIn" @click="showConnection">
            <div class="flex column gap5 alignCenter" v-if="!appState.userLoggedIn">
                <svg viewBox="0 -960 960 960" class="icon shrink0">
                    <path :d="icons.login.path" />
                </svg>

                <span>
                    se connecter
                </span>
            </div>
        </li>

        <li class="button account" v-else>
            <NuxtLink class="flex column gap5 alignCenter" to="/profil">
                <div class="frame">
                    <svg viewBox="0 -960 960 960" class="shrink0 icon" v-if="!userState.avatarId">
                        <path :d="icons.account.path" />
                    </svg>

                    <img :src="`${$directusBaseUrl}/assets/${userState.avatarId}`" alt="" v-else>
                </div>

                <span class="">
                    {{ userState.firstName || 'Mon compte'}}
                </span>
            </NuxtLink>
        </li>
    </div>
</template>

<style scoped>
.button {
    padding: 10px 5px;
    border-radius: 5px;
}
.button.eatIn {
    background-color: var(--theme-color-pepite);
}
.button.groups {
    background-color: var(--theme-color-user);
}
.button.connection {
    background-color: var(--theme-color-account);
}
.button.account {
    background-color: var(--theme-color-user);
}
.frame {
    width: 30px;
    height: 30px;
}

.icon {
    width: 20px;
    height: 20px;
    fill: white;
}
img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid var(--gray-dimmed);
}
</style>