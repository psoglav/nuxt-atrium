<script setup>
useHead({
  title: 'Запасные части Furukawa',
  meta: [
    {
      name: 'description',
      content:
        'Запчасти Furukawa Rock Drill от официального дистрибьютора в России'
    }
  ]
})
</script>

<template>
  <product-page-wrapper>
    <product-header
      title="ЗАПАСНЫЕ ЧАСТИ FURUKAWA ROCK DRILL"
      subtitle="от официального дистрибьютора"
    />
    <template #content>
      <img
        src="/images/products/gallery/spare-parts-furukawa.png"
        alt="ЗАПАСНЫЕ ЧАСТИ FURUKAWA ROCK DRILL"
        class="rounded-lg"
      />
      <br />
      <p>
        Оригинальные запасные части Furukawa – залог успеха и гарантия
        долговечного функционирования оборудования.
      </p>
      <p>
        Применяя оригинальные запасные части Furukawa, Заказчик может быть
        полностью уверен в надежности, которая подкрепляется гарантией от 6 до
        12 месяцев.
      </p>
      <p>
        Являясь официальным дистрибьютором Furukawa Rock Drill в России мы
        предлагаем цену на прямую от производителя, наличие запасных частей на
        складах и быструю доставку по всей территории России.
      </p>
      <br />
      <product-contact-form
        title="ПОДОБРАТЬ И КУПИТЬ ЗАПАСНЫЕ ЧАСТИ FURUKAWA"
      />
    </template>
    <template #models>
      <product-card
        path="/spare-parts-furukawa/drill-rigs-spare-parts"
        preview="/images/products/models/HCR-1500.jpg"
        title="Запчасти для буровых станков Furukawa серии DCR, серии HCR, T1AM, T2AM"
        show-more
      />
      <product-card
        path="/spare-parts-furukawa/hydraulic-breakers-spare-parts"
        preview="/images/products/models/hydraulic-breaker-spare-parts.jpg"
        title="Запчасти для гидромолотов Furukawa cерии FXJ, серии Fx, серии F"
        show-more
      />
    </template>
  </product-page-wrapper>
</template>
