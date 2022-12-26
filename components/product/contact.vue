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
        <icon icon="ic:baseline-phone" width="20px" />
        <a href="tel:84232576701" class="default-link">8 (423) 257-67-01</a>
      </div>
      <div class="product-contact__item">
        <icon icon="ic:outline-email" width="20px" />
        <a href="mailto:info@mining-tools.info" class="default-link"
          >info@mining-tools.info</a
        >
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
