<template>
  <div class="advantages-section--container">
    <img src="/images/background/page-divider.svg" class="w-full scale-105" />
    <section class="advantages-section">
      <div class="section__title">
        <h1>
          КОМПАНИЯ <br />
          <span class="brand-name text-5xl">АТРИУМ</span>
        </h1>
        <h3>
          — ПОСТАВЩИК <span class="brand-name">НАДЁЖНОГО</span> И
          <span class="brand-name">ВЫСОКОТЕХНОЛОГИЧНОГО</span> БУРОВОГО
          ОБОРУДОВАНИЯ
        </h3>
      </div>
      <h3 class="uppercase text-center text-4xl font-medium">
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
              <span class="brand-name">СЕРВИСНАЯ СЛУЖБА</span>
            </h4>
          </div>
        </div>
        <div class="advantages-section__item">
          <div class="advantages-section__icon">
            <ui-icon name="workers" size="3.5" />
          </div>
          <div class="advantages-section__text">
            <h4>
              <span class="brand-name">КВАЛИФИЦИРОВАННЫЕ</span><br />
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
              <span class="brand-name">НАША СИЛА</span><br />
              - взаимоотношения с заказчиками
            </h4>
          </div>
        </div>
      </div>
    </section>
    <img
      src="/images/background/page-divider.svg"
      class="w-full rotate-180 scale-105"
    />
  </div>
</template>

<style lang="scss">
.advantages-section {
  @apply flex  flex-col content-center justify-center  gap-12;

  * {
    z-index: 1;
  }

  &--container {
    @apply w-full bg-black text-white flex flex-col gap-y-4 relative overflow-hidden;
  }

  .brand-name {
    @apply font-bold text-accent;
    background: -webkit-linear-gradient(0deg, #3a0200, #e30613, #3a0200);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__wrapper {
    @apply flex gap-20 justify-center w-full flex-wrap;
    padding: 0 1rem;
  }

  &__item {
    @apply flex justify-between items-center gap-4;
    h4 {
      @apply text-xl font-medium;
    }
  }

  &__icon {
    .icon {
      display: grid;
      place-content: center;
      width: 6rem;
      height: 6rem;
      border: 2px #f2f2f222 solid;
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
      gap: 2rem;
    }
    &__text {
      gap: 2rem;
    }
  }
}
</style>
