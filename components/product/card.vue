<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'

export interface Props {
  path?: string
  caption?: string
  preview: string
  title: string
  specs?: [string, string][]
  showMore?: boolean
  nowrap?: boolean
}

defineProps<Props>()

const loading = ref(false)
const key = ref(parseInt(getCurrentInstance()?.vnode.key as string) || 0)
</script>

<template>
  <div
    class="product-card animate__animated animate__fadeIn animate__fast"
    :class="{
      'has-slot': $slots.default,
      disabled: !path,
      nowrap
    }"
    :style="{ animationDelay: `${key / 20}s` }"
  >
    <div class="product-card__loading-overlay" v-show="loading">
      <ui-icon name="circle-notch" spin size="5" />
    </div>
    <nuxt-link
      class="product-card__link"
      :to="path ? '/products' + path : ''"
      no-prefetch
      @click="path ? (loading = true) : null"
    >
      <img :src="preview" />
      <div class="product-card__caption" v-if="caption">
        {{ caption }}
      </div>
      <h4 class="product-card__title">{{ title }}</h4>
      <div class="product-card__specs" v-if="specs">
        <div
          class="product-card__specs-item"
          v-for="(spec, key) of specs"
          :key="key"
        >
          <p class="product-card__specs-item--name">
            {{ spec[0] }}
          </p>
          <p class="product-card__specs-item--value text-dark-accent">
            {{ spec[1] }}
          </p>
        </div>
      </div>
      <div class="product-card__more" v-if="showMore">ПОДРОБНЕЕ</div>
    </nuxt-link>
    <div class="product-card__content" v-if="$slots.default">
      <div class="product-card__slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root {
  --animate-delay: 0.1s;
}

.product-card {
  @apply w-full h-full overflow-hidden select-none bg-white relative flex items-center flex-col gap-2;
  border: 2px #10092c0c solid;
  border-radius: 2rem;
  transition: all 0.5s $easeOutCirc;
  font-family: Inter;
  max-width: 35rem;
  box-shadow: inset 0px 85px 80px rgba(0, 0, 0, 0.07 * 0.2),
    inset 0px 35.511px 33.4221px rgba(0, 0, 0, 0.0503198 * 0.2),
    inset 0px 18.9859px 17.869px rgba(0, 0, 0, 0.0417275 * 0.2),
    inset 0px 10.6433px 10.0172px rgba(0, 0, 0, 0.035 * 0.2),
    inset 0px 5.65259px 5.32008px rgba(0, 0, 0, 0.0282725 * 0.2),
    inset 0px 2.35217px 2.21381px rgba(0, 0, 0, 0.0196802 * 0.2);

  &:hover:not(.disabled) {
    transition: all 0.1s $easeOutCirc;
    border-color: transparentize($accent, 0.8);
    background-color: lighten($accent, 26.5%);
    box-shadow: inset 0px 85px 80px rgba(0, 0, 0, 0.07 * 0.2),
      inset 0px 35.511px 33.4221px rgba(0, 0, 0, 0.0503198 * 0.2),
      inset 0px 18.9859px 17.869px rgba(0, 0, 0, 0.0417275 * 0.2),
      inset 0px 10.6433px 10.0172px rgba(0, 0, 0, 0.035 * 0.2),
      inset 0px 5.65259px 5.32008px rgba(0, 0, 0, 0.0282725 * 0.2),
      inset 0px 2.35217px 2.21381px rgba(0, 0, 0, 0.0196802 * 0.2),
      0px 85px 80px rgba(0, 0, 0, 0.07),
      0px 35.511px 33.4221px rgba(0, 0, 0, 0.0503198),
      0px 18.9859px 17.869px rgba(0, 0, 0, 0.0417275),
      0px 10.6433px 10.0172px rgba(0, 0, 0, 0.035),
      0px 5.65259px 5.32008px rgba(0, 0, 0, 0.0282725),
      0px 2.35217px 2.21381px rgba(0, 0, 0, 0.0196802);
  }

  @include sm-block {
    height: fit-content;
    .icon--arrow-forward {
      opacity: 1 !important;
      transform: none !important;
    }
    &:hover {
      transform: none;
      border-color: transparentize($accent, 0.8);
      background-color: lighten($accent, 26.5%);
      box-shadow: inset 0px 85px 80px rgba(0, 0, 0, 0.07 * 0.2),
        inset 0px 35.511px 33.4221px rgba(0, 0, 0, 0.0503198 * 0.2),
        inset 0px 18.9859px 17.869px rgba(0, 0, 0, 0.0417275 * 0.2),
        inset 0px 10.6433px 10.0172px rgba(0, 0, 0, 0.035 * 0.2),
        inset 0px 5.65259px 5.32008px rgba(0, 0, 0, 0.0282725 * 0.2),
        inset 0px 2.35217px 2.21381px rgba(0, 0, 0, 0.0196802 * 0.2),
        0px 85px 80px rgba(0, 0, 0, 0.07 * 0.4),
        0px 35.511px 33.4221px rgba(0, 0, 0, 0.0503198 * 0.4),
        0px 18.9859px 17.869px rgba(0, 0, 0, 0.0417275 * 0.4),
        0px 10.6433px 10.0172px rgba(0, 0, 0, 0.035 * 0.4),
        0px 5.65259px 5.32008px rgba(0, 0, 0, 0.0282725 * 0.4),
        0px 2.35217px 2.21381px rgba(0, 0, 0, 0.0196802 * 0.4);
    }
  }

  &__loading-overlay {
    @apply absolute z-10 inset-0 w-full h-full grid place-content-center pointer-events-none;
    background-color: #00000011;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    -moz-backdrop-filter: blur(5px);

    .icon {
      color: white;
    }
  }

  &__link {
    @apply flex flex-col w-full items-center gap-3 py-6 px-6 transition-colors;
    img {
      @apply w-64 sm:w-auto sm:h-[8rem] md:h-[12rem];
      mix-blend-mode: multiply;
      object-fit: contain;
      transition: transform 0.5s $easeOutCirc;
    }

    h4 {
      @apply w-full text-center;
    }
  }

  &.disabled {
    @apply cursor-auto select-text;
  }

  &:not(.disabled) &__link:hover &__title {
    @apply text-accent;
  }
  &:not(.disabled) &__link:hover &__more {
    @apply opacity-100;
  }

  &__caption {
    @apply opacity-50 font-medium text-sm text-center;
  }

  &__content {
    @apply w-full px-4;
    h1 {
      font: 600 1.1rem Inter;
      transition: color 0.2s $easeOutCirc;
    }
  }

  &__slot {
    @apply pb-6 flex flex-col flex-wrap max-h-40 gap-x-4;
  }

  &.nowrap &__slot {
    @apply flex-nowrap;
    max-height: max-content;
  }

  &.has-slot &__link {
    @apply pb-0;
  }

  &__specs {
    @apply flex flex-col w-full;
    &-item {
      @apply flex gap-2 justify-between;
      opacity: 0.7;
      padding: 0.35rem 0;
      p {
        text-indent: 0.25rem;
        font: 400 0.9rem Inter;
      }
      &:nth-child(even) {
        background: linear-gradient(
          90deg,
          transparent 0%,
          var(--fg-2) 25%,
          var(--fg-2) 75%,
          transparent 100%
        );
      }
      &--name {
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 15rem;
      }
      &--value {
        white-space: nowrap;
      }
    }
  }

  &:hover:not(.disabled) &__link img {
    transition: transform 0.1s $easeOutCirc;
    transform: scale(1.05);
  }

  &:hover:not(.disabled) &__content h1 {
    color: darken($accent, 5);
  }

  &__more {
    @apply opacity-50 text-sm font-semibold text-center mt-2 px-4 rounded-lg;
  }
}
</style>
