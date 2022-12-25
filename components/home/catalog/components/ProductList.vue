<template>
  <div class="product-list">
    <product-header v-bind="$attrs" />
    <div class="product-list__container">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  @apply flex flex-col gap-10;
  &__container {
    @apply gap-3 sm:gap-6 grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
}
</style>
