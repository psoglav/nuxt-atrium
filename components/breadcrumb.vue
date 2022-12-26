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
  <div class="products-breadcrumb flex items-center" ref="root">
    <div
      class="flex items-center gap-2"
      v-for="(route, i) in routes"
      :key="route"
    >
      <icon
        v-show="i > 0"
        icon="system-uicons:chevron-right"
        width="24px"
        class="icon--chevron-right"
      />
      <div class="products-breadcrumb__item flex items-center">
        <icon
          v-show="i == routes.length - 1"
          icon="eva:arrow-forward-outline"
          width="12px"
          class="icon--arrow-forward"
        />
        <ui-link :to="`/${routes.slice(1, i + 1).join('/')}`">
          <icon v-if="route == 'home'" icon="ic:round-home" width="20px" />
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
