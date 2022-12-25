<script setup>
defineProps({
  pinned: Boolean,
  hidden: Boolean
})
</script>

<template>
  <div
    :class="[
      'header-affix',
      {
        'header-affix--pinned': pinned,
        'header-affix--hidden': hidden
      }
    ]"
  >
    <brand-socials />
    <contacts-list />
  </div>
</template>

<style lang="scss">
.header-affix {
  font: 600 0.9rem Arimo;
  width: 100%;
  padding: 0 2.5rem;
  justify-content: space-between;
  background-color: black;
  height: 0rem;
  transition: height 0.2s ease;
  z-index: 1;
  display: flex;
  overflow: hidden;

  &--pinned {
    height: 2.2rem;
  }

  @include to($break_topbar) {
    display: flex;
    height: 2.2rem;
  }

  @include xs-block() {
    padding: 0 1rem;
    .contacts {
      gap: 0.5rem !important;
    }
  }

  &--hidden {
    height: 0rem;
  }

  .contacts-list,
  .socials {
    display: flex;
    gap: 0.5rem;

    &:not(.socials) {
      gap: 2rem;
    }

    &__item {
      display: flex;
      align-items: center;
      color: #ffffffaa;
      text-decoration: none;
      &:hover {
        color: white;
      }
      .icon {
        padding: 5px;
      }
    }
  }
}
</style>
