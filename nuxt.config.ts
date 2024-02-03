// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      title: 'Ely Frank',
      titleTemplate: 'Ely Frank | %s',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Portfólio'
        }
      ]
    }
  },
  build: {
    transpile: ['vuetify']
  },
})
