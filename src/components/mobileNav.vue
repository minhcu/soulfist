<template>
  <Transition name="fade" appear>
    <div class="mobile-nav" @click="$emit('toggleMobileNav')" key="mobile">
      <Transition name="slide" appear>
        <div class="mobile-nav__body" @click.stop="" v-show="showChild">
          <div class="mobile-nav__logo">
            <router-link class="mobile-nav__logo__link" to="/">
              <img
                class="mobile-nav__logo__img"
                src="@/assets/logo.webp"
                alt="soulfist guide"
              />
            </router-link>
            <h4 class="mobile-nav__logo__heading">Soulfist Guide</h4>
          </div>
          <div class="mobile-nav__wrapper">
            <ul class="mobile-nav__list">
              <li
                class="mobile-nav__item"
                v-for="item in navItems"
                :key="item.to"
              >
                <router-link
                  class="mobile-nav__link"
                  :to="item.to"
                  :class="{ isActive: currentPath === item.to }"
                  @click="$emit('toggleMobileNav')"
                >
                  <span v-html="item.icon"></span>
                  <span>
                    {{ item.title }}
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script>
import { nav } from "@/compositionAPI/index.js";
export default {
  name: "mobileNav",
  props: {
    showChild: Boolean,
  },
  setup() {
    return {
      navItems: nav.navItems,
      currentPath: nav.currentPath,
    };
  },
};
</script>

<style lang="sass">
.mobile-nav
    display: block
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    background-color: rgba(0,0,0,.3)
    &__body
        width: 80%
        height: 100%
        background-color: #ffffff
        padding-top: 16px
        padding-left: 16px
    &__logo
        display: flex
        padding-top: 16px
        padding-left: 20px
        &__heading
            font-size: 24px
            margin-left: 12px
    &__list
        padding: 0
    &__link
        padding: 16px 0
        padding-left: 16px
        border-top-left-radius: 5px
        border-bottom-left-radius: 5px
        color: #333!important
        font-size: 16px
        text-decoration: none
        display: flex
        span
            font-size: 1.8rem
            &:first-child
                width: 20px
                text-align: center
                margin-right: 16px

@media (min-width: 739px)
    .mobile-nav
        &__body
            width: 60%
            padding-left: 32px
        &__link
            padding: 20px 0
            padding-left: 20px

@media (min-width: 1023px)
    .mobile-nav
        display: none

// Transition fade
.fade-enter-active,
.fade-leave-active
  transition: opacity 0.5s ease

.fade-enter-from,
.fade-leave-to
  opacity: 0

// Transition slide
.slide-enter-active
  transition: all 0.4s ease-out
  transform: translateX(0)

.slide-leave-active
  transition: all 0.8s ease-out

.slide-enter-from,
.slide-leave-to
  transform: translateX(-100%)
</style>
