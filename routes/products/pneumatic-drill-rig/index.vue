<script setup>
useHead({
  title: 'Пневматические буровые установки Furukawa',
  meta: [
    {
      name: 'description',
      content: 'Пневматические буровые установки Furukawa для бурения в карьере'
    }
  ]
})
</script>

<template>
  <product-page-wrapper>
    <product-header title="ПНЕВМАТИЧЕСКИЕ БУРОВЫЕ СТАНКИ FURUKAWA" />
    <template #content>
      <img
        src="/images/products/gallery/pneumatic-drill-rig.png"
        alt="ПНЕВМАТИЧЕСКИЕ БУРОВЫЕ СТАНКИ FURUKAWA"
        style="max-width: 40rem"
        class="rounded-lg"
      />
      <br />
      <h3 class="mt-2">
        Пневматические буровые станки Furukawa PCR200 оборудованные
        пневматическим перфоратором
      </h3>
      <p>
        Буровые Furukawa PCR200 идеально подходят для бурения на открытых горных
        работах и добычи камня. На гусеничной буровой установке PCR200 легко
        получить доступ к органам управления передвижением и бурением,
        расположенным с левой стороны машины. Удлинитель направляющей регулирует
        положение основания направляющей, что обеспечивает оптимальное сцепление
        с землей на склонах и неровных поверхностях. С помощью высокочастотного
        и скоростного пневмоперфоратора можно бурить скважины диаметром до 102
        мм. Для выполнения работ в разных условиях на установке можно
        использовать как погружной пневмоударник, так и перфоратор. Благодаря
        компактной конструкции данную машину можно легко перемещать на большие
        расстояния. Низко расположенный центр тяжести делает ее более устойчивой
        и простой в эксплуатации, ей легко управлять на крутых подъемах и
        неровной местности. Для работы требуется всего 1 оператор. Работа станка
        осуществляется при помощи отдельного компрессора.
      </p>
      <br />
      <product-advantages
        title="Преимущества пневматических буровых установок Furukawa PCR-200:"
        :items="[
          'Самый простой станок из всех мировых линеек бурового оборудования.',
          'Производится в Японии.',
          'Модель PCR200 производится более 50 лет. За 50 лет продано более 1000 буровых установок PCR200.',
          'За 50 лет не получено не одной заявки по гарантии.',
          'Бурение PCR200 является на сегодняшний день самым дешевым. Минимум компонентов для обслуживания. Вся работа станка осуществляется от отдельного компрессора. ',
          'Может применяться как и на карьерах, разрезах, строительных площадках, так и на подземных рудниках и шахтах.',
          'Станки PCR 200  успешно зарекомендовали себя в условиях низких температур. (Бурение производилось при температурах ниже 45 градусов).'
        ]"
      />
      <br />
      <product-contact
        title="Подобрать и купить пневматические  буровые установки FURUKAWA PCR-200 можно связавшись со специалистами:"
      />
    </template>
    <template #models>
      <product-card
        path="/pneumatic-drill-rig/pcr-200"
        title="FURUKAWA PCR-200"
        preview="/images/products/models/PCR-200.jpg"
        :specs="[
          ['Диаметр бурения', '64-102 мм'],
          ['Глубина бурения', 'до 12 м']
        ]"
        show-more
      />
    </template>
  </product-page-wrapper>
</template>
