<script setup>
useHead({
  title: 'Трехшарошечные долота, продажа, сервис, производитель',
  meta: [
    {
      name: 'description',
      content:
        'Продажа буровых шарошечных долот 171 мм, 200 мм, 215,9 мм, 216 мм, IADC'
    }
  ]
})

const { data } = await useAsyncData(() =>
  queryContent('/products/rotary-drill-bits').findOne()
)
</script>

<template>
  <section>
    <product-header
      title="ТРЕХШАРОШЕЧНЫЕ ДОЛОТА ДЛЯ ГОРНО-РУДНОЙ ПРОМЫШЛЕННОСТИ"
      :logo="false"
    />
    <br />
    <div class="flex gap-8 flex-col md:flex-row">
      <product-preview
        src="/images/products/gallery/rotary-drill-bits-preview.png"
      />
      <product-advantages
        title="БУРОВЫЕ ШАРОШЕЧНЫЕ ДОЛОТА ДЛЯ ГОРНОРУДНОЙ ПРОМЫШЛЕННОСТИ"
        :items="[
          'Широкий диапазон конструктивных особенностей.',
          'Боковая или комбинированная продувка.',
          'Роликовая открытая опора из высококачественных материалов.',
          'Обратный клапан лепесткового типа.'
        ]"
      />
    </div>
    <br />

    <table class="w-full" style="max-width: 1024px">
      <thead>
        <tr>
          <th>ДИАМЕТР, мм</th>
          <th>КОД IADC</th>
          <th>ПРИСОЕДИНИТЕЛЬНАЯ РЕЗЬБА</th>
          <th>АРТИКУЛ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) of data.body" :key="i">
          <td>{{ item['ДИАМЕТР, мм'] }}</td>
          <td>{{ item['КОД IADC'] }}</td>
          <td>{{ item['ПРИСОЕДИНИТЕЛЬНАЯ РЕЗЬБА'] }}</td>
          <td>{{ item['АРТИКУЛ'] }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <product-contact-form
      title="ПОДОБРАТЬ И КУПИТЬ ТРЕХШАРОШЕЧНЫЕ ДОЛОТА ДЛЯ БУРОВЫХ СТАНКОВ FURUKAWA, SANDVIK, ATLAS COPCO, EPIROC, MONTABERT, BOART LONGYEAR, KOKEN, TAMROCK, JUNJIN, SOOSAN, EVERDIGM, SINWARD, KAISHAN, HUATAI, RESEMIN, SHRAMM, СБШ и др. "
    />
  </section>
</template>
