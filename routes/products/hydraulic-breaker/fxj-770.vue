<script setup>
useHead({
  title: 'Гидромолот FURUKAWA FXJ-770',
  meta: [
    {
      name: 'description',
      content: 'Гидромолот Furukawa FXJ-770 для экскаватора: 26-39 т.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid models-auto-width>
    <product-header title="ГИДРОМОЛОТ FURUKAWA FXJ770" />
    <template #content>
      <p>
        Модель Fxj770 разработана для экскаваторов весом от 44 до 75 тонн.
        Благодаря прочной конструкции Fxj770 идеально подходит для использования
        на сносе, или для дробления и добычи на гранитных каменных карьерах.
        Качество продукции в сочетании с новой моноблочной конструкцией, новые
        стопорные штифты из Японии гарантируют более длительный срок службы, что
        значительно снижает общие затраты на техническое обслуживание. Fxj770
        предлагает уже хорошо известные и ценимые преимущества предыдущей
        линейки: антиблокировочный удар, регулируемый ход поршня, штуцер для
        центральной системы смазки (FRD Sencio Lubrico), подключение для работы
        под водой, предотвращение попадания пыли.
      </p>
      <div class="flex flex-wrap gap-8">
        <product-specification
          name="Furukawa FXJ-770"
          :items="[
            'Эксплуатационная масса',
            '4790 кг',
            'Высота',
            '3965 мм',
            'Диаметр рабочей пики',
            '190 мм',
            'Вес экскаватора',
            '44 – 75 т.',
            'Диаметр шланга',
            '32 мм',
            'Рабочее давление масла',
            '16 – 18 МПа',
            'Расход масла',
            '250 – 340 л/мин',
            'Частота ударов',
            '250 – 330 / в минуту'
          ]"
        />
        <product-download
          :items="[
            {
              href: '/pdf/hydraulic-breakers/Fxj770.pdf',
              icon: 'pdf',
              name: 'Каталог запасных частей Furukawa FXJ-770'
            }
          ]"
        />
      </div>
      <product-contact
        title="Подобрать и купить гидромолот Furukawa FXJ-770 можно связавшись со специалистами:"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-8">
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="['/images/products/models/fxj-770/image1.png']"
        />
      </div>
    </template>
  </product-page-wrapper>
</template>
