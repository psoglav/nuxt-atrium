<script setup lang="ts">
export interface Props {
  noGrid?: boolean
  modelsAutoWidth?: boolean
  relative?: boolean
}

defineProps<Props>()
</script>

<template>
  <section class="product-page-wrapper">
    <slot />
    <div class="product-page-wrapper__container">
      <div class="product-page-wrapper__content">
        <slot name="content" />
      </div>
      <product-models-wrapper :disabled="noGrid" :auto-width="modelsAutoWidth" :relative="relative" v-if="$slots.models">
        <slot name="models" />
      </product-models-wrapper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-page-wrapper {
  @apply container flex flex-col gap-10;
  &__container {
    @apply flex flex-col lg:flex-row w-full gap-12;
  }
  &__content {
    @apply flex flex-col gap-4 sm:gap-2 lg:w-full;
    color: #000000cc;
  }
}
</style>
