<script setup>
import { CardContentPepite } from '#components';

const requestParamsPepites = {
    fields: '*.*.*'
}

</script>

<template>
    <h1>Accueil</h1>

    <SectionCardViewer 
        collection="Pepites" 
        :requestParams="requestParamsPepites" 
        :contentComponent="CardContentPepite"/>

</template>

<style>

</style>

<style scoped>

</style>