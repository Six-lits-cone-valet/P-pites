<script setup>
import { directusGetItems } from '@/directus/directus.config.js';



const pepitesFilterState = usePepitesFilterState();

const requestParams = computed(() => {
    return {
        fields: [
            '*', 'category.text', 'business.*', 'business.city.*', 'likes.*', 'type.*'
        ],
        sort: '-date_created',
        limit: 25,
        filter: {
            _and: [
                pepitesFilterState.value.type
            ]
        }
    }
})

const { data: pepites, refresh } = await useAsyncData(
    "pepitesPage",
    async () => {
        const items = await directusGetItems('Pepites', requestParams.value);

        return items;
    }, {
        server: true 
    }
);
const filters = ref({});

const keys = [
    'city',
    'business',
    'type',
    'category',
    'size',
    'options'
]

onMounted(() => {
    const array = pepites.value;
    
    array.forEach(obj => {
        obj.city = obj.business.city.name;
        keys.forEach(key => {
            if (!filters.value[key]) {
                filters.value[key] = [];
            }
            if (obj[key]) {
                const objStr = JSON.stringify(obj[key]);
                if (!filters.value[key].map(JSON.stringify).includes(objStr)) {
                    filters.value[key].push(obj[key]);
                }
            }
        })
    })
    console.log(filters.value);
})

</script>


<template>

    <h1 class="marTop50">Les pépites</h1>

    <section class="pepites flex marTop50 w100">
        <div class="filterBox flex column gap10">
            <FiltersPepitesType @refresh="refresh" :filters="filters.type" />
        </div>

        <div class="cards flex wrap justifyEvenly">
            <CardMain 
            v-for="pepite in pepites" :key="pepite.id"
            class="Pepites card"
            :item="pepite" 
            likeButton
            @refresh="refresh()"
        >
                <CardContentPepite :item="pepite" />
            </CardMain>
        </div>
    </section>

</template>

<style scoped>
.filterBox {
    align-self: flex-start;
    flex-shrink: 0;
    padding: 10px;
    width: 200px;
    background-color: var(--darker);
}
section {
    row-gap: 50px;
}
.cards {
    flex-grow: 1;
    max-width: 100%;
    row-gap: 50px;
    border-left: 2px solid var(--gray-dimmed);
}
.card {
    margin: 5px;
    
}

@media (max-width: 930px) {
    .filterBox {
        position: fixed;
        top: 0;
        left: 0;
    }
}
@media (max-width: 350px) {
    .filterBox {
        width: 100vw;
    }
}
</style>