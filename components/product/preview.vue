<script setup>
defineProps({
  src: String
})
</script>

<template>
  <img
    :src="src"
    style="max-width: 30rem; min-width: 5rem"
    class="rounded-lg justify-self-center w-full"
  />
</template>
