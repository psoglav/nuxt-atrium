<script setup>
defineProps({
  icon: String
})
</script>

<template>
  <div class="badge">
    <div class="icon">
      <icon icon="mingcute:certificate-line" width="24px" />
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.badge {
  @apply flex my-2 overflow-hidden gap-4 w-full font-semibold text-base;
  padding: 0.5rem 1rem;
  border: 1px #7087ff solid;
  border-radius: 0.5rem;
  background-color: #7087ff22;

  .icon {
    padding: 0 .4rem;
    margin: -0.5rem 0;
    margin-left: -1rem;
    display: flex;
    align-items: center;
    background-color: #7087ff;
    color: white;
  }
}
</style>
