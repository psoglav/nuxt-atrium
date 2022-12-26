<script setup>
defineProps({
  show: Boolean,
})
</script>

<template>
  <div class="modal" data-theme="light">
    <transition name="fade">
      <div class="modal__overlay" v-if="show" @click="$emit('close')"></div>
    </transition>
    <transition name="modal-popup">
      <div class="modal__card" v-if="show">
        <div class="modal__card--title">
          <slot name="title"></slot>
          <div class="modal__card--close" @click="$emit('close')">
            <icon icon="ion:close-outline" width="24px" />
          </div>
        </div>
        <div class="modal__card--content">
          <slot name="content"></slot>
        </div>
        <div class="modal__card--actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.modal-popup {
  &-enter-active,
  &-leave-active {
    transition: all 0.2s $easeInOutCirc;
  }
  &-leave-from,
  &-enter-to {
    transform: scale(1) translate(-50%, -50%);
  }

  &-enter-from,
  &-leave-to {
    transform: scale(0.8) translate(-50%, -50%) !important;
    opacity: 0;
  }
}

.modal {
  z-index: 100;
  &__overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--fg-12);
  }
  &__card {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 2.5rem;
    min-width: 20rem;
    max-width: 30rem;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    height: fit-content;
    border-radius: 1rem;
    background-color: var(--bg);
    max-height: 100vh;
    color: var(--fg);
    &--title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      font: 500 1.2rem Inter;
      height: max-content;
      user-select: none;
    }
    &--content {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    &--actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      height: max-content;
    }
    &--close {
      position: absolute;
      top: -2rem;
      right: -6.5rem;
      width: 4rem;
      height: 4rem;
      display: grid;
      place-items: center;
      color: var(--bg-10);
      transition: all 0.2s $easeInOutCirc;
      cursor: pointer;
      &::after {
        content: '';
        position: absolute;
        width: 75%;
        height: 75%;
        background-color: var(--bg-3);
        transform: scale(0.7);
        opacity: 0;
        transition: all 0.2s $easeInOutCirc;
        border-radius: 100%;
      }
      &:hover {
        color: var(--bg);
        &::after {
          opacity: 1;
          transform: none;
        }
      }
    }
  }
}
</style>
