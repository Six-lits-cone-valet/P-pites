<template>
  <div id="appBox" class="flex column justifyBetween">
    <NavBarMain />

    <NuxtPage />
    
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
