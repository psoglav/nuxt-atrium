<template>
  <div class="contacts-list">
    <a class="contacts-list__item" href="mailto:info@mining-tools.info">
      <icon icon="ic:outline-email" width="20px" />
      <div class="contacts-list__value">info@mining-tools.info</div>
    </a>
    <a class="contacts-list__item" href="tel:+74232576701">
      <icon icon="ic:baseline-phone" width="20px" />
      <div class="contacts-list__value">+7 (423) 257 67 01</div>
    </a>
  </div>
</template>

<style lang="scss">
.contacts-list {
  gap: 0.5rem;
  display: flex;

  @include to($break_topbar) {
    display: none;
  }

  @include xs-block() {
    gap: 0;
    padding: 0 0.5rem;
    &__value {
      display: none;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    &:hover {
      color: #ffffffaa;
    }
    .icon {
      padding: 5px;
    }
  }
}
</style>
