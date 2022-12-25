<script setup>
defineProps({
  icon: {
    type: String,
    default: 'o-check'
  }
})
</script>

<template>
  <li class="product-advantage">
    <ui-icon :name="icon" size="1.2" />
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
