<script setup>
useHead({
  title: 'Гидромолот FURUKAWA FXJ-1070',
  meta: [
    {
      name: 'description',
      content: 'Гидромолот Furukawa FXJ-1070 для экскаватора: 26-39 т.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid models-auto-width>
    <product-header title="ГИДРОМОЛОТ FURUKAWA FXJ1070" />
    <template #content>
      <p>
        FXJ1070 заменяет F100XP, добавляя дополнительные 5 тонн в весе базовой
        машины и с большей энергией удара, а также долговечностью и самой низкой
        стоимостью владения в течение всего срока службы. Благодаря
        усовершенствованию встроенных систем и различным другим запатентованным
        решениям, новый гидромолот FXJ отличается повышенным соотношением
        мощности и веса. Меньший вес отбойного гидромолота с более высокой
        энергией удара приводит к большей разрушающей способности при меньшем
        объеме обслуживания и минимальном времени простоя.
      </p>
      <div class="flex flex-wrap gap-8">
        <product-specification
          name="Furukawa FXJ-1070"
          :items="[
            'Эксплуатационная масса',
            '6550 кг',
            'Высота',
            '4633 мм',
            'Диаметр рабочей пики',
            '210 мм',
            'Вес экскаватора',
            '65 – 110 т.',
            'Диаметр шланга',
            '32 мм',
            'Рабочее давление масла',
            '16 – 18 МПа',
            'Расход масла',
            '280 – 420 л/мин',
            'Частота ударов',
            '200 – 280 / в минуту'
          ]"
        />
        <product-download
          :items="[
            {
              href: '/pdf/hydraulic-breakers/Fxj1070.pdf',
              icon: 'fluent:document-pdf-24-filled',
              name: 'Каталог запасных частей Furukawa FXJ-1070'
            }
          ]"
        />
      </div>
      <product-contact
        title="Подобрать и купить гидромолот Furukawa FXJ-1070 можно связавшись со специалистами:"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-8">
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="['/images/products/models/fxj-1070/image1.png']"
        />
      </div>
    </template>
  </product-page-wrapper>
</template>
