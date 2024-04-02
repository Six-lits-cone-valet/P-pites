<template id="nuxt">
    <NavBarMain />

    <div id="appContent" class="grow relative">
        <div class="absoluteFull">
            <main class="w100">
                <NuxtPage />
            </main>

            <FooterMain />
        </div>
    </div>
</template>

<style>
#__nuxt {
    width: 100%;
    height: 100%;
    display: flex;
}

@media (min-width: 950px) {
    #__nuxt {
        flex-direction: row;
    }
}

@media (max-width: 949px) {
    #__nuxt {
        flex-direction: column;
    }
}
</style>

<style scoped>
#appContent .absoluteFull{
    overflow: scroll;
}
main {
    width: min(100%, 1200px);
    margin: auto;
    padding: 20px;
    
}
</style>
