<!-- 
    Container for both card sizes.  
    Here are defined the global card styles like border, border-radius and box-shadow.
    All the hover effects are defined here, so they are applied to both card sizes.
 -->

<script setup>
import { directusBaseUrl } from '@/directus/directus.config.js'
const { $directus, $createItem, $deleteItem } = useNuxtApp();
const userState = useUserState();

const props = defineProps({
    item: Object,
    landscape: {
        type: Boolean,
        default: false
    },
    likeButton: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['refresh']);

async function updateItem(collection, item) {
    const response = await $directus.request($updateItem(
        collection,
        item.id,
        item
    ))
}

async function createLike() {
    try {
        const response = await $directus.request($createItem(
            'Likes',
            {
                user: {
                    id: userState.value.id
                },
                pepite: {
                    id: props.item.id
                }
            }
        ))

        if(response ) emit('refresh');

    } catch(error) {
        console.error(error);
    }
}

async function deleteLike(likeId) {
    try {
        const response = $directus.request($deleteItem('Likes', props.item.likes.find(like => like.user === userState.value.id).id))

        if(response ) emit('refresh');

    } catch(error) {
        console.error(error);
    }
}

</script>

<template>
    <NuxtLink :to="`/pepites/${item.slug}`" :class="[ landscape ? 'landscape' : 'portrait' ]" class="card flex pointer">
        <div class="frame relative">
            <picture>
                <!-- should be a .webp format -->
                <source :srcset="`${directusBaseUrl}assets/${item.image}?key=card-image`">
                <!-- should be a .jpg format -->
                <img class="objectFitCover" :src="`${directusBaseUrl}assets/${item.image}?key=card-image`" alt="">
            </picture>

            <CardLikeButton 
                v-if="likeButton" 
                :likes="item.likes.length" 
                :liked="props.item.likes.some(like => like.user === userState.id)"
                @createLike="createLike"
                @deleteLike="deleteLike"
            />
        </div>
        <slot>
            

        </slot>
    </NuxtLink>
</template>

<style scoped>

.card {
    flex-shrink: 0;
    background-color: var(--dark);
    border-radius: 10px;
    box-shadow: 0px 1px 10px rgb(0, 15, 24);
    overflow: hidden;
}
.card:hover {
    outline: 3px solid var(--gray-dimmed);
    filter: brightness(1.1);
}
.portrait {
    width: min(300px, 100%);
    flex-direction: column;
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