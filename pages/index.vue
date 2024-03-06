<script setup>
import { CardContentPepite, CardContentCity } from '#components';

const requestParamsLastPepite = {
    fields: [
        '*', 'category.text'
    ],
    // sort: '-date_created',
    limit: 1,
}

const requestParamsPepites = {
    fields: [
        '*', 'category.text'
    ],
    sort: '-date_created',
    limit: 4,
}

const requestParamsCities = {
    fields: [
        '*'
    ],
}

const requestParamsCategories = {
    fields: [
        '*'
    ],
}

</script>

<template>
    <h1>Accueil</h1>

    <!-- la dernière pépite -->
    <SectionCardViewer 
        requestId="lastPepite"
        class="r"
        collection="Pepites" 
        :requestParams="requestParamsLastPepite" 
        :contentComponent="CardContentPepite"
        landscape
    />

    <!-- toutes les pépites -->
    <SectionCardViewer 
        requestId="allPepites"
        collection="Pepites" 
        :requestParams="requestParamsPepites" 
        :contentComponent="CardContentPepite"
    />

    <!-- liste des villes -->
    <SectionCardViewer 
        requestId="allCities"
        collection="Cities" 
        :requestParams="requestParamsCities" 
        :contentComponent="CardContentCity"
    />

    <SectionCardViewer 
    requestId="allCategories"
    collection="Categories" 
    :requestParams="requestParamsCategories" 
    
/>
</template>

<style scoped>

</style>
