<script setup>
useHead({
  title: 'Буровой инструмент для RC бурения',
  meta: [
    {
      name: 'description',
      content:
        'Продажа бурового инструмента для RC бурения, RC трубы, RC пневмоударники, RC долота.'
    }
  ]
})

const { data: data1 } = await useAsyncData(() =>
  queryContent('/products/rc-bits-110-130').findOne()
)
const { data: data2 } = await useAsyncData(() =>
  queryContent('/products/rc-bits-130-146').findOne()
)
const { data: data3 } = await useAsyncData(() =>
  queryContent('/products/rc-bits/atr-4-4').findOne()
)
const { data: data5 } = await useAsyncData(() =>
  queryContent('/products/rc-bits/atr-52').findOne()
)
</script>

<template>
  <product-page-wrapper no-grid>
    <product-header
      title="БУРОВОЙ ИНСТРУМЕНТ ATRIUM ДЛЯ RC БУРЕНИЯ (REVERSE CIRCULATION)"
      :logo="false"
    />
    <template #content>
      <img
        src="/images/products/gallery/rc-bits-preview.png"
        alt="БУРОВОЙ ИНСТРУМЕНТ ATRIUM ДЛЯ RC БУРЕНИЯ (REVERSE CIRCULATION)"
        style="max-width: 40rem"
        class="rounded-lg w-full"
      />
      <br />
      <div class="flex w-full flex-wrap gap-8">
        <product-table
          title="RC ИНСТРУМЕНТ ДЛЯ БУРЕНИЯ Ø110-130 мм"
          :data="data1"
        />
        <product-table
          title="RC ИНСТРУМЕНТ ДЛЯ БУРЕНИЯ Ø130-146 мм"
          :data="data2"
        />
      </div>
      <br />
      <div>
        <h2>RC ПНЕВМОУДАРНИК В СБОРЕ ATR-4, 4“</h2>
        <br />
        <img
          src="/images/products/rc-bits/image10.png"
          style="max-width: 50rem"
          class="rounded-lg w-full"
        />
        <product-table :data="data3" />
      </div>
      <br />
      <div>
        <h2>RC ПНЕВМОУДАРНИК В СБОРЕ ATR 52, 5“</h2>
        <br />
        <img
          src="/images/products/rc-bits/image11.png"
          style="max-width: 50rem"
          class="rounded-lg w-full"
        />
        <product-table :data="data5" />
      </div>
      <br />
      <product-contact-form
        title="ПОДОБРАТЬ И КУПИТЬ БУРОВОЙ ИНСТРУМЕНТ ДЛЯ RC БУРЕНИЯ НА БУРОВЫЕ СТАНКИ FURUKAWA, SANDVIK, ATLAS COPCO, EPIROC, MONTABERT, BOART LONGYEAR, KOKEN, TAMROCK, JUNJIN, SOOSAN, EVERDIGM, SINWARD, KAISHAN, HUATAI, RESEMIN, SHRAMM, СБШ и др."
      />
    </template>
  </product-page-wrapper>
</template>
