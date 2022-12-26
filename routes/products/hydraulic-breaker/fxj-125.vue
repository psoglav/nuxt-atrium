<script setup>
useHead({
  title: 'Гидромолот FURUKAWA FXJ-125',
  meta: [
    {
      name: 'description',
      content: 'Гидромолот Furukawa FXJ-125 для экскаватора: 9-16 т.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid models-auto-width>
    <product-header title="ГИДРОМОЛОТ FURUKAWA FXJ125" />
    <template #content>
      <p>
        FXJ125 - это начальная модель в серии FXJ. Гидромолот среднего радиуса
        действия, разработанный для использования на миниэкскаваторах,
        экскаваторах и стреловых системах. Моноблочная конструкция сокращает
        количество компонентов, износ и техническое обслуживание.
      </p>
      <div class="flex flex-wrap gap-8">
        <product-specification
          name="Furukawa FXJ-125"
          :items="[
            'Эксплуатационная масса',
            '765 кг',
            'Высота',
            '2218 мм',
            'Диаметр рабочей пики',
            '110 мм',
            'Вес экскаватора',
            '9-16 т.',
            'Диаметр шланга',
            '19 мм',
            'Рабочее давление масла',
            '16-18МПа',
            'Расход масла',
            '70-120 л/мин',
            'Частота ударов',
            '400-650 / в минуту'
          ]"
        />
        <product-download
          :items="[
            {
              href: '/pdf/hydraulic-breakers/Fxj125.pdf',
              icon: 'fluent:document-pdf-24-filled',
              name: 'Каталог запасных частей Furukawa FXJ-125'
            }
          ]"
        />
      </div>
      <product-contact
        title="Подобрать и купить гидромолот Furukawa  FXJ-125 можно связавшись со специалистами:"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-8">
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="['/images/products/models/pcr-200/image1.png']"
        />
      </div>
    </template>
  </product-page-wrapper>
</template>
