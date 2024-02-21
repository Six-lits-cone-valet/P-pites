<script setup>


const props = defineProps({
    pepite: Object,
    landscape: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <div class="contentBox flex grow justifyEnd" :class="[landscape ? landscapeFormat : portraitFormat]" v-if="pepite">
        <div class="grow flex column justifyBetween">
            <h1>{{ pepite.title }}</h1>

            <p v-if="pepite.category">{{ pepite.category.text }}</p>

            <p>{{ pepite.city.name }}</p>

            <p v-if="landscape">{{ pepite.description }}</p>

            <div class="flex gap5">
                <p v-for="option in pepite.options" :key="option.id">{{ option }}</p>
            </div>
        </div>

        <div class="iconBox flex column gap10">
            <!-- 
                this section will hold icons for properties like 'diet' and 'size'
                -->
            <p class="iconExample"></p>

            <p class="iconExample"></p>

            <p class="iconExample"></p>
        </div>
    </div>
</template>

<style scoped>

.iconBox {
    padding: 5px;
}
.iconExample {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
}
</style>