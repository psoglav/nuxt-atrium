import { resolve } from 'path'

import ru from './i18n/locales/ru'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    images: resolve(__dirname, './assets/images'),
    style: resolve(__dirname, './assets/style')
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title:
        'ООО «Атриум» - Буровые станки Furukawa, Буровой инструмент ATRIUM, запасные части.',
      meta: [
        {
          name: 'description',
          content:
            'Продажа и сервис буровых станков для бурения взрывных скважин, RC бурения, подземных буровых станков; Продажа бурового инструмента: Пневмоударники, Буровые коронки, буровые трубы, буровые штанги, адаптеры, переходники, долота, хвостовики. Запасные части  для буровых станков Epiroc, Sandvik, Furukawa, Montabert и др.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/svg/favicon.svg' }
      ]
    }
  },
  dir: {
    pages: 'routes'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@vueuse/nuxt'
  ],
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {
        ru
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ['@import "style/global.scss";']
        }
      }
    }
  }
})
