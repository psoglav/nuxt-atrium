<script setup>
const contacts = ref([
  {
    name: 'Отдел продаж буровых станков Furukawa',
    email: 'an@mining-tools.info',
    phone: '8 (914) 067 62-76'
  },
  {
    name: 'Отдел продаж бурового инструмента',
    email: 'ar@mining-tools.info',
    phone: '8 (964) 443 26-76'
  },
  {
    name: 'Отдел сервисного обслуживания',
    email: 'bv@mining-tools.info',
    phone: '8 (914) 325 89-13'
  },
  {
    name: 'Бухгалтерия',
    email: 'buhsrsprim@gmail.com'
  }
])
</script>

<template>
  <section class="contacts">
    <product-header
      title="КОНТАКТЫ"
      subtitle='Общество с ограниченной ответственностью "Атриум" (ИНН: 2537087419 КПП: 253701001)'
      :logo="false"
    />
    <div class="contact-cards-wrapper">
      <div class="contacts-wrapper contacts-wrapper--primary">
        <div class="contact-item">
          <ui-icon name="office" size="2.4" />
          <div class="contact-item__content">
            <h1 class="contact-item__title text-2xl">Головной офис</h1>
            <h3 class="contact-item__text">
              690012, Россия, Приморский край, г. Владивосток, ул. Очаковская,
              д.5, кб 109.
            </h3>
          </div>
        </div>
        <div class="contact-item">
          <ui-icon name="phone-o" size="2.2" />
          <div class="contact-item__content">
            <h1 class="contact-item__title text-2xl">
              <a href="tel:74232576701">+7 (423) 257 67-01</a>
            </h1>
          </div>
        </div>
        <div class="contact-item">
          <ui-icon name="email" size="2" />
          <div class="contact-item__content">
            <h1 class="contact-item__title text-2xl">
              <a href="mail-to:info@mining-tools.info">info@mining-tools.info</a>
            </h1>
          </div>
        </div>
      </div>
      <div class="contacts-wrapper contacts-wrapper--secondary">
        <div
          class="contact-item--small"
          v-for="(contact, i) in contacts"
          :key="i"
        >
          <h4>{{ contact.name }}:</h4>
          <div class="sm-contact-wrapper">
            <div class="sm-contact-item" v-if="contact.phone">
              <ui-icon name="phone-o" size="1" />
              <a href="tel:74232576701">{{ contact.phone }}</a>
            </div>
            <div class="sm-contact-item">
              <ui-icon name="email" size="1" />
              <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#map {
  height: 100%;
}
.contacts {
  .contact-cards-wrapper {
    @apply w-full pt-20 flex gap-8 flex-wrap justify-center lg:justify-between;
  }
  &-wrapper {
    color: #3b3b3c;
    @apply flex flex-col gap-y-10 rounded-2xl px-8 sm:px-14 py-10 h-fit;
    box-shadow: inset 0px 85px 80px rgba(0, 0, 0, 0.07 * 0.1),
      inset 0px 35.511px 33.4221px rgba(0, 0, 0, 0.0503198 * 0.1),
      inset 0px 18.9859px 17.869px rgba(0, 0, 0, 0.0417275 * 0.1),
      inset 0px 10.6433px 10.0172px rgba(0, 0, 0, 0.035 * 0.1),
      inset 0px 5.65259px 5.32008px rgba(0, 0, 0, 0.0282725 * 0.1),
      inset 0px 2.35217px 2.21381px rgba(0, 0, 0, 0.0196802 * 0.1),
      0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0143771),
      0px 22.3363px 17.869px rgba(0, 0, 0, 0.0119221),
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.01),
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.00807786),
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.00562291);
    a {
      @apply hover:text-accent transition-colors;
    }
    &--primary {
      @apply gap-y-10;
    }
    &--secondary {
      @apply w-full xl:flex-wrap gap-y-10 gap-x-20 xl:max-h-64;
    }
  }
  .contact-item {
    @apply flex items-center gap-6;

    &__content {
      @apply flex flex-col h-full justify-between max-w-lg gap-y-2;
    }
    &__title {
      @apply uppercase;
    }
    &__text {
      @apply font-medium;
    }
    .icon {
      @apply text-accent text-sm;
    }
    &--small {
      @apply flex flex-col gap-2;
      h4 {
        @apply uppercase text-lg;
      }
      a {
        @apply font-semibold whitespace-nowrap;
      }
      .sm-contact-wrapper {
        @apply flex justify-between flex-wrap gap-x-4;
      }
      .sm-contact-item {
        @apply flex items-center gap-2;
      }
    }
  }
}
</style>
