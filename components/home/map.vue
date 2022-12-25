<template>
  <div class="map-section--container">
    <section class="map-section">
      <img src="/images/svg/map.svg" class="pp" />
      <img src="/images/svg/map.svg" class="parallax" />
    </section>
  </div>
</template>

<style lang="scss">
.map-section {
  padding: 0 !important;

  &--container {
    @apply w-full  text-white py-4;
    background: linear-gradient(0deg, #010101 0%, white 50%);
  }

  @apply flex flex-col w-full relative;
  align-items: center;

  img {
    width: 60%;
    z-index: 1;
  }

  .pp {
    transform: scale(1.2) translateY(-5%);
  }

  .parallax {
    position: absolute;
    filter: blur(50px);
    opacity: 0.5;
    z-index: 0;
  }
}
</style>
