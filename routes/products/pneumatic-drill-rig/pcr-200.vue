<script setup>
useHead({
  title: 'Пневматическая буровая установка Furukawa PCR-200',
  meta: [
    {
      name: 'description',
      content:
        'Пневматические буровая установка Furukawa PCR-200 для бурения в карьере и на строительных площадках.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid models-auto-width>
    <product-header title="FURUKAWA PCR-200" />
    <template #content>
      <p>
        Мощная буровая установка PCR200 оборудована высокопроизводительным
        пневматическим перфоратором PD200. Установка демонстрирует высокую
        маневренность, исключительную простоту в эксплуатации на любых участках
        и имеет превосходные буровые характеристики, признанные лучшими для
        этого класса перфораторов. Для работы буровой установки PCR200 требуется
        отдельный компрессор с минимальным давлением 8 бар с минимальной
        производительностью 12-18 м3/мин. Пневматический перфоратор PCR200
        оснащен высокомощным и скоростным пневмомотором и независимым
        вращательным устройством. Гидравлические и пневматические контрольные
        клапаны расположены на блоках управления в наиболее доступных для
        оператора местах. Станок обеспечивает стабильное бурение в средних по
        крепости горных породах, скважин диаметром 64-102 мм различной глубины
        путем ручного наращивания буровых штанг.
      </p>
      <product-specification bold-values
        name="PCR-200"
        :items="[
          'Рабочий вес',
          '5,100 кг',
          'Длина в рабочем положении	',
          '5, 400 мм',
          'Ширина в рабочем положении',
          '2,250 мм',
          'Высота в рабочем положении',
          '1,200 мм',
          'Модель гидроперфоратора',
          'PD200',
          'Производительность компрессора',
          '15.5 м3/мин',
          'Тип стрелы',
          'Фиксированная',
          'Применяемые буровые коронки',
          '64 - 102 мм',
          'Применяемые типы буровых штанг',
          '38H, 38R',
          'Тип применяемых резьб',
          'T38',
          'Длина применяемых штанг',
          '3,050 мм'
        ]"
      />
      <product-contact
        title="Подобрать и купить пневматический  буровой станок FURUKAWA PCR-200 можно связавшись со специалистами:"
      />
      <product-contact-form
        title="ПОДОБРАТЬ И КУПИТЬ ПНЕВМАТИЧЕСКИЙ БУРОВОЙ СТАНОК FURUKAWA PCR200"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-8">
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="['/images/products/models/pcr-200/image1.png']"
        />
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="[
            '/images/products/models/pcr-200/image3.png',
            '/images/products/models/pcr-200/image4.png',
            '/images/products/models/pcr-200/image5.png'
          ]"
        />
      </div>
    </template>
  </product-page-wrapper>
</template>
