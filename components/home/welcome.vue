<script setup>
const img = ref(null)
if (process.client) {
  window.addEventListener('scroll', (e) => {
    if (!img.value) return
    let a = Math.min(
      window.scrollY / img.value.getBoundingClientRect().height,
      1
    )
    img.value.style.opacity = 1 - a
  })
}
</script>

<template>
  <section>
    <img src="/images/background/dcr20.jpg" ref="img" />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  max-width: initial !important;
  width: 100% !important;
  padding: 0 !important;
}
</style>
