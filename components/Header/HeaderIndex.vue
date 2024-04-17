<script setup>
import { directusGetItems } from '@/directus/directus.config.js';
const { $directusBaseUrl } = useNuxtApp();
const requestParams = {
        fields: [
            '*'
        ],
    }

const { data: images } = await useAsyncData(
    "headerImages",
    async () => {
        const items = await directusGetItems('Header_images', requestParams);

        const images = {

        };
        items.forEach((item) => {
            images[item.title] = item;
        });

        return images;
    }, {
        server: true 
    }
);
onMounted(() => {
    console.log(images.value);
});
</script>

<template>
    <div class="relative">
        <div class="frame r">
            <img :src="`${$directusBaseUrl}/assets/${images.hotdogsTruckGrand.file}`" alt="">
            <!-- <img :src="`${$directusBaseUrl}/assets/${images.hotdogsTruckPetit.file}`" alt=""> -->
        </div>

        <h1 class="fascinate-regular">
            Pépites
        </h1>

        <p v-for="img in images" :key="img.id">
            {{ img.title }}
        </p>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fascinate&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.fascinate-regular {
  font-family: "Fascinate", system-ui;
  font-weight: 400;
  font-style: normal;
}
.frame {
    width: 100%;
    height: 800px;
}
img {
    width: 392px;
    position: absolute;
    bottom: 30%;
    right: 20%;
}

h1 {
    width: 100%;
    font-size: clamp(3.5rem, 10vw, 9rem);
    line-height: 1em;
    text-align: center;
    position: absolute;
    top: 0px;
    left: 0; 
}
.introText {
    width: min(100%, 1200px);
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 600;
    line-height: 1.5em;
    padding: clamp(10px, 10vw, 150px) clamp(10px, 10vw, 150px);
    margin: auto;
}
</style>