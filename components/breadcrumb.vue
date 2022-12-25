<script setup>
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const route = useRoute()
const routes = computed(() => [
  'home',
  ...(route.path.split('/').filter((a) => a) || [])
])

const [root] = useAutoAnimate()
</script>

<template>
  <div class="products-breadcrumb flex items-center gap-2" ref="root">
    <div
      class="flex items-center gap-2"
      v-for="(route, i) in routes"
      :key="route"
    >
      <ui-icon v-show="i > 0" name="chevron-right" size="0.7" />
      <div class="products-breadcrumb__item flex items-center">
        <ui-icon
          v-show="i == routes.length - 1"
          name="arrow-forward"
          size="0.7"
        />
        <ui-link :to="`/${routes.slice(1, i + 1).join('/')}`">
          <ui-icon v-if="route == 'home'" name="home" size="1.5" />
          <div v-else>
            {{
              (() => {
                if (i == 3) {
                  return $t(`models.${route}`)
                } else if (i == 2) {
                  return $t(`products.${route}`, 2)
                } else {
                  return $t(`navigation.${route}`)
                }
              })()
            }}
          </div>
        </ui-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-breadcrumb {
  @apply relative;
  font: 500 0.9rem Inter;
  width: 100%;
  &__item {
    @apply relative;
    height: 2.5rem;
    a {
      @apply h-full grid items-center;
    }
    .icon--arrow-forward {
      display: none;
    }
  }
  @include to($break_breadcrumb) {
    flex-direction: column;
    align-items: flex-start;
    .icon--chevron-right {
      display: none;
    }
    .icon--arrow-forward {
      display: block;
      margin-left: 1rem;
    }
  }
}
</style>
