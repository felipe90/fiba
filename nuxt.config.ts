// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/tailwind.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Fundación Bellas Artes Integra | El ADN del Arte',
      titleTemplate: '%s · FIBA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Fundación Bellas Artes Integra (FIBA) - Transformando vidas y comunidades a través de la educación artística, inclusión cultural y rescate patrimonial en Panamá.'
        },
        { name: 'theme-color', content: '#3D0C11' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Fundación Bellas Artes Integra' },
        { property: 'og:title', content: 'Fundación Bellas Artes Integra | El ADN del Arte' },
        {
          property: 'og:description',
          content: 'Transformando comunidades a través de la educación artística y el rescate del patrimonio cultural en Panamá.'
        },
        { property: 'og:image', content: '/images/og-fiba-cover.svg' },
        { property: 'og:locale', content: 'es_PA' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Fundación Bellas Artes Integra | El ADN del Arte' },
        {
          name: 'twitter:description',
          content: 'Transformando comunidades a través de la educación artística y el rescate del patrimonio cultural en Panamá.'
        },
        { name: 'twitter:image', content: '/images/og-fiba-cover.svg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo-fiba.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Domine:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts'
  }
})
