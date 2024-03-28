<!-- 
    Container for both card sizes.  
    Here are defined the global card styles like border, border-radius and box-shadow.
    All the hover effects are defined here, so they are applied to both card sizes.
 -->

<script setup>
import { directusBaseUrl } from '@/directus/directus.config.js'

const props = defineProps({
    item: Object,
    landscape: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <article :class="[landscape ? 'landscape' : 'portrait']">
        <div class="frame">
            <picture>
                <!-- should be a .webp format -->
                <source :srcset="`${directusBaseUrl}assets/${item.image}?key=card-image`">
                <!-- should be a .jpg format -->
                <img class="objectFitCover" :src="`${directusBaseUrl}assets/${item.image}?key=card-image`" alt="">
            </picture>
        </div>

        <slot>

        </slot>
    </article>
</template>

<style scoped>

article {
    flex-shrink: 0;
    background-color: var(--dark);
    border: 2px solid var(--gray-dimmed);
    border-radius: 10px;
    box-shadow: 0px 1px 10px rgb(0, 15, 24);
    overflow: hidden;
}
.portrait {
    width: min(300px, 100%);
}
.landscape {
    width: min(900px, 100%);
    background-color: var(--dark);
    display: flex;
    margin: auto;
}

.frame {
    flex-shrink: 0;
}
.portrait .frame {
    width: 100%;
    height: 175px;
}
.landscape .frame{
    width: min(300px, 100%);
}
@media (max-width: 660px) {
    .landscape {
        flex-direction: column;
    }
    .landscape .frame{
        width: 100%;
        aspect-ratio: 16/9;
    }

}
</style>