<script setup>
import { useApp } from '@/store'

const app = useApp()

defineProps({
  topbar: Boolean
})

const header = ref(null)
const root = ref(null)
const scrollY = ref(0)

onMounted(() => {
  if (process.client) {
    root.value.style.position = 'fixed'

    const observer = new ResizeObserver(([entry]) => {
      document.body.style.marginTop = entry.contentRect.height + 'px'
    })
    observer.observe(root.value)
  }

  document.addEventListener('scroll', () => {
    scrollY.value =
      document.documentElement.scrollTop || document.body.scrollTop
    app.setScrollTop(scrollY.value)
  })
})
</script>

<template>
  <div class="header-container" :class="{ 'h-shadow': scrollY > 0 }" ref="root">
    <header-affix :pinned="topbar" />
    <header ref="header" data-theme="light">
      <brand-logo />
      <nav class="nav uppercase">
        <ui-link to="/products/pneumatic-impact-drill-rig"
          >Пневмоударные буровые станки</ui-link
        >
        <ui-link to="/products/rotary-drill-rig"
          >Перфораторные буровые станки</ui-link
        >
        <ui-link to="/products/underground-drill-rig"
          >Подземные буровые станки</ui-link
        >
        <ui-link to="/products">Гидромолоты</ui-link>
        <ui-link to="/products">Буровой инструмент </ui-link>
        <ui-link to="/about">О компании</ui-link>
        <ui-link to="/contacts">Контакты</ui-link>
      </nav>
      <brand-socials />
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  @apply w-full z-10 top-0 transform-none;

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: box-shadow 0.3s ease;

  &.h-shadow {
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.03),
      0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0215656),
      0px 22.3363px 17.869px rgba(0, 0, 0, 0.0178832),
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.015),
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0121168),
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.00843437);
  }

  header {
    @apply relative w-full flex justify-between items-end flex-wrap md:flex-nowrap gap-4;

    background-color: rgba(255, 255, 255, 0.461);
    border-bottom: 1px var(--fg-2) solid;
    padding: 1rem 2rem;
    min-height: 6rem;
    z-index: 1;
    font-family: Arimo;
    color: var(--fg);
    transition: background-color 0.5s $easeInOutCirc;

    @include xs(padding, 0 0.5rem);

    .nav {
      @apply relative flex h-fit text-base w-full overflow-auto;
      font-family: Inter;
      font-weight: 500;
    }
  }

  .socials {
    @apply hidden md:flex;
  }
}
</style>
