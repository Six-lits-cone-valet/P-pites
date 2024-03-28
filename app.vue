<template>
  <div id="appBox" class="flex column justifyBetween">
    <NavBarMain />

    <main class="">
        <NuxtPage />
    </main>
    
    <FooterMain />
  </div>
</template>

<style scoped>
#appBox {
    width: min(100%, 1200px);
    min-height: 100vh;
    margin: auto;
}
</style>
