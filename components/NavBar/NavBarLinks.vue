<script setup>
const links = [
    {
        id: 0,
        text: "Nos pépites",
        href: "/pepites"
    },
    {
        id: 1,
        text: "Nos créateurs",
        href: "/createurs"
    },
    {
        id: 2,
        text: "Votre compte",
        href: "/UsersCompte"
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