<script setup>
const props = defineProps({
  data: Object,
  title: String
})
</script>

<template>
  <div class="product-table" v-bind="$attrs">
    <h2>{{ title }}</h2>
    <table v-if="data.body">
      <thead>
        <tr>
          <th v-for="(name, i) of Object.keys(data.body[0])" :key="i">
            {{ name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) of data.body" :key="i">
          <td v-for="(name, j) of Object.keys(item)" :key="j">
            {{ item[name] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.product-table {
  @apply mt-8 sm:my-8;
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
