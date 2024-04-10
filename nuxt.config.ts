// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },

    css: [
        '@/css/main.css',
        '@/css/utility.css',
        '@/css/scroll-bar.css',
        '@/css/components/cards.css'
    ],
    ssr: false,
})