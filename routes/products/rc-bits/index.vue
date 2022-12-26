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
      <product-preview src="/images/products/gallery/rc-bits-preview.png" />
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
        <div v-if="false">
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Длина<icon icon="tabler:ruler-measure" width="24px" /> 1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Диаметр<icon icon="mdi:diameter-variant" width="24px" />
              1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Масса<icon icon="mdi:weight-kg" width="24px" /> 1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Хвостовик<icon icon="tabler:ruler-measure" width="24px" />
              1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Диаметр скважины<icon icon="tabler:ruler-measure" width="24px" />
              1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Диаметр скважины<icon icon="tabler:ruler-measure" width="24px" />
              1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Рабочее давление<icon icon="carbon:pressure" width="24px" />
              1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Частота удара<icon icon="game-icons:impact-point" width="24px" />
              1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Скорость вращения<icon
                icon="material-symbols:rotate-left"
                width="24px"
              />
              1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Потребление воздуха при 1 МПа<icon icon="bi:fan" width="18px" />
              1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Потребление воздуха при 1,8 МПа<icon
                icon="bi:fan"
                width="20px"
              />
              1252мм</b
            >
          </div>
          <div class="flex items-center gap-2">
            <b class="flex items-center gap-2"
              >Потребление воздуха при 2,4 МПа<icon
                icon="bi:fan"
                width="24px"
              />
              1252мм</b
            >
          </div>
        </div>
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
