<template>
  <ui-form v-bind="$attrs">
    <ui-input :label="$t('form.company')" />
    <ui-input :label="$t('form.name')" />
    <ui-input :label="$t('form.phone')" />
    <ui-input label="Email" />
    <br />
    <ui-button class="self-end" primary>ОТПРАВИТЬ ЗАПРОС</ui-button>
  </ui-form>
</template>
