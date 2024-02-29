<script setup>
const links = [
    {
        id: 0,
        text: "Les pépites",
        href: "/pepites"
    },
    {
        id: 1,
        text: "Accueil",
        href: "/index"
    },
]
</script>

<template>
    <div class="flex gap20">
        <li v-for="link in links" :key="link.id">
            <NuxtLink :to="link.href">
                {{ link.text }}
            </NuxtLink>
        </li>
    </div>
</template>