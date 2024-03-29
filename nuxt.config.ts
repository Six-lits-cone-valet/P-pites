// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '@/css/main.css',
    '@/css/utility.css'
  ],
  ssr: false
})
