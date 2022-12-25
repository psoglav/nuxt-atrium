<script setup>
defineProps({
  path: String,
  icon: String,
  value: String
})
</script>

<template>
  <nuxt-link
    class="product-link"
    v-bind="$attrs"
    :to="`/products${path}`"
    no-prefetch
  >
    <h4 class="product-link--text">
      <div class="flex gap-2 items-center mb-1">
        <ui-icon :name="icon" size="1" v-if="icon" />{{ value }}
      </div>
      <ui-icon name="arrow-forward" size="1" />
    </h4>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.product-link {
  @apply cursor-pointer;
  z-index: 1;
  &:hover {
    color: $accent;
    .icon {
      transform: none;
      opacity: 1;
    }
  }
  &--text {
    @apply flex items-center justify-between gap-1 font-medium py-0.5;

    font-family: Arimo;
    transition: color 0.2s $easeOutCirc;

    .icon {
      opacity: 0.5;
    }
    .icon--arrow-forward {
      height: min-content;
      opacity: 0;
      transform: translateX(-100%);
      transition: all 0.1s $easeOutCirc;
    }
  }
}
</style>
