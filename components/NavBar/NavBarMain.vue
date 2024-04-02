<script setup>
import icons from '@/assets/icons.json'

let currentUser = ref({});

const menuIsOpen = ref(false);

</script>

<template>
    <nav class="relative">
        <button class="menu flex alignCenter pointer relative" @click="menuIsOpen = !menuIsOpen">
            <svg viewBox="0 -960 960 960" class="icon shrink0">
                <path :d="icons.menu.path" />
            </svg>

            <svg viewBox="0 -960 960 960" class="arrow shrink0">
                <path :d="menuIsOpen ? icons.arrowLeft.path : icons.arrowRight.path" />
            </svg>
        </button>

        <ul class="contentBox column" :class="{ 'active' : menuIsOpen }">
            <NavBarLogo />

            <NavBarLinks />
        </ul>
    </nav>
</template>

<style scoped>
nav {
    font-size: 13.5px;
    /* font-style: italic; */
    font-weight: 600;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
    
}
button.menu {
    background-color: transparent;
    border: none;
}
.icon {
    width: 30px;
    height: 30px;
    fill: white;
}
.arrow {
    width: 20px;
    height: 20px;
    fill: white;
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translateY(-50%);
}
.contentBox {
    background-color: var(--dark);
    padding: 10px;
    display: flex;

}
@media (min-width: 950px) {
    nav {
        height: 100vh;
    }
}
@media (max-width: 949px) {
    nav {
        display: flex;
        flex-direction: row;
    }
        
    .contentBox {
        position: absolute;
        top: 100%;
        left: 0;
        display: none;
    }
    .contentBox.active {
        display: flex;
    }
}
</style>
