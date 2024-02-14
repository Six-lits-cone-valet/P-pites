<script setup>
const links = [
    {
        id: 0,
        text: "Les pépites"
    },
    {
        id: 1,
        text: "Utilisateurs"
    }
]

</script>

<template>
    <div class="flex">
        <li v-for="link in links" :key="link.id">
            <NuxtLink to="/pepites">
                {{ link.text }}
            </NuxtLink>
        </li>
    </div>
</template>