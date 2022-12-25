<script setup>
const images = ref([
  'sandvik.png',
  'epiroc.png',
  'atlas-copco.jpg',
  'montabert.png',
  'junjin.jpg',
  'everdigm.png',
  'soosan.png',
  'sunward.png',
  'kaishan.png',
  'zega.jpg'
])
</script>

<template>
  <section class="spare-parts-section">
    <div class="section__title">
      <h1>ЗАПАСНЫЕ ЧАСТИ ДЛЯ БУРОВЫХ СТАНКОВ</h1>
      <h3>
        EPIROC (ATLAS СОРСО), SANDVIK, MONTABERT, SOOSAN, JUNJIN, EVERDIGM ,
        SUNWARD, KAISHAN, ZEGA и др.
      </h3>
    </div>
    <div class="spare-parts-section__wrapper">
      <img :src="`/images/logo/${src}`" v-for="(src, i) in images" :key="i" />
    </div>
  </section>
</template>

<style lang="scss">
.spare-parts-section {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 4rem;
  padding-top: 0 !important;
  padding-bottom: 0 !important;

  &__wrapper {
    @apply flex gap-x-8 gap-y-14 flex-wrap justify-center;
    img {
      max-width: 12rem;
      object-fit: contain;
      mix-blend-mode: multiply;
    }
  }
}
</style>
