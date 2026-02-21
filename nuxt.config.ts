export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  // Disable devtools in production
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },

  // Vite optimizations
  vite: {
    build: {
      chunkSizeWarningLimit: 300,
      rollupOptions: {
        output: {
          manualChunks: {
            'pinia': ['pinia'],
          },
        },
      },
    },
    css: {
      devSourcemap: false,
    },
  },

  // Nitro compression
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  app: {
    head: {
      title: 'Cungpruy — Fresh From The Farm',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Farm-fresh vegetables delivered to your door.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap'
        },
      ],
    },
  },
})