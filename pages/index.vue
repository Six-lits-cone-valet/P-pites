<script setup>
import { CardContentPepite, CardContentCity, CardContentCategories } from '#components';

const requestParamsLastPepite = {
    fields: [
        '*', 'category.text', 'business.*', 'business.city.*', 'likes.*'
    ],
    sort: '-date_created',
    limit: 1,
}

const requestParamsPepites = {
    fields: [
        '*', 'category.text', 'business.*', 'business.city.*', 'likes.*'
    ],
    sort: '-date_created',
    limit: 4,
    offset: 1,
}

const requestParamsCities = {
    fields: [
        '*', 'description', 'population.*', 'specialites.*', 'produitsLocaux.*', 'evenementsCulinaires.*'
    ],
}

const requestParamsCategories = {
    fields: [
        '*'
    ],
}

</script>

<template>
    <PageStructure showHeader>
        <template #header>
            <SectionWelcome  />
        </template>

        <template #scrollableContent>
    <!-- la dernière pépite -->
            <SectionCardViewer 
                title="Dernière pépite"
                requestId="lastPepite"
                collection="Pepites" 
                :requestParams="requestParamsLastPepite" 
                :contentComponent="CardContentPepite"
                landscape
                likeButton
            />

            <!-- toutes les pépites -->
            <SectionCardViewer 
                title="Toutes les pépites"
                requestId="allPepites"
                collection="Pepites" 
                :requestParams="requestParamsPepites" 
                :contentComponent="CardContentPepite"
                borders
                likeButton
            />

            <!-- liste des villes -->
            <SectionCardViewer 
                title="Les Villes"
                requestId="allCities"
                collection="Cities" 
                :requestParams="requestParamsCities" 
                :contentComponent="CardContentCity"
                borders
            />


            <!-- les categories -->
            <SectionCardViewer 
                title="Les Catégories"
                requestId="allCategories"
                collection="Categories" 
                :requestParams="requestParamsCategories" 
                :contentComponent="CardContentCategories"
                borders
            />
        </template>
    </PageStructure>
</template>

<style scoped>

</style>
