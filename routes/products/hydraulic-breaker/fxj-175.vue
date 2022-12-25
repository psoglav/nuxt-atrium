<script setup>
useHead({
  title: 'Гидромолот FURUKAWA FXJ-175',
  meta: [
    {
      name: 'description',
      content: 'Гидромолот Furukawa FXJ-175 для экскаватора: 12-20 т.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid models-auto-width>
    <product-header title="ГИДРОМОЛОТ FURUKAWA FXJ175" />
    <template #content>
      <p>
        Благодаря моноблочному цилиндру и использованию меньшего количества
        деталей FXJ175 был разработан для сокращения времени обслуживания и
        простоев. Автоматическая система смазки обеспечивает быстрое ежедневное
        обслуживание. С FXJ175 меньше забот о техническом обслуживании, поэтому
        у него больше времени на то, что он умеет.
      </p>
      <div class="flex flex-wrap gap-8">
        <product-specification
          name="Furukawa FXJ-175"
          :items="[
            'Эксплуатационная масса',
            '990 кг',
            'Высота',
            '2288 мм',
            'Диаметр рабочей пики',
            '120 мм',
            'Вес экскаватора',
            '12-20т.',
            'Диаметр шланга',
            '19 мм',
            'Рабочее давление масла',
            '16-18 МПа',
            'Расход масла',
            '100-160 л/мин',
            'Частота ударов',
            '450-600 / в минуту'
          ]"
        />
        <product-download
          :items="[
            {
              href: '/pdf/hydraulic-breakers/Fxj175.pdf',
              icon: 'pdf',
              name: 'Каталог запасных частей Furukawa FXJ-175'
            }
          ]"
        />
      </div>
      <product-contact
        title="Подобрать и купить гидромолот Furukawa  FXJ-175 можно связавшись со специалистами:"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-8">
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="['/images/products/models/fxj-175/image1.png']"
        />
      </div>
    </template>
  </product-page-wrapper>
</template>
