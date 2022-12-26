<script setup>
defineProps({
  icon: {
    type: String,
    default: 'material-symbols:check-circle-outline-rounded'
  }
})
</script>

<template>
  <li class="product-advantage">
    <icon :icon="icon" width="20px" class="icon" />
    <span><slot /></span>
  </li>
</template>

<style lang="scss">
.product-advantage {
  @apply flex items-start gap-2;
  .icon {
    color: lighten($accent, 10);
    padding-top: 0.14rem;
  }
}
</style>
