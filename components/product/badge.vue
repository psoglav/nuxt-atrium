<script setup>
defineProps({
  icon: String
})
</script>

<template>
  <div class="badge">
    <ui-icon v-if="icon" :name="icon" size="2" />
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.badge {
  @apply flex my-2 overflow-hidden gap-4 w-full;
  padding: 0.5rem 1rem;
  border: 3px lighten(#7087ff, 23) solid;
  border-radius: 0.5rem;
  background: linear-gradient(
    45deg,
    transparentize(lighten(#7087ff, 20), 0.4),
    transparentize(lighten(#7087ff, 25), 0.4)
  );

  .icon {
    padding: 0 1rem;
    margin: -0.5rem 0;
    margin-left: -1rem;
    display: flex;
    align-items: center;
    background-color: transparentize(darken(#7087ff, 20), 0.9);
    color: lighten(#7087ff, 0);
  }
}
</style>
