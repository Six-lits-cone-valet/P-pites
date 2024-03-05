<script setup>
import { CardContentPepite } from '#components';
import { CardContentCity } from '#components';
const requestParamsPepites = {
    fields: '*.*.*'
}
const requestParamsCities = {
    fields: [
        '*.*'
    ]
}

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