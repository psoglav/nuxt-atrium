<script setup>
useHead({
  title: 'Сервисное обслуживание и ремонт Furukawa',
  meta: [
    {
      name: 'description',
      content: 'Сервис и ремонт бурового оборудования и гидромолотов Furukawa'
    }
  ]
})
</script>

<template>
  <product-page-wrapper>
    <product-header title="СЕРВИСНОЕ ОБСЛУЖИВАНИЕ И РЕМОНТ FURUKAWA" />
    <template #content>
      <img
        src="/images/products/gallery/service-drill-rigs.png"
        alt="СЕРВИСНОЕ ОБСЛУЖИВАНИЕ И РЕМОНТ БУРОВЫХ СТАНКОВ FURUKAWA"
        style="max-width: 30rem"
        class="rounded-lg"
      />
      <br />
      <product-advantages
        title="Наши преимущества сервиса Furukawa:"
        :items="[
          'Сертифицированные специалисты прошедшие специализированное  обучение и сертификацию на заводах Furukawa.',
          'Полное техническое оснащение. Современные системы диагностики и оригинальные комплектующие к поставляемой технике позволяют решать любые вопросы, связанные с обслуживанием Furukawa.',
          'Оперативность. Полная укомплектованность штата позволяет нам  быстро реагировать на запрос заказчика, во избежание длительного простоя оборудования.'
        ]"
      />
      <product-advantages
        title="Предоставляемые услуги сервиса Furukawa:"
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
      <product-card
        path="/service/drill-rigs-service"
        preview="/images/products/models/HCR-1500.jpg"
        title="Обслуживание и ремонт буровых станков Furukawa"
        show-more
      />
      <product-card
        path="/service/hydraulic-breakers-service"
        preview="/images/products/models/hydraulic-breaker-spare-parts.jpg"
        title="Обслуживание и ремонт гидромолотов Furukawa"
        show-more
      />
    </template>
  </product-page-wrapper>
</template>
