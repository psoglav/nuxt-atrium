<script setup>
useHead({
  title: 'Буровые пневмоударные коронки  ATRIUM',
  meta: [
    {
      name: 'description',
      content: 'Продажа буровых коронок пневмоударных Atrium (DHD, QL, MISSION)'
    }
  ]
})
</script>

<template>
  <product-page-wrapper no-grid>
    <product-header title="БУРОВЫЕ ПНЕВМОУДАРНЫЕ КОРОНКИ" :logo="false" />
    <template #content>
      <img
        src="/images/products/gallery/dth-bits-preview.png"
        alt="ПНЕВМОУДАРНИКИ ДЛЯ БУРЕНИЯ ВЗРЫВНЫХ СКВАЖИН"
        style="max-width: 40rem"
        class="rounded-lg w-full"
      />
      <br />
      <h3>ПНЕВМОУДАРНИКИ ДЛЯ БУРЕНИЯ ВЗРЫВНЫХ СКВАЖИН</h3>
      <p>
        ООО «Атриум» предлагает широкий диапазон буровых коронок собственного
        производства «ATRIUM» для всех возможных применений. Каждая коронка
        изготавливается из высококачественной легированной стали, подвергается
        прецизионной механической обработке для получения идеальной формы
        корпуса, термообработке и поверхностному упрочнению сжатием для
        достижения требуемой твердости и сопротивления усталости соответственно,
        и оснащается высококачественными карбидо-вольфрамовыми штырями.
      </p>
      <p>
        <b>
          Самые важные критерии выбора коронки - долговечность коронки и
          скорость проходки.
        </b>
      </p>
      <br />
      <br />
      <product-contact
        title="Получить консультацию и купить буровые коронки для бурения взрывных скважин:"
      />
      <product-contact-form
        title="БУРОВЫЕ КОРОНКИ НА БУРОВЫЕ УСТАНОВКИ FURUKAWA, SANDVIK, ATLAS COPCO, EPIROC, MONTABERT, BOART LONGYEAR, KOKEN, TAMROCK, JUNJIN, SOOSAN, EVERDIGM, SINWARD, KAISHAN, HUATAI, RESEMIN и др."
      />
    </template>
    <template #models>
      <h2>БУРОВЫЕ КОРОНКИ ДЛЯ ПНЕВМОУДАРНИКОВ QL, DHD, MISSION (M).</h2>
      <br />
      <product-models-wrapper full-width relative>
        <product-card
          path="/dth-bits/m40"
          preview="/images/products/models/dth-bits.png"
          title="Буровые коронки для пневмоударников 4“ DHD340, QL40, MISSION 40 (М40)"
          show-more
        />
        <product-card
          path="/dth-bits/m50"
          preview="/images/products/models/dth-bits.png"
          title="Буровые коронки для пневмоударников 5“ DHD350, QL50, MISSION 50 (М50)"
          show-more
        />
        <product-card
          path="/dth-bits/m60"
          preview="/images/products/models/dth-bits.png"
          title="Буровые коронки для пневмоударников 6“ QL60, MISSION 60 (М60)"
          show-more
        />
        <product-card
          path="/dth-bits/m80"
          preview="/images/products/models/dth-bits.png"
          title="Буровые коронки для пневмоударников 8“ QL80, MISSION 80 (М80)"
          show-more
        />
      </product-models-wrapper>
      <br />
      <br />
      <h2>ПОДБОР БУРОВЫХ КОРОНОК ДЛЯ ПНЕВМОУДАРНИКОВ</h2>
      <br />
      <product-models-wrapper full-width relative>
        <product-card
          preview="/images/products/dth-bits/image4.png"
          title="FF – Плоская фронтальная часть"
          nowrap
        >
          <li>
            Обычная конструкция торца долота, применяемая на мировом рынке
          </li>
          <li>Превосходная производительность</li>
          <li>Твердые и очень твердые породы</li>
          <li>Сплошные однородные пласты породы</li>
        </product-card>
        <product-card
          preview="/images/products/dth-bits/image4.png"
          title="CC – Вогнутая фронтальная часть"
          nowrap
        >
          <li>
            Обычная конструкция торца долота, применяемая на мировом рынке
          </li>
          <li>Хороший контроль прямолинейности скважины</li>
          <li>Твердые породы и породы средней твердости</li>
          <li>Пласты породы с разломами и наклонным залеганием</li>
        </product-card>
        <product-card
          preview="/images/products/dth-bits/image2.png"
          title="DC – Фронтальная часть с утопленным центром"
          nowrap
        >
          <li>Хорошо подходит для большинства задач</li>
          <li>Хороший контроль прямолинейности скважины</li>
          <li>Скальные породы средней твердости</li>
          <li>Сплошные или имеющие трещины неоднородные пласты породы</li>
        </product-card>
        <product-card
          preview="/images/products/dth-bits/image6.png"
          title="HFDC – Усиленная фронтальная часть с утопленным центром"
          nowrap
        >
          <li>Хорошо подходит для большинства задач</li>
          <li>Хороший контроль прямолинейности скважины</li>
          <li>Твердые скальные породы</li>
          <li>Сплошные или имеющие трещины неоднородные пласты породы</li>
        </product-card>
        <product-card
          preview="/images/products/dth-bits/image5.png"
          title="CV – Выпуклая фронтальная часть"
          nowrap
        >
          <li>Конструкция, широко используемая на мировом рынке</li>
          <li>Хорошая скорость проходки</li>
          <li>Твердые породы и породы средней твердости</li>
          <li>Сланцевые породы и песчаники</li>
        </product-card>
      </product-models-wrapper>
    </template>
  </product-page-wrapper>
</template>
