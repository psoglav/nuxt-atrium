<script setup>
defineProps({
  disabled: Boolean,
  relative: Boolean,
  autoWidth: Boolean,
  fullWidth: Boolean
})
</script>

<template>
  <div
    class="product-models-wrapper"
    :class="{
      'product-models-wrapper--disabled': disabled,
      'product-models-wrapper--relative': relative,
      'product-models-wrapper--auto-width': autoWidth,
      'product-models-wrapper--full-width': fullWidth
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.product-models-wrapper {
  @apply grid lg:w-1/2 2xl:w-full lg:sticky lg:top-[10rem] h-fit gap-8 sm:gap-6 justify-items-end;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  &--disabled {
    @apply block;
  }
  &--relative {
    @apply lg:relative lg:top-0;
  }
  &--auto-width {
    @apply w-fit;
  }
  &--full-width {
    @apply w-full;
  }
}
</style>
