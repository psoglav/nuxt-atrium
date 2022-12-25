<script setup>
import { useAutoAnimate } from '@formkit/auto-animate/vue'

defineProps({
  title: String,
  subtitle: String,
  logo: {
    type: Boolean,
    default: true
  }
})

const [root] = useAutoAnimate()
</script>

<template>
  <header class="product-header--container" ref="root">
    <ui-link
      center
      v-if="!['/', '/products'].includes($route.path)"
      @click="$router.go(-1)"
    >
      <ui-icon name="chevron-left" />
    </ui-link>
    <div class="product-header">
      <div class="product-header--top">
        <h1>
          {{ title }}
        </h1>
        <div class="product-header__logo">
          <img
            src="/images/logo/furukawa.png"
            alt="furukawa"
            class="hidden md:block h-5"
            v-if="logo"
          />
        </div>
      </div>
      <div class="product-header--bottom">
        <h3>{{ subtitle }}</h3>
        <img
          src="/images/logo/furukawa-sm.png"
          alt="furukawa"
          class="block md:hidden w-20"
          v-if="logo"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.product-header {
  @apply flex flex-col-reverse md:flex-col w-full;
  &--container {
    @apply flex gap-2;
  }
  h1 {
    @apply shrink sm:shrink-0 text-2xl xl:text-3xl;
  }
  h3 {
    @apply font-normal uppercase hidden md:block max-w-7xl;
  }
  &--top {
    @apply flex items-end gap-2 pb-2 sm:p-0;
  }
  &--bottom {
    @apply flex items-start md:justify-between pb-2 md:pb-0 md:pt-1;
  }
  &__logo {
    @apply w-full min-h-[1.5rem] md:border-b border-b-gray-200 hidden sm:flex items-start justify-end pb-1;
  }
}
</style>
