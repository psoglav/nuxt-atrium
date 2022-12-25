<script setup>
useHead({
  title: 'Запасные части для буровых Furukawa',
  meta: [
    {
      name: 'description',
      content:
        'Запчасти для буровых установок Furukawa DCR 20, DCR22, HCR-1200, HCR-1500, HCR-1800.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper>
    <product-header title="Запчасти для буровых станков Furukawa" />
    <template #content>
      <product-advantages
        :items="[
          'Сервисные наборы 250,500,1000,1500,2000 часов.',
          'Рем. комплекты гидравлических систем и комплектующие.',
          'Рем. комплекты пневматических систем и комплектующие.',
          'Рем. комплекты электрических систем и комплектующие.',
          'Гидромоторы.',
          'Компрессоры и рем.комплекты.',
          'Рем. комплекты и запасные части для гидроперфораторов Furukawa HD.',
          'Рем. комплекты и запасные части для гидравлических вращателей Furukawa.',
          'Элементы ходовой части.',
          'РВД.',
          'Расходные материалы.'
        ]"
      />
      <br />
      <product-contact-form
        title="ПОДОБРАТЬ И КУПИТЬ ЗАПАСНЫЕ ЧАСТИ ДЛЯ БУРОВЫХ СТАНКОВ FURUKAWA:"
      />
    </template>
    <template #models>
      <img
        src="/images/products/gallery/spare-parts-drill-rigs.jpeg"
        alt="Запчасти для буровых станков Furukawa"
        style="max-width: 40rem"
        class="rounded-lg"
      />
    </template>
  </product-page-wrapper>
</template>
