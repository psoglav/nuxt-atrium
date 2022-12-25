<script setup>
definePageMeta({ layout: 'landing' })
</script>

<template>
  <div>
    <h1>Not Found</h1>
    <ui-link @click="$router.go(-1)">Go Back</ui-link>
  </div>
</template>
