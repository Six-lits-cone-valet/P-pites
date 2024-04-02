<script setup>
import icons from '@/assets/icons.json'

const links = [
    {
        id: 0,
        text: "Nos pépites",
        href: "/pepites",
        icon: "eatIn"
    },
    {
        id: 1,
        text: "Nos créateurs",
        href: "/createurs",
        icon: "groups"
    }
]

const appState = useAppState();

const props = defineProps({
    currentUser: Object
})

async function deconnectUser() {
    appState.value.userLoggedIn = false;
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

        <li class="button account">
            <NuxtLink class="flex column gap5 alignCenter" to="/connexion" v-if="!appState.userLoggedIn">
                <svg viewBox="0 -960 960 960" class="icon shrink0">
                    <path :d="icons.login.path" />
                </svg>

                <span>
                    se connecter
                </span>
            </NuxtLink>
        </li>

        <li class="button account">
            <NuxtLink class="flex column gap5 alignCenter" to="/connexion" v-if="!appState.userLoggedIn">
                <svg viewBox="0 -960 960 960" class="icon shrink0">
                    <path :d="icons.account.path" />
                </svg>

                <span>
                    Votre compte
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
.button.account {
    background-color: var(--theme-color-account);
}
.icon {
    width: 20px;
    height: 20px;
    fill: white;
}
</style>