<script setup>
useHead({
  title: 'Гидромолот FURUKAWA FXJ-275',
  meta: [
    {
      name: 'description',
      content: 'Гидромолот Furukawa FXJ-275 для экскаватора: 21-29 т.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid models-auto-width>
    <product-header title="ГИДРОМОЛОТ FURUKAWA FXJ275" />
    <template #content>
      <p>
        Благодаря широкому ассортименту экскаваторов весом от 21 до 29 тон,
        гидромолот FXJ275 является самым распространенным гидромолотом.
        Моноблочная конструкция, система пылеподавления, измененный поршень и
        новое конструктивное сопротивление клапана сделали FXJ 275 лидером в
        своём классе.
      </p>
      <div class="flex flex-wrap gap-8">
        <product-specification
          name="Furukawa FXJ-275"
          :items="[
            'Эксплуатационная масса',
            '1775 кг',
            'Высота',
            '2896 мм',
            'Диаметр рабочей пики',
            '140 мм',
            'Вес экскаватора',
            '21 – 29 т.',
            'Диаметр шланга',
            '25 мм',
            'Рабочее давление масла',
            '16-18 МПа',
            'Расход масла',
            '145 – 220 л/мин',
            'Частота ударов',
            '350 – 550 / в минуту'
          ]"
        />
        <product-download
          :items="[
            {
              href: '/pdf/hydraulic-breakers/Fxj275.pdf',
              icon: 'fluent:document-pdf-24-filled',
              name: 'Каталог запасных частей Furukawa FXJ-275'
            }
          ]"
        />
      </div>
      <product-contact
        title="Подобрать и купить гидромолот Furukawa  FXJ-275 можно связавшись со специалистами:"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-8">
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="['/images/products/models/fxj-275/image1.png']"
        />
      </div>
    </template>
  </product-page-wrapper>
</template>
