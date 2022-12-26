<template>
  <div class="socials" v-bind="$attrs">
    <a
      class="socials__item whatsapp"
      href="https://wa.link/ulvcw8"
      target="_blank"
    >
      <icon icon="ant-design:whats-app-outlined" width="24px" />
    </a>
    <a
      class="socials__item insta"
      href="https://instagram.com/atrium_mining"
      target="_blank"
    >
      <icon icon="mdi:instagram" width="24px" />
    </a>
    <a
      class="socials__item youtube"
      href="https://www.youtube.com/channel/UCkiUGRVt5FWLgrgsZVMO0Bw"
      target="_blank"
    >
      <icon icon="mingcute:youtube-line" width="24px" />
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
