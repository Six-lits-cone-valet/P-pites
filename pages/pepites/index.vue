<script setup>
import icons from '@/assets/icons.json';

const { $directus, $readItems } = useNuxtApp();

const pepitesFilterState = usePepitesFilterState();

const requestParams = computed(() => {
    return {
        fields: [
            '*', 
            'category.*', 
            'business.*', 
            'business.city.*', 
            'likes.*', 
            'type.*',
            'filter_type.*',
            'filter_size.*',
            'filter_options.Pepites_filters_id.*'
        ],
        sort: '-date_created',
        limit: 25,
        filter: {
            _and: [
                pepitesFilterState.value.type,
                pepitesFilterState.value.category,
                pepitesFilterState.value.size,
                pepitesFilterState.value.options
            ]
        }
    }
})

const { data: pepites, refresh } = await useAsyncData(
    "pepitesPage",
    async () => {
        const items = await $directus.request($readItems('Pepites', requestParams.value));

        return items;
    }, {
        server: true 
    }
);

const showFilters = ref(false);
function toggleFilters() {
    showFilters.value = !showFilters.value;
}

</script>


<template>

    <PageStructure :showHeader="true">
        <template #header>
            <h1 class="marTop50 mainWidth">Les pépites</h1>

            <div class="bar flex justifyEnd mainWidth">
                <button class="filterButton pointer" @click.prevent="toggleFilters">
                    <svg class="icon tune" viewBox="0 -960 960 960">
                        <path :d="icons.tune.path"/>
                    </svg>
                </button>

                <div class="filterBox flex column gap10" :class="{ 'active' : showFilters}">
                    <div class="flex justifyEnd">
                        <svg class="icon" viewBox="0 -960 960 960"  @click.prevent="toggleFilters">
                            <path :d="icons.close.path"/>
                        </svg>
                    </div>
                    <FiltersPepitesType @refresh="refresh" />
                    <FiltersPepitesSize @refresh="refresh" />
                    <FiltersPepitesOptions @refresh="refresh" />
                    <FiltersPepitesCategory @refresh="refresh" />
                </div>
            </div>
        </template>

        <template #scrollableContent>
            <section class="pepites marTop50 w100">
                <div class="cards flex wrap justifyEvenly alignStart">
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
    </PageStructure>
</template>

<style scoped>
.filterBox {
    height: 100vh;
    align-self: flex-start;
    flex-shrink: 0;
    padding: 10px;
    width: 200px;
    background-color: var(--darker);
    position: fixed;
    top: 0;
    right: 0;
    overflow: scroll;
    z-index: 100000;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
}
.filterBox.active {
    transform: translateX(0%);
}
.icon {
    width: 32px;
    height: 32px;
    fill: var(--gray-light);
    cursor: pointer;
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

@media (max-width: 350px) {
    .filterBox {
        width: 100vw;
    }
}
</style>