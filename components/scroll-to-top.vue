<script setup>
import { useWindowScroll } from '@vueuse/core'
const { x, y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <div
    class="scroll-to-top"
    :class="{ 'scroll-to-top--hidden': y <= 100 }"
    @click="scrollToTop"
  >
    <icon icon="tabler:chevron-up" width="24px" />
  </div>
</template>

<style lang="scss" scoped>
.scroll-to-top {
  @apply flex items-center justify-center border hover:bg-gray-100 fixed bottom-8 right-8 rounded-full cursor-pointer active:bg-gray-200 active:text-white z-10 transition-opacity;
  background: #ffffff22;
  border-color: #00000066;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: gray;
  width: 5rem;
  aspect-ratio: 1/1;
  box-shadow: 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0143771),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0119221),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.01),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.00807786),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.00562291);

  &--hidden {
    opacity: 0;
  }
}
</style>
