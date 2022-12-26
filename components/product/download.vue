<script setup lang="ts">
export interface Props {
  items: {
    href: string
    icon: string
    name: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <div class="product-download flex flex-col gap-y-1 mt-4 mb-8">
    <h3>Файлы для скачивания:</h3>
    <div class="font-semibold flex flex-col gap-2">
      <a
        v-for="(item, i) of items"
        :key="i"
        :href="item.href"
        class="text-accent hover:text-black flex items-center gap-x-2 w-fit"
      >
        <icon :icon="item.icon" width="24px" class="icon" />
        {{ item.name }}
      </a>
    </div>
  </div>
</template>
