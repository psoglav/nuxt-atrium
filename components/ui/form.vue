<script setup>
defineProps({
  title: String,
  subject: String,
  wide: Boolean,
})
</script>

<template>
  <div
    class="ui-form animate__animated animate__fadeIn"
    :class="{ wide }"
  >
    <h2 v-html="title" v-if="title"></h2>
    <h1
      v-else
      v-html="subject ? $t('form.request-info-about') : $t('form.request-info')"
    ></h1>
    <div class="flex flex-col gap-4">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui-form {
  @apply flex flex-col gap-8 w-full rounded-2xl mt-4;
  max-width: 35rem;
  padding: 1.5rem 2rem;
  border: 3px #00000005 solid;
  box-shadow: inset 0px 85px 80px rgba(0, 0, 0, 0.07 * 0.1),
    inset 0px 35.511px 33.4221px rgba(0, 0, 0, 0.0503198 * 0.1),
    inset 0px 18.9859px 17.869px rgba(0, 0, 0, 0.0417275 * 0.1),
    inset 0px 10.6433px 10.0172px rgba(0, 0, 0, 0.035 * 0.1),
    inset 0px 5.65259px 5.32008px rgba(0, 0, 0, 0.0282725 * 0.1),
    inset 0px 2.35217px 2.21381px rgba(0, 0, 0, 0.0196802 * 0.1);

  &.wide {
    max-width: 42rem;
  }

  h1 {
    font: 600 1.4rem Inter;
  }
  h2 {
    font: 600 1.1rem Inter;
    @apply leading-6;
  }
}
</style>
