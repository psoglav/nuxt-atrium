import { Icon } from '@iconify/vue'

export default defineNuxtPlugin((ctx) => {
  ctx.vueApp.component('icon', Icon)
})
