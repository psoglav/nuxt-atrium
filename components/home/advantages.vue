<template>
  <div class="advantages-section--container">
    <img src="/images/background/page-divider.svg" class="w-full scale-105" />
    <section class="advantages-section">
      <div class="section__title">
        <h1>
          КОМПАНИЯ
          <span class="brand-name text-5xl">АТРИУМ</span>
        </h1>
        <h3>
          — ПОСТАВЩИК <span class="highlight">НАДЁЖНОГО</span> И
          <span class="highlight">ВЫСОКОТЕХНОЛОГИЧНОГО</span> БУРОВОГО
          ОБОРУДОВАНИЯ
        </h3>
      </div>
      <h3 class="projects-title">
        Более 100 успешно реализованных проектов в россии
      </h3>
      <div class="advantages-section__wrapper">
        <div class="advantages-section__item">
          <div class="advantages-section__icon">
            <ui-icon name="repair" size="3.5" />
          </div>
          <div class="advantages-section__text">
            <h4>
              Современная оснащенная<br />
              <span class="highlight">СЕРВИСНАЯ СЛУЖБА</span>
            </h4>
          </div>
        </div>
        <div class="advantages-section__item">
          <div class="advantages-section__icon">
            <ui-icon name="workers" size="3.5" />
          </div>
          <div class="advantages-section__text">
            <h4>
              <span class="highlight">КВАЛИФИЦИРОВАННЫЕ</span><br />
              кадры
            </h4>
          </div>
        </div>
        <div class="advantages-section__item">
          <div class="advantages-section__icon">
            <ui-icon name="handshake" size="3.5" />
          </div>
          <div class="advantages-section__text">
            <h4>
              <span class="highlight">НАША СИЛА</span><br />
              - взаимоотношения с заказчиками
            </h4>
          </div>
        </div>
      </div>
    </section>
    <div>
      <section class="map-section">
        <img src="/images/svg/map.svg" class="pp" />
        <img src="/images/svg/map.svg" class="parallax" />
      </section>
    </div>
    <!-- <img
      src="/images/background/page-divider.svg"
      class="w-full rotate-180 scale-105"
    /> -->
  </div>
</template>

<style lang="scss">
.advantages-section {
  @apply flex  flex-col content-center justify-center  gap-12;

  * {
    z-index: 1;
  }

  &--container {
    @apply w-full text-white flex flex-col gap-y-4 relative overflow-hidden pb-16 border-b border-gray-800;
    background-color: black;
  }

  .brand-name {
    @apply font-bold text-accent;
    background: -webkit-linear-gradient(0deg, #3a0200, #e30613, #3a0200);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .highlight {
    color: #e30613;
  }

  .projects-title {
    @apply uppercase text-center text-4xl font-medium my-8;
  }

  &__wrapper {
    @apply flex gap-x-20 gap-y-2 justify-center w-full flex-wrap;
    padding: 0 1rem;
  }

  &__item {
    @apply flex justify-between items-center gap-x-4 border-2 sm:border-0 border-gray-800 w-full sm:w-auto py-8 px-4 sm:p-0 bg-gray-900 sm:bg-opacity-0 rounded-2xl;
    h4 {
      @apply text-xl font-medium leading-4;
    }
  }

  &__icon {
    .icon {
      @apply sm:w-24 w-32;
      display: grid;
      place-content: center;
      aspect-ratio: 1/1;
      border: 2px #f2f2f2 solid;
      outline: 6px #f2f2f233 solid;
      border-radius: 100%;
      background-color: #000;
    }
  }

  &__text {
    @apply flex flex-col gap-2;
  }

  @include md-block() {
    &__wrapper {
      gap: 4rem;
    }
    &__item {
      gap: 0.8rem;
      flex-direction: column;
    }

    &__text {
      text-align: center;
    }
  }

  @include sm-block() {
    gap: 2rem;

    &__wrapper {
      gap: 2rem;
      padding: 0;
    }
    &__item {
      justify-content: center;
      margin: 0 auto;
      max-width: 30rem;
    }
    &__text {
      gap: 2rem;
    }
  }
}
.map-section {
  padding: 0 !important;

  &--container {
    @apply w-full  text-white py-4;
    // background: linear-gradient(0deg, #010101 0%, white 50%);
    background: black;
  }

  @apply flex flex-col w-full relative;
  align-items: center;

  img {
    width: 60%;
    z-index: 1;
  }

  .parallax {
    position: absolute;
    filter: blur(50px);
    opacity: 0.5;
    z-index: 0;
  }
}
</style>
