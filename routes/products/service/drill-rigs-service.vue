<script setup>
useHead({
  title: 'Сервисное обслуживание и ремонт буровых станков Furukawa',
  meta: [
    {
      name: 'description',
      content: 'Сервис и ремонт буровых станков Furukawa.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper>
    <product-header
      title="СЕРВИСНОЕ ОБСЛУЖИВАНИЕ И РЕМОНТ БУРОВЫХ СТАНКОВ FURUKAWA"
    />
    <template #content>
      <product-advantages
        :items="[
          'Обучение персонала.',
          'Монтаж и ввод оборудования в эксплуатацию.',
          'Диагностика.',
          'Гарантийное обслуживание.',
          'Постгарантийное обслуживание.',
          'Мониторинг работы оборудование.',
          'Плановый ремонт оборудования.',
          'Аварийный ремонт оборудования.',
          'Капитальный ремонт оборудования.'
        ]"
      />
      <br />
      <product-contact
        title="Получить консультацию и записаться на сервисное обслуживание оборудования Furukawa:"
      />
    </template>
    <template #models>
      <img
        src="/images/products/gallery/service-drill-rigs.png"
        alt="СЕРВИСНОЕ ОБСЛУЖИВАНИЕ И РЕМОНТ БУРОВЫХ СТАНКОВ FURUKAWA"
        style="max-width: 40rem"
        class="rounded-lg"
      />
    </template>
  </product-page-wrapper>
</template>
