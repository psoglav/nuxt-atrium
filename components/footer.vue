<template>
  <footer class="footer" data-theme="dark">
    <div class="footer__wrapper footer__wrapper--top">
      <div class="navigation flex-wrap">
        <div class="atrium">
          <brand-logo small />
          <div class="atrium__slogan">
            {{ $t('welcome.slogan') }}
          </div>
        </div>
        <div class="navigation__col">
          <div class="navigation__title">{{ $t('navigation.title') }}</div>
          <nuxt-link to="/">{{ $t('navigation.home') }}</nuxt-link>
          <nuxt-link to="/products">{{ $t('navigation.equipment') }}</nuxt-link>
          <nuxt-link to="/about">{{ $t('navigation.about') }}</nuxt-link>
          <nuxt-link to="/contacts">{{ $t('navigation.contacts') }}</nuxt-link>
        </div>
        <div class="navigation__col">
          <div class="navigation__title">Буровые установки</div>
          <nuxt-link to="/products/pneumatic-impact-drill-rig"
            >Перфораторные станки</nuxt-link
          >
          <nuxt-link to="/products/underground-drill-rig"
            >Подземные станки</nuxt-link
          >
          <nuxt-link to="/products/pneumatic-drill-rig"
            >Пневматические станки</nuxt-link
          >
          <nuxt-link to="/products">Гидромолоты FURUKAWA</nuxt-link>
          <nuxt-link to="/products">Запасные части FURUKAWA</nuxt-link>
          <nuxt-link to="/service">Сервисное обслуживание</nuxt-link>
        </div>
        <div class="navigation__col">
          <div class="navigation__title">Буровой инструмент</div>
          <nuxt-link to="/products">Пневмоударники высокого давления</nuxt-link>
          <nuxt-link to="/products">Буровые пневмоударные коронки</nuxt-link>
          <nuxt-link to="/products">Трехшарошечные долота</nuxt-link>
          <nuxt-link to="/products"
            >Буровой инструмент для RC бурения</nuxt-link
          >
          <nuxt-link to="/products">Буровые трубы и адаптеры</nuxt-link>
          <nuxt-link to="/service"
            >Гидроперфораторные буровые коронки</nuxt-link
          >
          <nuxt-link to="/service">Хвостовики гидроперфораторов</nuxt-link>
          <nuxt-link to="/service">Буровые перфораторные штанги</nuxt-link>
        </div>
      </div>
      <div class="footer__form">
        <ui-form title="СВЯЗАТЬСЯ С НАМИ">
          <ui-input :label="$t('form.company')" />
          <ui-input :label="$t('form.name')" />
          <ui-input :label="$t('form.phone')" />
          <ui-input label="Email" />
          <ui-button class="self-end">ОТПРАВИТЬ ЗАПРОС</ui-button>
        </ui-form>
      </div>
    </div>
    <div class="footer__wrapper footer__wrapper--bottom">
      <div class="copyright">
        © {{ new Date().getFullYear() }} ООО «Атриум». Все права защищены.
      </div>
      <div class="flex items-center gap-8">
        <brand-socials class="opacity-50" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: black;
  color: white;
  position: relative;
  width: 100%;
  font: 400 1rem Inter;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 2rem 0;
  overflow: hidden;
  background: center/cover no-repeat url('/images/background/footer-bg.jpg');

  .copyright {
    @apply self-center w-full;
    font-size: 0.8rem;
    opacity: 0.5;
  }

  &__wrapper {
    @apply px-8 flex gap-4;
    &--top {
      @apply flex-col-reverse md:flex-row w-full justify-between gap-y-10;
    }
    &--bottom {
      @apply flex-col-reverse sm:flex-row border-t border-gray-800 py-4;
    }
  }

  &__form {
    @apply flex justify-center w-full md:w-96;
  }

  .atrium {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    &__slogan {
      color: #ffffff88;
      font-weight: 400;
      width: 8rem;
      font-size: 0.9rem;
    }
  }

  .navigation {
    display: flex;
    gap: 5rem;

    &__title {
      @apply uppercase text-xs font-medium tracking-wider;
      margin-bottom: 1rem;
    }
    &__col {
      color: #ffffff88;
      display: flex;
      flex-direction: column;

      a {
        @apply text-sm font-normal;
        font-family: Inter;
        color: #ffffffaa;
        text-decoration: none;
        display: flex;
        padding: 0.25rem 0;
        align-items: center;
        gap: 0.1rem;

        &:hover {
          color: white;
          text-shadow: 0px 51px 80px rgba(255, 255, 255, 0.23),
            0px 23.5788px 36.9864px rgba(255, 255, 255, 0.170585),
            0px 13.4913px 21.1628px rgba(255, 255, 255, 0.14416),
            0px 8.18911px 12.8457px rgba(255, 255, 255, 0.124188),
            0px 4.9343px 7.74008px rgba(255, 255, 255, 0.105812),
            0px 2.74774px 4.31018px rgba(255, 255, 255, 0.0858404),
            0px 1.18178px 1.85378px rgba(255, 255, 255, 0.0594147);
        }
      }
    }
  }
}
</style>
