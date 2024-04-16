<script setup>
defineProps({
    showHeader: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="container">
        <div class="headerBox" v-if="showHeader">
            <slot name="header">

            </slot>
        </div>

        <div id="scrollable-content" class="mainWidth">
            <slot name="scrollableContent">

            </slot>
        </div>
    </div>
</template>

<style scoped>
.headerBox {
    width: 100%;
}

.mainWidth {
    width: min(100%, 1200px);
    padding: 5px;
    margin: 50px auto;
}
</style>