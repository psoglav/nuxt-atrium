<script setup>
defineProps({
  center: Boolean
})
</script>

<template>
  <nuxt-link
    class="ui-link"
    v-bind="$attrs"
    :class="{ 'ui-link--center': center }"
  >
    <slot />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.ui-link {
  @apply relative text-sm px-4 py-2 hover:text-black whitespace-nowrap;

  transition: color 0.5s $easeInOutCirc;

  &.router-link-exact-active {
    cursor: default;
    pointer-events: none;
    color: #00000088;
  }

  &--center {
    @apply grid place-content-center;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background-color: var(--fg-2);
    transform: scale(0.75);
    border-radius: 8px;
    transition: all 0.25s $easeInOutCirc;
    opacity: 0;
  }

  &:active::after {
    transition: none;
    background-color: var(--fg-3);
  }

  &:hover::after {
    opacity: 1;
    transform: none;
  }
}
</style>
