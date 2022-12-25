<script setup>
useHead({
  title: 'Запасные части для гидромолотов Furukawa',
  meta: [
    {
      name: 'description',
      content:
        'Запчасти для гидромолотов Furukawa FXJ125, FXJ175, FXJ225, FXJ275, FXJ375, FXJ475, FXJ770, FXJ1070'
    }
  ]
})

const { data } = await useAsyncData(() =>
  queryContent('/products/hydraulic-breakers-spare-parts').findOne()
)
</script>

<template>
  <product-page-wrapper no-grid>
    <product-header title="ЗАПЧАСТИ И ПИКИ ДЛЯ ГИДРОМОЛОТОВ FURUKAWA" />
    <template #content>
      <img
        src="/images/products/gallery/hydraulic-breakers-spare-parts.png"
        alt="Запчасти для буровых станков Furukawa"
        style="max-width: 20rem"
      />
      <br />
      <product-advantages
        :items="[
          'Рабочий инструмент (пики) для гидромолотов Furukawa.',
          'Рем. комплекты.',
          'Сальники.',
          'Армированные шланги РВД.',
          'Переходные плиты.',
          'Азотники и заправочные устройства.',
          'Втулки, диафрагмы, пальцы, поршни.',
          'Монтажные комплекты.',
          'Инструменты для обслуживания и ремонта',
          'Запасные части для гидромолотов Furukawa FXJ, F, FX.',
        ]"
      />
      <br />
      <table>
        <thead>
          <tr>
            <th>Применение</th>
            <th>Наименование</th>
            <th>Артикул для заказа</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) of data.body" :key="i">
            <td
              :rowspan="item['Применение'] ? 3 : ''"
              v-if="item['Применение']"
            >
              {{ item['Применение'] }}
            </td>
            <td>{{ item['Наименование'] }}</td>
            <td>{{ item['Артикул для заказа'] }}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <product-contact
        title="Подобрать и купить запасные части, пики и расходные материалы для гидромолотов Furukawa можно связавшись с нашими специалистами:"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-4">
        <h2>ПИКИ ДЛЯ ГИДРОМОЛОТОВ FURUKAWA</h2>
        <p>Оригинальные пики для гидромолотов FRD.</p>
        <product-models-wrapper relative full-width>
          <product-card
            preview="/images/products/models/moil-rod.png"
            title="Остроконечная (MOIL ROD)"
            caption="Для бетона, асфальта, не крепких горных пород"
          />
          <product-card
            preview="/images/products/models/wedge-rod.png"
            title="Клинообразная (WEDGE ROD)"
            caption="Для бетона, асфальта, не крепких горных пород"
          />
          <product-card
            preview="/images/products/models/flat-rod.png"
            title="Плоская (FLAT ROD)"
            caption="Для дробления негабаритов, карьерных работ, крепких горных пород"
          />
        </product-models-wrapper>
      </div>
    </template>
  </product-page-wrapper>
</template>
