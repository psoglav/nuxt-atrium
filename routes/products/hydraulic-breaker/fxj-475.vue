<script setup>
useHead({
  title: 'Гидромолот FURUKAWA FXJ-475',
  meta: [
    {
      name: 'description',
      content: 'Гидромолот Furukawa FXJ-475 для экскаватора: 26-39 т.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid models-auto-width>
    <product-header title="ГИДРОМОЛОТ FURUKAWA FXJ475" />
    <template #content>
      <p>
        Создан специально для работы с твердыми гранитными горными породами.
        Уникальный цельный корпус и Система демпфирования снижает уровень шума
        для использования в чувствительных к шуму средах. Более высокое давление
        в задней части и больший диаметр поршня увеличивает ударные
        характеристики. Смазка стала проще благодаря уникальной системы смазки
        передней части и передних сайлентблоков что увеличивает срок службы и
        срок службы поршня.
      </p>
      <div class="flex flex-wrap gap-8">
        <product-specification
          name="Furukawa FXJ-475"
          :items="[
            'Эксплуатационная масса',
            '3190 кг',
            'Высота',
            '3372 мм',
            'Диаметр рабочей пики',
            '170 мм',
            'Вес экскаватора',
            '35 – 55 т.',
            'Диаметр шланга',
            '32 мм',
            'Рабочее давление масла',
            '16 – 18 МПа',
            'Расход масла',
            '200 – 300 л/мин',
            'Частота ударов',
            '250 – 350 / в минуту'
          ]"
        />
        <product-download
          :items="[
            {
              href: '/pdf/hydraulic-breakers/Fxj475.pdf',
              icon: 'fluent:document-pdf-24-filled',
              name: 'Каталог запасных частей Furukawa FXJ-475'
            }
          ]"
        />
      </div>
      <product-contact
        title="Подобрать и купить гидромолот Furukawa FXJ-475 можно связавшись со специалистами:"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-8">
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="['/images/products/models/fxj-475/image1.png']"
        />
      </div>
    </template>
  </product-page-wrapper>
</template>
