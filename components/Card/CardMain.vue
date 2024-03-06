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
                <source :srcset="`${directusBaseUrl}assets/${item.image}`">
                <!-- should be a .jpg format -->
                <img class="objectFitCover" :src="`${directusBaseUrl}assets/${item.image}`" alt="">
            </picture>
        </div>

        <slot>

        </slot>
    </article>
</template>

<style scoped>

article {
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    margin: auto;
}
.portrait {
    width: min(300px, 100%);
}
.landscape {
    width: 100%;
    display: flex;
}
.frame {
    flex-shrink: 0;
}
.portrait .frame {
    width: 100%;
    height: 200px;
}
.landscape .frame{
    width: min(300px, 100%);
     height: 200px;
}

</style>