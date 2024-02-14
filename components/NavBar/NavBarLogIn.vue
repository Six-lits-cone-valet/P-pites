<script>
const links = [
    {
        id: 0,
        text: 'Inscription',
        href: '/inscription'
    },
    {
        id: 1,
        text: 'Connexion',
        href: '/connexion'
    }
]
</script>

<template>
    <div>
        <li v-for="link in links" :key="link.id">
            <NuxtLink :to="link.href">
                {{ link.text }}
            </NuxtLink>
        </li>
    </div>
</template>