<script setup>
useHead({
  title: 'Furukawa DCR20',
  meta: [
    {
      name: 'description',
      content:
        'Буровая установка Furukawa DCR20 для бурения погружным пневмоударником.'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid models-auto-width>
    <product-header
      title="FURUKAWA DCR 20"
      subtitle="для бурения основных  взрывных вертикальных, наклонных, контурных буровых скважин диаметром 110 – 165 мм и глубиной бурения до 45 метров."
    />
    <template #content>
      <p>
        Furukawa DCR 20 надежный и многофункциональный буровой станок с
        погружным пневмоударником для масштабных карьерных открытых горных
        работ. Он создан для решения самых сложных задач в бурении и готов
        превзойти Ваши ожидания.
      </p>
      <p>
        Отличительная особенность станка – простота и надежность. Проверенная
        временем система управления на основе PLC, зарекомендовавший
        десятилетиями компрессор Airman и двигатель CAT даёт уверенность в
        бесперебойном бурении даже в самых сложных климатических и
        горно-геологических условиях.
      </p>
      <product-specification
        name="DCR-20"
        :items="[
          'Средняя производительность: 12 000 п.м. / месяц',
          'Подходит для: бурения мерзлых, средних и в высшей степени твердых горных пород с крепостью до 20 категории по шкале пф. Протодьяконова.',
          'Дизельный двигатель CATERPILLAR C13, 328 кВт / 2000 об / мин, с турбо надувом и водяным охлаждением, Евро 3.',
          'Система автоматической замены буровых труб карусельного типа, редуктор вращателя с приводом от гидромоторов. Буровой став оснащён  демпфирующим переходником. Односекционная мачта. Механизм сборки-разборки с регулировкой давления .',
          'Винтовой двухступенчатый компрессор AIRMAN PDSK 900, 24.3 м3/мин; 25 Бар / 2.5 Мпа.',
          'Система управления: релейное PLC ',
          'Двухступенчатая система пылеулавливания с сепаратором, самоочищающимся фильтром и подвижным колпаком пылеотсоса.',
          'Гидравлический податчик с цепным приводом и системой контроля усилия на буровой став, под буровые трубы L=5000 или 6000 мм; Ø=89-114 мм.',
          'LED освещение для работы в ночное время.',
          'Сервисная лебедка на податчике.',
          'Двойной гидролюнет буровых труб с разворотным столом.',
          'Измеритель углов и глубины бурения для быстрого и точного позиционирования.',
          'Гидравлический вращатель 3250 Н*м, с плавающим шпинделем и регулировкой скорости до 120 об/мин.',
          'Виброзащитная звукоизолированная кабина с обогревом и кондиционером, выполненная по стандартам ROPS и FOPS.',
          'Гидравлическая система: Kawasaki, 2 аксиально поршневых насоса с переменным потоком и 3 шестерёнчатых насоса. Электрический насос для заправки масла.',
          'Арктический пакет опций для эксплуатации до -40°С.   Соответствие ГОСТ 15150-69.',
          'Централизованная система смазки.',
          'Электрооборудование бурового станка выполнено в пылевлагозащищенном исполнении, исключающем проникновение рудничной пыли и предохраняющим его от воздействия атмосферы.',
          'Система автоматической смазки погружных пневмоударников.',
          'Габаритные размеры (ДхШхВ): 10.6 х 2.5 х 3.8 м',
          'Рабочий вес: 22 т	'
        ]"
      />
      <product-contact
        title="Подобрать и купить пневмоударный буровой станок FURUKAWA DCR20 можно связавшись со специалистами:"
      />
      <product-contact-form
        title="ПОДОБРАТЬ И КУПИТЬ ПНЕВМОУДАРНЫЕ БУРОВЫЕ СТАНКИ FURUKAWA DCR20 ДЛЯ БУРЕНИЯ ВЗРЫВНЫХ СКВАЖИН:"
      />
    </template>
    <template #models>
      <div class="flex flex-col gap-8">
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="[
            '/images/products/models/dcr-20/dcr-20-photo1.png',
            '/images/products/models/dcr-20/dcr-20-photo2.jpg',
            '/images/products/models/dcr-20/dcr-20-photo3.jpeg',
            '/images/products/models/dcr-20/dcr-20-photo4.jpg'
          ]"
        />
        <product-gallery
          :options="{ width: 640, height: 320 }"
          :images="[
            '/images/products/models/dcr-20/dcr-20-scheme1.png',
            '/images/products/models/dcr-20/dcr-20-scheme2.png',
            '/images/products/models/dcr-20/dcr-20-scheme3.png'
          ]"
        />
      </div>
    </template>
  </product-page-wrapper>
</template>
