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
  <product-page-wrapper no-grid relative>
    <product-header
      title="ТРЕХШАРОШЕЧНЫЕ ДОЛОТА ДЛЯ ГОРНО-РУДНОЙ ПРОМЫШЛЕННОСТИ"
      :logo="false"
    />
    <template #content>
      <img
        src="/images/products/gallery/rotary-drill-bits-preview.png"
        alt="ТРЕХШАРОШЕЧНЫЕ ДОЛОТА ДЛЯ ГОРНО-РУДНОЙ ПРОМЫШЛЕННОСТИ"
        style="max-width: 40rem"
        class="rounded-lg w-full"
      />
      <br />
      <h3>БУРОВЫЕ ШАРОШЕЧНЫЕ ДОЛОТА ДЛЯ ГОРНОРУДНОЙ ПРОМЫШЛЕННОСТИ</h3>
      <li>Широкий диапазон конструктивных особенностей.</li>
      <li>Боковая или комбинированная продувка.</li>
      <li>Роликовая открытая опора из высококачественных материалов.</li>
      <li>Обратный клапан лепесткового типа.</li>
      <br />
      <product-contact-form
        title="ПОДОБРАТЬ И КУПИТЬ ТРЕХШАРОШЕЧНЫЕ ДОЛОТА ДЛЯ БУРОВЫХ СТАНКОВ FURUKAWA, SANDVIK, ATLAS COPCO, EPIROC, MONTABERT, BOART LONGYEAR, KOKEN, TAMROCK, JUNJIN, SOOSAN, EVERDIGM, SINWARD, KAISHAN, HUATAI, RESEMIN, SHRAMM, СБШ и др. "
      />
    </template>
    <template #models>
      <table class="w-full">
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
    </template>
  </product-page-wrapper>
</template>
