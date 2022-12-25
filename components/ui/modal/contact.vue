<script setup>
import { computed } from 'vue'
import { useApp } from '@/stores/app'

import Modal from './Modal.vue'
import Button from '@/components/button/Button.vue'
import Input from '@/components/input/Input.vue'

const app = useApp()
const showContactUs = computed(() => app.contactUsModal)
</script>

<template>
  <Modal :show="showContactUs" @close="app.toggleContactUsModal">
    <template #title>{{ $t('contact.call') }}</template>
    <template #content>
      <div class="flex flex-col gap-4 w-[20rem]">
        <Input :label="$t('form.name')" placeholder="Type your name" />
        <Input :label="$t('form.phone')" placeholder="Type your phone number" />
      </div>
    </template>
    <template #actions>
      <Button no-blur uppercase primary>{{ $t('form.send') }}</Button>
    </template>
  </Modal>
</template>
