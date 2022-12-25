<script setup>
import { ref } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'text',
    validator(value) {
      return ['text', 'tel', 'email'].includes(value)
    },
  },
  label: String,
  width: {
    type: String,
    default: '100%',
  },
})

const value = ref('')
</script>

<template>
  <div
    class="input"
    :class="{ 'input--empty': !value }"
    :data-label="label"
    :style="{ width }"
  >
    <input
      type="text"
      :placeholder="label"
      v-model="value"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.input {
  position: relative;
  font-family: Inter;
  &::before {
    position: absolute;
    z-index: 1;
    font-size: 0.7rem;
    left: 0.75rem;
    top: 0.2rem;
    font-weight: 600;
    content: attr(data-label);
    color: var(--fg-10);
    text-transform: uppercase;
  }
  &--empty::before {
    display: none;
  }
  input {
    padding: 0.6rem 0.75rem;
    width: 100%;
    border-radius: 0.75rem;
    padding-top: 1.15rem;
    background-color: var(--fg-2);

    &::placeholder {
      color: var(--fg-10);
    }

    &:placeholder-shown {
      padding-top: 0.6rem;
    }
    &:focus {
      border: none;
      outline-color: $accent;
    }
  }
}
</style>
