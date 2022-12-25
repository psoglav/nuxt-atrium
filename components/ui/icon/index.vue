<script>
import { defineAsyncComponent } from 'vue'
import { toPascalCase } from '@/helpers/stringUtils.js'
export default {
  props: {
    size: {
      type: String,
      default: '1.5',
    },
    name: String,
    color: String,
    spin: Boolean,
  },
  setup({ size, name }) {
    return {
      size,
      icon: defineAsyncComponent(() =>
        import(`./iconset/Icon${toPascalCase(name)}.vue`),
      ),
    }
  },
}
</script>

<template>
  <div :class="['icon', 'icon--' + name, { 'animate-spin-fast': spin }]">
    <component
      :is="icon"
      :width="`${size}rem`"
      :height="`${size}rem`"
      :color="color"
      :stroke="color"
    ></component>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  transition: transform 150ms ease;
}
</style>
