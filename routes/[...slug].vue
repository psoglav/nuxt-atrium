<script setup>
definePageMeta({ layout: 'landing' })
</script>

<template>
  <section class="page-404 mt-4 w-full" data-theme="light">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <br />
    <br />
    <ui-link @click="$router.go(-1)">Go Back</ui-link>
  </section>
</template>

<style lang="scss">
.page-404 {
  @apply flex flex-col items-center;
  font-family: Inter;
  h1 {
    font-size: 7rem;
    line-height: 100%;
  }
  h2 {
    font-size: 2rem;
    line-height: 100%;
  }
  a {
    @apply cursor-pointer font-medium;
  }
}
</style>
