import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'

export default defineNuxtPlugin((nuxtApp) => {
  const systemTheme = {
    dark: false,
    colors: {
      background: '#f5f5f5'
    }
  }

  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    },
    blueprint: md3,
    theme: {
      defaultTheme: 'systemTheme',
      themes: {
        systemTheme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
