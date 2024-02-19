<script setup>
const links = [
    {
        id: 0,
        text: "Les pépites",
        href: "/pepites"
    },
    {
        id: 1,
        text: "Utilisateurs",
        href: "/utilisateurs"
    }
]

</script>

<template>
    <div class="flex gap20 alignCenter">
        <li v-for="link in links" :key="link.id">
            <NuxtLink :to="link.href">
                {{ link.text }}
            </NuxtLink>
        </li>
    </div>
</template>