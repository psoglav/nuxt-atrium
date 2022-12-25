<script setup>
useHead({
  title: 'Гидромолот FURUKAWA FXJ-225',
  meta: [
    {
      name: 'description',
      content: 'Гидромолот Furukawa FXJ-225 для экскаватора: 18-25 т.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid models-auto-width>
    <product-header title="ГИДРОМОЛОТ FURUKAWA FXJ225" />
    <template #content>
      <p>
        FXJ225 обеспечивает оптимальную совместимость с экскаваторами массой от
        18 до 25 тонн и предназначен для общих строительных, карьерных и горных
        работ, а также для сноса зданий и сооружений. Как и все гидромолоты FXJ,
        FXJ225 имеет защитный корпус, обеспечивающий низкий уровень шума и
        оптимальную защиту.
      </p>
      <div class="flex flex-wrap gap-8">
        <product-specification
          name="Furukawa FXJ-225"
          :items="[
            'Эксплуатационная масса',
            '1630 кг',
            'Высота',
            '2739 мм',
            'Диаметр рабочей пики',
            '135 мм',
            'Вес экскаватора',
            '18 - 25 т.',
            'Диаметр шланга',
            '25 мм',
            'Рабочее давление масла',
            '16-18МПа',
            'Расход масла',
            '125 – 190 л/мин',
            'Частота ударов',
            '350 – 550 / в минут'
          ]"
        />
        <product-download
          :items="[
            {
              href: '/pdf/hydraulic-breakers/Fxj225.pdf',
              icon: 'pdf',
              name: 'Каталог запасных частей Furukawa FXJ-225'
            }
          ]"
        />
      </div>
      <product-contact
        title="Подобрать и купить гидромолот Furukawa  FXJ-225 можно связавшись со специалистами:"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-8">
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="['/images/products/models/fxj-225/image1.png']"
        />
      </div>
    </template>
  </product-page-wrapper>
</template>
