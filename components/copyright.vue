<script setup>
defineProps({
  noWrap: Boolean
})
</script>

<template>
  <div class="copyright">
    © {{ new Date().getFullYear() }} ООО «Атриум». <br />
    {{ $t('copyright') }}
  </div>
</template>

<style lang="scss" scoped>
.copyright {
  font-size: 0.8rem;
  color: #ffffff88;
}
</style>
