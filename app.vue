<template>
    <NavBarMain />

    <div id="appContent" class="grow relative">
        <div class="scrollable absoluteFull">
            <main class="">
                <Toaster />
                <NuxtPage />

                <Connection />
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
.scrollable{
    overflow: scroll;
}

</style>
