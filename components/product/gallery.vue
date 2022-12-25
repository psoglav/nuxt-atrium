<script setup lang="ts">
export interface Props {
  images: string[]
  options?: object
}

const defaultOptions = {
  rewind: true,
  autoWidth: true,
  gap: 5,
  heightRatio: 0.5
}

defineProps<Props>()
</script>

<template>
  <Splide
    class="product-gallery"
    :options="{ ...defaultOptions, ...options }"
    aria-label="Product gallery"
  >
    <SplideSlide v-for="(image, i) in images" :key="i">
      <img :src="image" />
    </SplideSlide>
  </Splide>
</template>

<style lang="scss">
.product-gallery {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
