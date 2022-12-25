<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="product-contact">
    <h4>{{ title }}</h4>
    <div class="product-contact--wrapper">
      <div class="product-contact__item">
        <ui-icon name="phone" size=".8" /> 8 (423) 257-67-01
      </div>
      <div class="product-contact__item">
        <ui-icon name="email" size="1.1" /> info@mining-tools.info
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-contact {
  @apply flex flex-col gap-2 max-w-md;
  h4 {
    opacity: 0.9;
  }
  &--wrapper {
    @apply flex flex-col;
  }
  &__item {
    @apply font-bold flex gap-2 items-center mt-1;
    .icon {
      @apply text-accent w-4;
    }
  }
}
</style>
