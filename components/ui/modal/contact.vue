<script setup>
import { useApp } from '@/store'

const app = useApp()
const showContactUs = computed(() => app.contactUsModal)
</script>

<template>
  <ui-modal :show="showContactUs" @close="app.toggleContactUsModal">
    <template #title>{{ $t('contact.call') }}</template>
    <template #content>
      <div class="flex flex-col gap-4 w-[20rem]">
        <ui-input :label="$t('form.name')" placeholder="Type your name" />
        <ui-input :label="$t('form.phone')" placeholder="Type your phone number" />
      </div>
    </template>
    <template #actions>
      <ui-button no-blur uppercase primary>{{ $t('form.send') }}</ui-button>
    </template>
  </ui-modal>
</template>
