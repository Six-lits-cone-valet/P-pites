<script setup>
const { $directus, $readItems } = useNuxtApp();


const props = defineProps({
    title: String,
    requestId: String,
    collection: String,
    requestParams: Object,
    contentComponent: Object,
    landscape: {
        type: Boolean,
        default: false
    },
    borders: {
        type: Boolean,
        default: false
    },
    likeButton: {
        type: Boolean,
        default: false
    }
});

const { data: items, refresh } = await useAsyncData(
    props.requestId,
    async () => {
        const items = await $directus.request($readItems(props.collection, props.requestParams));

        return items;
    },
    { server: true }
);

</script>

<template>
    <section v-if="items"
            class=""
            :class="[{ 'landscapeCards' : landscape }, collection, { 'showBorders' : borders } ]">

            <h1 class="sectionTitle">
                {{ title }}
            </h1>

            <div class="cards">
                <div class="scroller flex gap20 marTop20">
                    <CardMain 
                        v-for="item in items" :key="item.key" 
                        :item="item" 
                        :landscape="landscape" 
                        :likeButton="likeButton"
                        @refresh="refresh()"
                    >

                        <component v-if="contentComponent" :is="contentComponent" :item="item" :landscape="landscape" />
                    </CardMain>
                </div>
            </div>
        </section>

</template>

<style scoped>
.sectionTitle{
    padding: clamp(5px, 1.5vw, 20px);
}

section {
    margin-bottom: min(50px, 4vw);
    
}
section.landscapeCards {
    flex-direction: column;
    overflow-x: hidden;
}


.Categories {
    --color: var(--theme-color-category);
}

.Cities {
    --color: var(--theme-color-city);
}

.Pepites {
    --color: var(--theme-color-pepite);
}

.cards {
    padding: clamp(5px, 1.5vw, 20px);
       
}
.showBorders .cards{
    border-width: 5px;
    border-radius: 30px;
    border-style: double;
    border-color: var(--color);
    box-shadow: inset 0 0 50px rgb(0, 0, 0);
}
.scroller {
    overflow-x: scroll; 
    padding: 5px 0 20px 20px;
}
</style>
