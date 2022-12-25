<script setup>
import { chunk } from '@/helpers/array'

const props = defineProps({
  items: Array,
  name: String,
  boldValues: Boolean
})

const data = ref(chunk(props.items, 2))
</script>

<template>
  <div class="product-specification">
    <h2>
      Спецификация <span>{{ name }}</span>
    </h2>
    <table>
      <tbody>
        <tr v-for="(item, i) of data" :key="i">
          <td
            v-for="(s, j) of item"
            :key="j"
            :class="{ bold: boldValues && j == 1 }"
          >
            {{ s }}
          </td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>

<style lang="scss">
.product-specification {
  @apply my-8;
  h2 {
    @apply mb-4;
  }

  td {
    @apply text-left indent-4 sm:p-4 p-6 font-medium;
    &.bold {
      @apply font-bold;
    }
  }
}
</style>
