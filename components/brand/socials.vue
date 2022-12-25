<template>
  <div class="socials" v-bind="$attrs">
    <a
      class="socials__item whatsapp"
      href="https://wa.link/ulvcw8"
      target="_blank"
    >
      <ui-icon name="whatsapp" size="1.4" />
    </a>
    <a
      class="socials__item insta"
      href="https://instagram.com/atrium_mining"
      target="_blank"
    >
      <ui-icon name="insta" size="1.4" />
    </a>
    <a
      class="socials__item youtube"
      href="https://www.youtube.com/channel/UCkiUGRVt5FWLgrgsZVMO0Bw"
      target="_blank"
    >
      <ui-icon name="youtube" size="1.4" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.socials {
  display: flex;
  gap: 0.5rem;
  color: currentColor;

  &__item {
    display: flex;
    align-items: center;
    text-decoration: none;
    .icon {
      padding: 5px;
    }
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
