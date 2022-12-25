<script setup lang="ts">
export interface Props {
  title?: string
  items: string[]
  icon?: string
}

defineProps<Props>()
</script>

<template>
  <ul class="product-advantages">
    <h3 class="product-advantages--title" v-if="title">{{ title }}</h3>
    <product-advantage v-for="(item, i) in items" :key="i" :icon="icon">
      {{ item }}
    </product-advantage>
  </ul>
</template>

<style lang="scss">
.product-advantages {
  @apply flex flex-col gap-1 my-2;
  gap: 0.8rem;
  &--title {
    line-height: 1.2rem;
    letter-spacing: 0.05rem;
    margin-bottom: 0.2rem;
  }
}
</style>
