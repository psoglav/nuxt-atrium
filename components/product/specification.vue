<script setup>
const props = defineProps({
  items: Array,
  name: String
})

const data = ref([])

const makeTable = () => {
  const items = props.items
  const cols = window.innerWidth < 600 ? 1 : 2

  for (let i = Math.ceil(items.length / cols); i > 0; i--) {
    let a = []
    for (let c = cols; c > 0; c--) {
      a.push(items.shift())
    }
    data.value.push(a)
  }
}

onMounted(() => {
  if (process.client) {
    makeTable()
  }
})
</script>

<template>
  <div class="product-specification">
    <h2>
      Спецификация <span>{{ name }}</span>
    </h2>
    <table>
      <tbody>
        <tr v-for="(item, i) of data" :key="i">
          <td v-for="(s, j) of item" :key="j">{{ s }}</td>
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
  }
}
</style>
