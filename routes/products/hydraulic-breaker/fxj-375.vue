<script setup>
useHead({
  title: 'Гидромолот FURUKAWA FXJ-375',
  meta: [
    {
      name: 'description',
      content: 'Гидромолот Furukawa FXJ-375 для экскаватора: 26-39 т.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid models-auto-width>
    <product-header title="ГИДРОМОЛОТ FURUKAWA FXJ375" />
    <template #content>
      <p>
        FXJ375 - мощный гидромолот, у которого нет конкурентов. Неудивительно,
        что благодаря новым функциям FXJ375 превосходит всех своих
        конкурентов. Моноблочный цилиндр и больший диаметр поршня - это лишь
        некоторые из многих особенностей, которые делают FXJ375 современным
        высокопроизводительным и без отказным гидромолотом.
      </p>
      <div class="flex flex-wrap gap-8">
        <product-specification
          name="Furukawa FXJ-375"
          :items="[
            'Эксплуатационная масса',
            '2520 кг',
            'Высота',
            '3155 мм',
            'Диаметр рабочей пики',
            '155 мм',
            'Вес экскаватора',
            '26 – 39 т.',
            'Диаметр шланга',
            '25 мм',
            'Рабочее давление масла',
            '16-18 МПа',
            'Расход масла',
            '170 – 260 л/мин',
            'Частота ударов',
            '300 – 450 / в минуту'
          ]"
        />
        <product-download
          :items="[
            {
              href: '/pdf/hydraulic-breakers/Fxj375.pdf',
              icon: 'pdf',
              name: 'Каталог запасных частей Furukawa FXJ-375'
            }
          ]"
        />
      </div>
      <product-contact
        title="Подобрать и купить гидромолот Furukawa  FXJ-375 можно связавшись со специалистами:"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-8">
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="['/images/products/models/fxj-375/image1.png']"
        />
      </div>
    </template>
  </product-page-wrapper>
</template>
