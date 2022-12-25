import { useApp } from '@/store'
import { computed } from 'vue'

const app = computed(() => useApp())

export const remToPixels = (rem) => {
  return rem * +window.getComputedStyle(document.documentElement).fontSize.replace('px', '')
};