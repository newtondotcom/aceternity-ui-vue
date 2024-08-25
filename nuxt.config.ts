// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/mdc'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  ssr: false,
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
        level: 2,
    },
    viewer: false,
},
})