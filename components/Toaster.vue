<script setup>
const appState = useAppState();
</script>

<template>
    <p class="toaster" :class="[appState.toaster.type, {'active' : appState.toaster.show}]">
        {{ appState.toaster.message }}
    </p>
</template>

<style scoped>

.toaster {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-200%);
    padding: 15px 30px;
    border-radius: 10px;
    /* color: white; */
    background-color: var(--success);
    z-index: 1000;
    transition: 300ms ease;
}
.toaster.active {
    transform: translateX(-50%) translateY(0);
}
.toaster.error {
    background-color: var(--danger);
}
</style>