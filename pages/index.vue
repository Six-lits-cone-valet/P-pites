<script setup>
import { CardContentPepite, CardContentCity } from '#components';

const requestParamsPepites = {
    fields: ['title', 'description', 'image', 'date_created'],
    sort: '-date_created',
    limit: 1,
};

const requestParamsCities = {
    fields: ['title', 'description', 'image'],
};
</script>

<template>
    <h1>Accueil</h1>

    <SectionCardViewer 
        collection="Pepites" 
        :requestParams="requestParamsPepites" 
        :contentComponent="CardContentPepite"/>

    <SectionCardViewer 
        collection="Cities" 
        :requestParams="requestParamsCities" 
        :contentComponent="CardContentCity"/>
</template>

<style>

</style>

<style scoped>

</style>
