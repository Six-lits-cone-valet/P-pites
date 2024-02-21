<script setup>
import { directusGetItems } from '@/directus/directus.config.js'

const requestParams = {
    fields: '*, *.*, business.city.name',
}

const { data: pepites } = await useAsyncData(
    'pepites',
    async () => {
        const items = await directusGetItems('Pepites', requestParams);

        return items;
    }
)

const showLandscapeCards = ref(false);

</script>

<template>
    <main class="grow" v-if="pepites.length">
        <h1>home page</h1>
        

<!-- 
TEMPORARY SECTION
This section will be transformed into a component in the next step.
-->
        <!-- temporary button for testing -->
        <button @click.stop.prevent="showLandscapeCards = !showLandscapeCards">click to change card format</button>
        
        <section v-for="pepite in pepites" :key="pepite.key" class="">
           
            <p>{{ showLandscapeCards }}</p>

            <CardMain :pepite="pepite" :landscape="showLandscapeCards"  />
        </section>
<!-- 
END OF TEMPORARY SECTION
-->

    </main>
</template>

<style>

</style>

<style scoped>

</style>