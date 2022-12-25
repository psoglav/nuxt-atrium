<script setup>
defineProps({
  uppercase: Boolean,
  primary: Boolean,
  loading: Boolean,
  disabled: Boolean,
  noBlur: Boolean,
})
</script>

<template>
  <div
    :class="[
      'button',
      {
        uppercase,
        'button--primary': primary,
        'button--no-blur': noBlur,
        'button--loading': loading,
        'button--disabled': disabled,
      },
    ]"
  >
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8"
    >
      <ui-icon spin name="circle-notch" size="2" v-if="loading" />
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.button {
  @apply w-max py-2 px-4 rounded-xl;

  border: 1px var(--fg-9) solid;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 0.9rem;
  user-select: none;
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  overflow: hidden;
  transition: background-color 0.25s $easeOutCirc,
    border-color 0.25s $easeOutCirc, color 0.25s $easeOutCirc;

  &--disabled {
    pointer-events: none;
    opacity: .3;
  }

  &:hover {
    transition: none;
    background-color: var(--fg-3);
    border: 1px var(--fg-4) solid;
  }

  &:active {
    color: var(--bg);
    background-color: var(--fg-4);
    box-shadow: none;
  }

  .icon {
    color: var(--bg);
  }

  &--loading {
    color: transparent !important;
  }

  &--primary {
    color: var(--bg);
    backdrop-filter: blur(0px);
    background-color: var(--fg);
    border-color: var(--fg);
    box-shadow: 0px 27px 39px rgba(0, 0, 0, 0.2 * 0.6),
      0px 11.28px 16.2933px rgba(0, 0, 0, 0.143771 * 0.6),
      0px 6.0308px 8.71116px rgba(0, 0, 0, 0.119221 * 0.6),
      0px 3.38082px 4.88341px rgba(0, 0, 0, 0.1 * 0.6),
      0px 1.79553px 2.59354px rgba(0, 0, 0, 0.0807786 * 0.6),
      0px 0.747159px 1.07923px rgba(0, 0, 0, 0.0562291 * 0.6);

    &:hover {
      transition: none;
      background-color: var(--fg-11);
      border-color: transparent;
    }

    &:active {
      color: var(--fg);
      background-color: var(--fg-9);
      border-color: transparent;
    }
  }

  &--no-blur {
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    -moz-backdrop-filter: blur(0px);
  }
}
</style>
