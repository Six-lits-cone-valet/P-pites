<script setup>
const links = [
    {
        id: 0,
        text: "About",
        href: "/about"
        
    },
    {
        id: 1,
        text: "Mentions légales",
        href: "/mentionslegales"
    },
    {
        id: 2,
        text: "Contact",
        href: "/contact"
    }
]

</script>

<template>

<nav>
    <ul>
        <li>
            <NuxtLink to="/" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40" height="40">
                <!-- Pizza slice (triangle) -->
                    <polygon points="25,5 45,45 5,45" fill="orange" />

                    <!-- Star cutout in pizza slice -->
                    <polygon points="25,15 30,30 45,30 35,40 40,55 25,45 10,55 15,40 5,30 20,30" fill="white" />

                    <!-- Pizza toppings (circles) -->
                    <circle cx="20" cy="35" r="2" fill="red" />
                    <circle cx="30" cy="35" r="2" fill="red" />
                    <circle cx="25" cy="25" r="2" fill="red" />
                </svg>

                
            </NuxtLink>
        </li>
        <div class="rightBox">
            <li v-for="link in links" :key="link.id">
                <NuxtLink :to="link.href">
                    {{ link.text }}
                </NuxtLink>
            </li>
        </div>
    </ul>
</nav>
</template>

<style scoped>
ul{
    padding:  40px 20px;
    display: flex; /* Utilisation de la mise en page flexbox */
    justify-content: center; /* Alignement vertical au centre sur l'axe principal */
    
}
.rightBox{
display: flex;
flex-direction: column;
}
</style>